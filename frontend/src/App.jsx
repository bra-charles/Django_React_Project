import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import FormsComponent from "./pages/FormsComponent";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import Chatbot from "./pages/Chatbot";
import "./styles/index.css";
import {
  PageStyleProvider,
  usePageStyle,
} from "./components/PageContext/PageStyleContext";
import AdminDashboard from "./pages/AdminDashboard";
import AuthProvider from "./components/AuthProvider.jsx";

function Logout() {
  localStorage.clear();
  return <Navigate to="/signin" />;
}

function App() {
  const isAuthenticated = () => {
    const token = localStorage.getItem("access_token");
    return token !== null;
  };

  return (
    <PageStyleProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route
              index
              path="/signin"
              element={<FormsComponent signIn={true} />}
            />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/signup" element={<FormsComponent signIn={false} />} />

            <Route path="/logout" element={<Logout />} />
            {/* Protected Route */}
            <Route
              path="/home"
              element={
                isAuthenticated() ? <LandingPage /> : <Navigate to="/signin" />
              }
            />
            <Route
              path="/chat"
              element={
                isAuthenticated() ? <Chatbot /> : <Navigate to="/signin" />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </PageStyleProvider>
  );
}

export default App;
