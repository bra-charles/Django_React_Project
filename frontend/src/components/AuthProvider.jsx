import React, { useEffect, useState } from "react";
import AuthContext from "../context/authContext";

// Define the AuthProvider component
const AuthProvider = ({ children }) => {
  // Initialize state with a default value
  const [userProfile, setUserProfile] = useState(null);
  // Function to update the user profile
  const updateUserProfile = (profile) => {
    setUserProfile(profile);
    localStorage.setItem("userProfile", JSON.stringify(profile));
  };

  const getUserProfile = () => {
    setUserProfile(JSON.parse(localStorage.getItem("userProfile")));
    return JSON.parse(localStorage.getItem("userProfile"));
  };

  useEffect(() => {
    setUserProfile(JSON.parse(localStorage.getItem("userProfile")));
  }, []);

  return (
    <AuthContext.Provider
      value={{ userProfile, setUserProfile: updateUserProfile, getUserProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
