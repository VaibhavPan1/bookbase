import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./CSS/AdminSidebar.css";
import white_logo_full from "../../resources/white_logo_full.png";
import { Book, Bookmark, Home, LogOut, Users } from "react-feather";
import { clearUserSession } from "../../utilities/SessionStorage";

export default function AdminSidebar() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    clearUserSession();
    navigate("/signin");
  };
  
  return (
    <aside className="adminsidebar">
      <div className="admintop">
        <img src={white_logo_full} alt="bookbase logo" />
      </div>

      <div className="adminmid">
        <NavLink
          to="/admindashboard"
          className={({ isActive }) =>
            isActive ? "active admin-link" : "admin-link"
          }
        >
          <Home />
          Dashboard
        </NavLink>

        <NavLink
          to="/adminborrowers"
          className={({ isActive }) =>
            isActive ? "active admin-link" : "admin-link"
          }
        >
          <Bookmark />
          Borrowers
        </NavLink>

        <NavLink
          to="/adminbooks"
          className={({ isActive }) =>
            isActive ? "active admin-link" : "admin-link"
          }
        >
          <Book />
          Books
        </NavLink>

        <NavLink
          to="/adminusers"
          className={({ isActive }) =>
            isActive ? "active admin-link" : "admin-link"
          }
        >
          <Users />
          Users
        </NavLink>
      </div>

      <div className="adminbottom">
        <button onClick={handleSignOut} className="logoutbtn">
          <LogOut /> Log out
        </button>
      </div>
    </aside>
  );
}
