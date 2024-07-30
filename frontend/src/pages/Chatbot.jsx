import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/ChatbotSidebar/Sidebar";
import ChatbotMain from "../components/ChatbotMain/ChatbotMain";
import "../components/ChatbotMain/chatbotmain.css";
import "../components/ChatbotSidebar/sidebar.css";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import api from "../api";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

function Chatbot() {
  const { userProfile, setUserProfile } = useAuth();
  const [activeCourse, setActiveCourse] = useState(
    userProfile?.enrolled_courses?.length > 0
      ? userProfile.enrolled_courses[0]
      : {}
  );

  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [refetch, setRefetch] = useState(true);

  const fetchMessages = async () => {
    const access_token = localStorage.getItem("access_token");

    if (!access_token) {
      message.error("Login again to continue");
      return;
    }
    try {
      const courseChats = await api.get(
        `/chat/users/${activeCourse.id}/messages`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      if (Array.isArray(courseChats.data)) {
        const sortedData = courseChats.data?.sort(
          (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
        );

        // Set the sorted messages
        setMessages(sortedData);
      }
    } catch (error) {
      console.log(error);
      message.error("Error fetching messages");
    }
  };
  useEffect(() => {
    fetchMessages();
    setActiveCourse(
      userProfile?.enrolled_courses?.length > 0
        ? userProfile.enrolled_courses[0]
        : null
    );
  }, []);

  useEffect(() => {
    if (!activeCourse) {
      setActiveCourse(
        userProfile?.enrolled_courses?.length > 0
          ? userProfile.enrolled_courses[0]
          : null
      );
    }
  }, [activeCourse]);

  useEffect(() => {
    console.log("here");
    fetchMessages();
  }, [activeCourse, refetch]);
  // useEffect(() => {
  //   if (!userProfile) navigate("/signin");
  // }, [userProfile]);

  return (
    <Container>
      <Sidebar activeCourse={activeCourse} setActiveCourse={setActiveCourse} />
      <ChatbotMain
        activeCourse={activeCourse}
        messages={messages}
        setRefetch={setRefetch}
        setMessages={setMessages}
      />
    </Container>
  );
}

export default Chatbot;
