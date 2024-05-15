// SidePanel.js
import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { LoggedOutView, LoggedInView } from "./Navbar";

const SidePanel = ({ isOpen, toggleMenu }) => {
  const [isLoggedIn, user] = useAuthStore((state) => [
    state.isLoggedIn,
    state.user,
  ]);

  return (
    <div className={`side-panel ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
      <div className="side-panel-content">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact
            </Link>
          </li>
          <li>
            {isLoggedIn() ? <LoggedInView user={user()} /> : <LoggedOutView />}

            {/* <Link
              to="/register"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="btn-medium grey-15">Sign Up</button>
            </Link>
            <Link
              to="/private"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button
                className="btn-medium bg-orange-50"
                style={{ marginLeft: "10px", color:"white" }}
              >
                Login
              </button>
            </Link> */}
          </li>
        </ul>
        <button className="close-btn" onClick={toggleMenu}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SidePanel;
