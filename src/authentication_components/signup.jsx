import React from "react";
import ReactPlayer from "react-player";
import sign_up_video from "../resources/TickLy.mp4";
import { useState } from "react";
import "./signup.css";
import small_logo from "../resources/logo5.png";

function Sign_up_Page() {
  return (
    <div className ='login_page'>

    <div className="login_container_top_logo">
            <img src={small_logo} className="sign_up_logo_right"></img>
        </div>
    <div className="sign_up_container">

      <div className="sign_up_video_and_logo_container">
        <div className="sign_up_video_container">
          <ReactPlayer
            playing={true}
            loop={true}
            url={sign_up_video}
            width="640px"
            height="360px"
            onReady={() => console.log("onReady callback")}
            className="sign_up_video"
            controls={true}
          />
        </div>
        <span className="sign_up_logo_left_container">
          <img src={small_logo} className="sign_up_logo_left"></img>
          <p>TickLy!</p>
        </span>
      </div>

      <div className="sign_up_form_container">
        <form className="sign_up_form ">
          <div className="sign_up_form_header">
            <h2>Sign Up !</h2>
          </div>
          <div className="sign_up_form_body">
            <input
              type="text"
              placeholder="Name..."
              className="sign_up_input"
            />
            <input
              type="text"
              placeholder="Email Address..."
              className="sign_up_input"
            />
            <input
              type="text"
              placeholder="Password..."
              className="sign_up_input"
            />
            <input
              type="text"
              placeholder="Repeat Password..."
              className="sign_up_input"
            />
          </div>
          <div className="sign_up_form_footer">
            <span className="sign_up_form_checkbox">
              <input type="checkbox" />
              <p>I agree to the Terms of User</p>
            </span>
            <button type="submit" className="sign_up_button">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Sign_up_Page;
