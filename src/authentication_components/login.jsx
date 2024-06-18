import React from "react";
import './login.css';
import login_image from "../resources/login.png";
import { useState } from "react";
import "./signup.css";
import small_logo from "../resources/logo5.png";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import axios from 'axios'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import apiLink from '../apilink';
import { setUserstate } from "../redux/slices/userstateSlice";
import {  Link } from "react-router-dom";


export default function LoginPage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData,setLoginData]=useState(
    {
      email:'',
      password:''
    }
  )

function handleOnChange(event){
  const{name,value} = event.target ;
  setLoginData(prevState =>{
    return{
      ...prevState,
      [name]:value
    }
  });
}

const[message,setMessage ] = useState('');

function handleOnSubmit(event){
  event.preventDefault();
  if (loginData.email.trim || loginData.password.trim()){
    axios.post(`${apiLink}/users/login`,{
      email:loginData.email,
      password:loginData.password
    }).then(result=>{
      const{response} =result.data
      console.log(result.data.response)
      setMessage(response)
      if(response ===  'Login successful'){
        const userData = result.data.user
        console.log('this is the userData',userData)
        dispatch(setUserstate(userData))
        console.log('this is the userData',userData)
       

        if (userData.role === 'agent' || userData.role === 'superAgent') {
        setTimeout(()=>{
          navigate('/tickly/dashboard')},2000);}
        else {
          setTimeout(()=>{
            navigate('/signup')},2000);
        }
        
        }

          }).catch(err => {
            setMessage(err.response?.data?.message)
          })
  }
}

  return (
    <div className='login_page'>
      <div className="login_container_top_logo">
        <img src={small_logo} className="login_logo_right"></img>

      </div>
      <div className="login_container">

        <div className="login_image_and_logo_container">
          <div className="login_video_container">

            <img src={login_image} className="login_image">
            </img>
          </div>
          <span className="login_logo_left_container">
            <img src={small_logo} className="login_logo_left"></img>
            <p>TickLy!</p>
          </span>
        </div>

        <div className="login_form_container">
          <form className="login_form ">
            <div className="login_form_header">
              <h2>Login to continue!</h2>
            </div>
            <div className="login_form_body">

              <input
                type="email"
                placeholder="Email Address..."
                className="login_input"
                name ='email'
                value={loginData.email}
                onChange={handleOnChange}
                required
              />
              <input
                type="text"
                placeholder="Password..."
                className="login_input"
                name ='password'
                
                value={loginData.password}
                onChange={handleOnChange}
                required
              />
            </div>
            <p className="forgot_password">forgot Password?</p>
            <button onClick={handleOnSubmit} type="submit" className="login_button">
              login
            </button>
            <div className="login_form_footer">

            <Link to={'/signup'} className="tickets_link"> 
              <span className="login_form_arrow_span">
                <p>Create New Account</p>
                <ArrowForwardOutlinedIcon className="sign_up_arrow" fontSize="sma" />
              </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
