// SidePanel.js
import React from "react";
import { Link } from "react-router-dom";
import "./SidePanel.css"; // Import CSS file for styling

const SidePanel = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`side-panel ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
      <div className="side-panel-content">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/register">
              <button className="btn-medium grey-15">Sign Up</button>
            </Link>
            <Link to="/private">
              <button
                className="btn-medium bg-orange-50"
                style={{ marginLeft: "10px" }}
              >
                Login
              </button>
            </Link>
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
