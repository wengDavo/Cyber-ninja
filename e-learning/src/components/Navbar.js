import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrowRight from "./assets/icons/arrow-right.svg";
import close from "./assets/icons/close.svg";
import Backdrop from "./Backdrop";

import logo from "./assets/icons/Logo.svg";
import hamburger from "./assets/icons/hamburger.svg";
import logout from "../components/assets/icons/logout.svg";
import { useAuthStore } from "../store/auth";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, user] = useAuthStore((state) => [
    state.isLoggedIn,
    state.user,
  ]);

  return (
    <header className="text-abs-white ">
      <section className="bg-orange-50 h-[40px] text-center flex justify-center items-center gap-2 rounded-regular">
        <article>Free Courses Sales Ends Soon. Get it Now</article>
        <img src={arrowRight} alt="" className="h-4" />
      </section>
      <nav className="flex p-4 justify-around items-center relative">
        <div>
          <Link to="/">
            <figure className="px-1">
              <img src={logo} alt="logo" />
            </figure>
          </Link>
        </div>
        {isLoggedIn() ? <LoggedInView user={user()} /> : <LoggedOutView />}
        <div className="md:order-2 ml-auto ">
          <DesktopMenu />
          {isMenuOpen && (
            <MobileMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
          )}
          <figure className="group md:hidden ml-1 cursor-pointer">
            <img
              src={hamburger}
              alt=""
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </figure>
        </div>
      </nav>
    </header>
  );
};

export const LoggedInView = ({ user }) => {
  return (
    <div className="ml-auto md:order-3">
      <Link to="/dashboard">
        <button className="w-20 h-10 text-grey-15 rounded-regular bg-abs-white border border-white-97">
          {user.username}
        </button>
      </Link>
      <Link to="/logout">
        <button className="w-20 h-10 bg-orange-50 ml-3 rounded-regular">
          {/* <img src={logout} alt="logout" /> */}
          Logout
        </button>
      </Link>
    </div>
  );
};

export const LoggedOutView = ({ title }) => {
  return (
    <div className="ml-auto md:order-3">
      <Link to="/register">
        <button className="w-20 h-10 text-grey-15 rounded-regular bg-abs-white border border-white-97">
          Sign Up
        </button>
      </Link>
      <Link to="/login">
        <button className="w-20 h-10 bg-orange-50 ml-3 rounded-regular">
          Login
        </button>
      </Link>
    </div>
  );
};

function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <Backdrop onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <menu className="z-20 bg-abs-white h-full w-[50%] ml-auto">
        <li className="text-orange-50 py-3 px-5 rounded-regular">
          <Link to="/">Home</Link>
        </li>
        <li className="text-orange-50 py-3 px-5 rounded-regular">
          <Link to="/courses">Courses</Link>
        </li>
        <li className="text-orange-50 py-3 px-5 rounded-regular">
          <Link to="/about">About Us</Link>
        </li>
        <li className="text-orange-50 py-3 px-5 rounded-regular">
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className="text-orange-50 py-3 px-5 rounded-regular">
          <Link to="/contact">Contact</Link>
        </li>
        <img
          src={close}
          alt=""
          className="h-6 absolute top-3 right-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </menu>
    </Backdrop>

  );
}

function DesktopMenu() {
  return (
    <menu className="hidden md:flex md:text-grey-15 md:gap-x-3">
      <li className="py-3 px-5 hover:bg-white-95 rounded-regular">
        <Link to="/">Home</Link>
      </li>

      <li className="py-3 px-5 hover:bg-white-95 rounded-regular">
        <Link to="/courses">Courses</Link>
      </li>

      <li className="py-3 px-5 hover:bg-white-95 rounded-regular">
        <Link to="/about">About Us</Link>
      </li>
      <li className="py-3 px-5 hover:bg-white-95 rounded-regular">
        <Link to="/pricing">Pricing</Link>
      </li>
      <li className="py-3 px-5 hover:bg-white-95 rounded-regular">
        <Link to="/contact">Contact</Link>
      </li>
    </menu>
  );
}

export default NavBar;
