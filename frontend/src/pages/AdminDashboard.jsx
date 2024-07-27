import { useState } from "react";
import "../components/AdminPanel/adminpanel.css";
import PanelHeader from "../components/AdminPanel/PanelHeader";
import PanelSidebar from "../components/AdminPanel/PanelSidebar";
import PanelHome from "../components/AdminPanel/PanelHome";

function AdminDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <PanelHeader OpenSidebar={OpenSidebar} />
      <PanelSidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <PanelHome />
    </div>
  );
}

export default AdminDashboard;
