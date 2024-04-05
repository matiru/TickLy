import React from "react";
import './login.css';
import ReactPlayer from "react-player";
import login_image from "../resources/login.png";
import { useState } from "react";
import "./signup.css";
import small_logo from "../resources/logo5.png";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';



export default function LoginPage() {



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
                type="text"
                placeholder="Email Address..."
                className="login_input"
              />
              <input
                type="text"
                placeholder="Password..."
                className="login_input"
              />
            </div>
            <p className="forgot_password">forgot Password?</p>
            <button type="submit" className="login_button">
              login
            </button>
            <div className="login_form_footer">
              <span className="login_form_arrow_span">
                <p>Create New Account</p>
                <ArrowForwardOutlinedIcon className="sign_up_arrow" fontSize="sma" />
              </span>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
