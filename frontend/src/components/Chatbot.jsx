import React from "react";
import styled from "styled-components";
import Sidebar from "./ChatbotSidebar/Sidebar";
import ChatbotMain from "./ChatbotMain/ChatbotMain";
import "./ChatbotMain/chatbotmain.css";
import "./ChatbotSidebar/sidebar.css";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

// const SidebarWrapper = styled.div`
//   width: 250px; /* Adjust the width as per your design */
// `;

// const ChatbotMainWrapper = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
// `;

function Chatbot() {
  return (
    <Container>
      <Sidebar />
      <ChatbotMain />
    </Container>
  );
}

export default Chatbot;
