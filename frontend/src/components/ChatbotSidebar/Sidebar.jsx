import React, { useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { useAuth } from "../../context/authContext";
import { LiaSchoolSolid } from "react-icons/lia";

function Sidebar({ activeCourse, setActiveCourse }) {
  const [extended, setExtended] = useState(false);
  const { userProfile } = useAuth();

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />

        {extended ? (
          <div className="recent">
            <p
              className="recent-title"
              style={{
                display: "flex",
                width: "100%",
                gap: "0.5rem",
                alignItems: "center",
                color: "white",
              }}
            >
              <LiaSchoolSolid />
              <span>Courses</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: "1rem",
                justifyContent: "stretch",
                alignItems: "stretch",
              }}
            >
              {userProfile.enrolled_courses.length > 0 && activeCourse
                ? userProfile.enrolled_courses.map((course) => (
                    <div
                      className="recent-entry"
                      style={
                        activeCourse?.id === course.id
                          ? {
                              border: "1px solid white",
                            }
                          : {
                              minWidth: "150px",
                            }
                      }
                      onClick={() => setActiveCourse(course)}
                    >
                      <p>{course.name}</p>
                    </div>
                  ))
                : null}
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
