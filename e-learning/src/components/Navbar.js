import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrowRight from "./assets/icons/arrow-right.svg";
import logo from "./assets/icons/Logo.svg";
import hamburger from "./assets/icons/hamburger.svg";
import SidePanel from "./SidePanel";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 600px)");
    setIsWideScreen(mediaQuery.matches);

    const handleResize = () => {
      setIsWideScreen(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header">
      <section className="header--info">
        <article>Free Courses Sales Ends Soon. Get it Now</article>
        <img src={arrowRight} alt="" className="icon-sm" />
      </section>
      <nav className="nav">
        <figure className="nav--logo logo p-x-5">
          <img src={logo} alt="logo" />
        </figure>
        {isWideScreen && (
          <menu className="nav--menu">
            <li className="nav--menu--list">
              <Link to="/courses">Home</Link>
            </li>

            <li className="nav--menu--list">
              <Link to="/courses">Courses</Link>
            </li>

            <li className="nav--menu--list">
              <Link to="/courses">About Us</Link>
            </li>
            <li className="nav--menu--list">
              <Link to="/courses">Pricing</Link>
            </li>
            <li className="nav--menu--list">
              <Link to="/contact">Contact</Link>
            </li>
          </menu>
        )}
        {!isWideScreen && (
          <div className="nav--bar">
            <figure className="nav--hamburger" onClick={toggleMenu}>
              <img src={hamburger} alt="" />
            </figure>
          </div>
        )}
        {isWideScreen && (
          <div className="nav--btns">
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
          </div>
        )}
      </nav>
      {!isWideScreen && <SidePanel isOpen={menuOpen} toggleMenu={toggleMenu} />}
    </header>
  );
};

export default NavBar;
