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
      <Router>
        <Routes>
          {/* <Route path="/LP" element={<LandingPage />} /> */}
          <Route path="/signin" element={<FormsComponent signIn={true} />} />
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
    </PageStyleProvider>
  );
}

export default App;
