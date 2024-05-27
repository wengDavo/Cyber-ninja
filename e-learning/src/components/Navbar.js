import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrowRight from "./assets/icons/arrow-right.svg";
import close from "./assets/icons/close.svg";
import Backdrop from "./Backdrop";
import useAxios from "../utils/useAxios";
import { useNavigate } from "react-router-dom/dist";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-toastify";

import logo from "./assets/icons/Logo.svg";
import hamburger from "./assets/icons/hamburger.svg";
import logout from "../components/assets/icons/logout.svg";
import { useAuthStore } from "../store/auth";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn] = useAuthStore((state) => [state.isLoggedIn]);

  const user = useAuthStore((state) => state.user());

  return (
    <header className="text-abs-white ">
      <section className="bg-orange-50 h-[40px] text-center flex justify-center items-center gap-2 rounded-regular">
        <Link to="/pricing">Free Courses Sales Ends Soon. Get it Now</Link>
        <img src={arrowRight} alt="" className="self-center h-4" />
      </section>
      <nav className="relative flex items-center justify-around p-4">
        <div>
          <Link to="/">
            <figure className="px-1">
              <img src={logo} alt="logo" />
            </figure>
          </Link>
        </div>
        {isLoggedIn() ? <LoggedInView user={user} /> : <LoggedOutView />}
        <div className="ml-auto md:order-2 ">
          <DesktopMenu />
          {isMenuOpen && (
            <MobileMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
          )}
          <figure className="ml-1 cursor-pointer group md:hidden">
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

export const LoggedInView = () => {
  const api = useAxios();
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user());
  const cancelSubscription = async () => {
    try {
      const response = await api.post("unsubscribe/");
      toast.success(response.data.detail, {
        autoClose: 3000,
      });
      navigate("/courses");
    } catch (error) {
      toast.error("Failed to unsubscribe. Please try again later.", {
        autoClose: 3000,
      });
    }
  };
  const redirectSubscribe = () => {
    navigate("/pricing");
  };
  const handleButtonClick = user?.paid ? cancelSubscription : redirectSubscribe;

  return (
    <div className="flex justify-between ml-auto space-x-2 md:order-3 ">
      <Link to="/pricing">
        <button
          onClick={handleButtonClick}
          className="px-1 border text-grey-15 rounded-regular bg-abs-white border-white-90 md:p-2 h-8"
        >
          {user?.paid ? " Cancel Plan" : "Subscribe Now"}
        </button>
      </Link>
      <Link to="/dashboard">
        <button className="h-8 px-1 bg-orange-50 rounded-regular md:p-2">
          Dashboard
        </button>
      </Link>

      <Link to="/logout">
        {/* <button className="h-10 px-1 bg-orange-50 rounded-regular md:p-2">
          Logout
        </button> */}
        <img src={logout} alt="" className="h-8 px-1 md:p-2 " />
      </Link>
      {/* <Link to="/dashboard">
        <button className="w-20 h-10 border text-grey-15 rounded-regular bg-abs-white border-white-97">
          {user.username}
        </button>
      </Link>
      <Link to="/logout">
        <button className="w-20 h-10 ml-3 bg-orange-50 rounded-regular">
          <img src={logout} alt="logout" />
          Logout
        </button>
      </Link> */}
      <Link to=""></Link>
    </div>
  );
};

export const LoggedOutView = ({ title }) => {
  return (
    <div className="flex ml-auto md:order-3">
      <Link to="/register">
        <button className="w-20 h-10 border text-grey-15 rounded-regular bg-abs-white border-white-97">
          Sign Up
        </button>
      </Link>
      <Link to="/login">
        <button className="w-20 h-10 ml-3 bg-orange-50 rounded-regular">
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
        <li className="px-5 py-3 text-orange-50 rounded-regular">
          <Link to="/">Home</Link>
        </li>
        <li className="px-5 py-3 text-orange-50 rounded-regular">
          <Link to="/courses">Courses</Link>
        </li>
        <li className="px-5 py-3 text-orange-50 rounded-regular">
          <Link to="/about">About Us</Link>
        </li>
        <li className="px-5 py-3 text-orange-50 rounded-regular">
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className="px-5 py-3 text-orange-50 rounded-regular">
          <Link to="/contact">Contact</Link>
        </li>
        <img
          src={close}
          alt=""
          className="absolute h-6 top-3 right-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </menu>
    </Backdrop>
  );
}

function DesktopMenu() {
  return (
    <menu className="hidden md:flex md:text-grey-15 md:gap-x-3">
      <li className="px-5 py-3 hover:bg-white-95 rounded-regular">
        <Link to="/">Home</Link>
      </li>

      <li className="px-5 py-3 hover:bg-white-95 rounded-regular">
        <Link to="/courses">Courses</Link>
      </li>

      <li className="px-5 py-3 hover:bg-white-95 rounded-regular">
        <Link to="/about">About Us</Link>
      </li>
      <li className="px-5 py-3 hover:bg-white-95 rounded-regular">
        <Link to="/pricing">Pricing</Link>
      </li>
      <li className="px-5 py-3 hover:bg-white-95 rounded-regular">
        <Link to="/contact">Contact</Link>
      </li>
    </menu>
  );
}

export default NavBar;
