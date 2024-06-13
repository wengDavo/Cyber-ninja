import { Link } from "react-router-dom";
import emailIcn from "./assets/icons/emial-icon.svg";
import logo from "./assets/icons/Logo.svg";
import phoneIcn from "./assets/icons/phone-icon.svg";
import locationIcn from "./assets/icons/location-icon.svg";
import facebookIcn from "./assets/icons/sociual-facebook.svg";
import twitterIcn from "./assets/icons/social-twitter.svg";
import linkedinIcn from "./assets/icons/social-linkedin.svg";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col py-3 mt-3 gap-y-4 bg-white-97 md:py-6 md:px-20 md:flex-row md:justify-between"
    >
      <section className="space-y-4">
        <figure>
          <img src={logo} alt="" />
        </figure>
        <figure className="space-y-2">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"
                clipRule="evenodd"
              />
            </svg>
            <a href="https://t.me/cyber_ninja_TX">cyber-ninja</a>
            {/* <span>skillninja@gmail.com</span> */}
          </div>
          <div className="flex items-center">
            <i>
              <img src={phoneIcn} alt="" className="h-5 aspect-square" />
            </i>

            <a href="tel:14243738600">+1-424-373-8600</a>
          </div>
          {/* <div className="flex items-center">
            <i>
              <img src={locationIcn} alt="" className="h-5 aspect-square" />
            </i>
            <span>somewhere</span>
          </div> */}
        </figure>
      </section>
      <section className="grid grid-cols-2 md:gap-x-16">
        <div>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <h4 className="pb-1 text-lg font-semiBold">Home</h4>
          </Link>
          <p className="summary--item">Benefits</p>
          <Link
            to="/courses"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <p className="text-grey-35">Our Courses</p>
          </Link>
          <p className="text-grey-35">Our Testimonials</p>
          <p className="text-grey-35">Our FAQ</p>
        </div>
        <div>
          <h4 className="pb-1 text-lg font-semiBold">About Us</h4>

          <p className="text-grey-35">
            <Link to="/contact">Contact Us</Link>
          </p>
          <p className="text-grey-35">
            <Link to="/about">Achievments</Link>
          </p>
          <p className="text-grey-35">
            <Link to="/about">Our Goals</Link>
          </p>
        </div>
      </section>
      {/* <section className="social-info">
        <div className="pb-1 text-lg font-semiBold">Social Profiles</div>
        <figure className="flex gap-x-4">
          <i>
            <img src={facebookIcn} alt="" />
          </i>
          <i>
            <img src={twitterIcn} alt="" />
          </i>
          <i>
            <img src={linkedinIcn} alt="" />
          </i>
        </figure>
      </section> */}
    </footer>
  );
};

export default Footer;
