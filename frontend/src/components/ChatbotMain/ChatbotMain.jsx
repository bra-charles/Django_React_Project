import React, { useState, useRef, useEffect } from "react";
import { assets } from "../../assets/assets";
import "./chatbotmain.css";
import api from "../../api";
import { message as antdMessage } from "antd";
import robot from "../../assets/robot-ai.png";

function ChatbotMain({ activeCourse, messages, setRefetch, setMessages }) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null); // Ref for scrolling
  const [isBotTyping, setIsBotTyping] = useState(false); // Loader state

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    setMessage(""); // Clear message input
    const access_token = localStorage.getItem("access_token");

    if (!access_token) {
      antdMessage.error("Login again to continue");
      return;
    }

    if (!activeCourse) return;

    setLoading(true); // Set loading state to true
    setIsBotTyping(true); // Show loader

    try {
      const courseChats = await api.post(
        `/chat/`,
        {
          message,
          course_id: activeCourse.id,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      setMessages(courseChats.data);
      setRefetch((prevRefetch) => !prevRefetch);
    } catch (error) {
      console.log(error);
      antdMessage.error("Error fetching messages");
    } finally {
      setLoading(false); // Set loading state to false
      setIsBotTyping(false); // Hide loader
    }
  };

  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default behavior
      setMessages((prevMessages) => [
        ...prevMessages,
        { message, response: "" },
      ]);
      await sendMessage();
    }
  };

  useEffect(() => {
    scrollToBottom(); // Scroll to bottom whenever messages change
  }, [messages]);

  return (
    <div className="chatbotmain" style={{ width: "100%" }}>
      <div className="nav">
        <p>Troy</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {messages.length > 0 ? (
          <div
            style={{
              overflowY: "auto",
              width: "100%",
              height: "80vh",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              justifyContent: "stretch",
              alignItems: "stretch",
              fontSize: "13px",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  justifyContent: "stretch",
                  alignItems: "stretch",
                }}
              >
                <div
                  style={{
                    alignSelf: "flex-end",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "#505050",
                    maxWidth: "90%",
                  }}
                >
                  {msg.message}
                </div>
                <div
                  style={{
                    alignSelf: "flex-start",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "#2C2C2C",
                    maxWidth: "90%",
                  }}
                >
                  {msg.response.slice(msg.message.length)}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} /> {/* Ref for scrolling */}
          </div>
        ) : (
          <div
            className="cards"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="greet"
              style={{ textAlign: "left", alignSelf: "flex-start" }}
            >
              <p>
                <span>Let's learn</span>
              </p>
            </div>
            <img
              src={robot}
              alt="Robot"
              style={{
                width: "200px",
              }}
            />
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Message Troy"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress} // Handle Enter key press
              disabled={loading} // Disable input when loading
            />
            <div>
              <img
                src={assets.send_icon}
                alt="Send"
                onClick={sendMessage} // Handle click
                style={{
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.5 : 1,
                }}
              />
            </div>
          </div>
          <p className="bottom-info">
            Troy can make mistakes, so check important info. Your privacy and
            Troy Apps.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatbotMain;
