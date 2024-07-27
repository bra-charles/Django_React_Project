import React from "react";
import styled from "styled-components";
import Sidebar from "../components/ChatbotSidebar/Sidebar";
import ChatbotMain from "../components/ChatbotMain/ChatbotMain";
import "../components/ChatbotMain/chatbotmain.css";
import "../components/ChatbotSidebar/sidebar.css";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

function Chatbot() {
  return (
    <Container>
      <Sidebar />
      <ChatbotMain />
    </Container>
  );
}

export default Chatbot;
