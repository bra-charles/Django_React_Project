import React, { useState, useEffect } from "react";
import * as Forms from "../components/Forms/form.js";
import SignUpForm from "../components/Forms/SignUpForm";
import SignInForm from "../components/Forms/SignInForm";
import api from "../api.js";
import "../css/formComponents.scss";
import { usePageStyle } from "../components/PageContext/PageStyleContext.jsx";
import { message } from "antd";
import qs from "qs";
import { useAuth } from "../context/authContext.js";
import { useNavigate } from "react-router-dom";

function FormsComponent() {
  const { setPageStyle } = usePageStyle();
  const { userProfile, setUserProfile } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("auth-body");
    setPageStyle("auth-body");
    return () => {
      document.body.classList.remove("auth-body");
      setPageStyle("");
    };
  }, [setPageStyle]);

  useEffect(() => {
    if (userProfile) {
      userProfile.role === "student" ? navigate("/home") : navigate("/admin");
    }
  }, []);

  const [signIn, toggle] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/register/", formData);
      console.log("User signed up successfully:", response.data);
      toggle(true);
      setFormData({
        username: "",
        email: "",
        password: "",
        role: "",
      });
      // Handle success (e.g., redirect, show success message)
    } catch (error) {
      console.log(error);
      console.error("Error signing up:", error.response?.data);
      // Handle error (e.g., show error message)
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await api.post(
        "/token",
        qs.stringify({
          username: formData.username,
          password: formData.password,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const { access_token, token_type } = response.data;
      console.log("Access Token:", access_token);
      console.log("Refresh Token:", token_type);

      // Store tokens in local storage or any other state management solution
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", token_type);
      // setFormData({
      //   email: "",
      //   password: "",
      // });

      const userResponse = await api.get("/users/auth/current", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      setUserProfile(userResponse.data);

      userResponse.data.role === "student"
        ? navigate("/home")
        : navigate("/admin");

      // Handle success (e.g., redirect, show success message)
    } catch (error) {
      if (typeof error.response?.data?.detail === "string")
        message.error(error.response?.data?.detail);
      console.error("Error signing in:", error.response?.data);
      setFormData((prevData) => ({
        ...prevData,
        username: "",
      }));
      // Handle error (e.g., show error message)
    }
  };

  return (
    <Forms.Container>
      <Forms.SignUpContainer signinIn={signIn}>
        <SignUpForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSignUp}
        />
      </Forms.SignUpContainer>

      <Forms.SignInContainer signinIn={signIn}>
        <SignInForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSignIn}
        />
      </Forms.SignInContainer>

      <Forms.OverlayContainer signinIn={signIn}>
        <Forms.Overlay signinIn={signIn}>
          <Forms.LeftOverlayPanel signinIn={signIn}>
            <Forms.Title>Welcome Back!</Forms.Title>
            <Forms.Paragraph>
              To keep connected with us please login with your personal info
            </Forms.Paragraph>
            <Forms.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Forms.GhostButton>
          </Forms.LeftOverlayPanel>

          <Forms.RightOverlayPanel signinIn={signIn}>
            <Forms.Title>Hello, Friend!</Forms.Title>
            <Forms.Paragraph>
              Enter Your personal details and start journey with us
            </Forms.Paragraph>
            <Forms.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Forms.GhostButton>
          </Forms.RightOverlayPanel>
        </Forms.Overlay>
      </Forms.OverlayContainer>
    </Forms.Container>
  );
}

export default FormsComponent;
