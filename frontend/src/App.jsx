import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FormsComponent from "./components/FormsComponent";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./styles/style.css";


function Logout() {
  localStorage.clear();
  return <Navigate to="/signin" />;
}

function App() {
  // Function to check if user is authenticated
  const isAuthenticated = () => {
    const token = localStorage.getItem("access_token");
    return token !== null;
  };

  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<FormsComponent signIn={true} />} />
        <Route path="/signup" element={<FormsComponent signIn={false} />} />
        <Route path="/logout" element={<Logout />} />
        {/* Protected Route */}
        <Route
          path="/home"
          element={isAuthenticated() ? <Home /> : <Navigate to="/signin" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
