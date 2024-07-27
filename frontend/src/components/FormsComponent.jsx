import React, { useState, useEffect } from "react";
import * as Forms from "./form.js";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import api from "../api";
import { usePageStyle } from "./PageContext/PageStyleContext";


function FormsComponent() {
  const { setPageStyle } = usePageStyle();

  useEffect(() => {
    document.body.classList.add("auth-body");
    setPageStyle("auth-body");
    return () => {
      document.body.classList.remove("auth-body");
      setPageStyle("");
    };
  }, [setPageStyle]);

  const [signIn, toggle] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
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
      const response = await api.post("/signup/", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      console.log("User signed up successfully:", response.data);
      // Handle success (e.g., redirect, show success message)
    } catch (error) {
      console.error("Error signing up:", error.response?.data);
      // Handle error (e.g., show error message)
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/signin/", {
        username: formData.username,
        password: formData.password,
      });
      const { access, refresh } = response.data;
      console.log("Access Token:", access);
      console.log("Refresh Token:", refresh);

      // Store tokens in local storage or any other state management solution
      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
      // Handle success (e.g., redirect, show success message)
    } catch (error) {
      console.error("Error signing in:", error.response?.data);
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
