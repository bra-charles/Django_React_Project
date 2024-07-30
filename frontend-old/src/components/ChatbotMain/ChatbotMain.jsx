import React from "react";
import { assets } from "../../assets/assets";
import "./chatbotmain.css";

function ChatbotMain() {
  return (
    <div className="chatbotmain">
      <div className="nav">
        <p>Troy</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          {/* <p>
            <span>Hello, Dev.</span>
          </p> */}
          <p><span>Let's learn</span></p>
          {/* <img src={assets.robot_ai} alt="" className="greet-icon" /> */}
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: Networking </p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Message Troy"/>
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Troy can make mistakes, so check important info. Your privacy and Troy Apps.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatbotMain;
