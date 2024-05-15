// import "./styles/css/homepage.css";
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
      className="flex flex-col gap-y-4 bg-white-97 md:py-6 md:px-20 md:flex-row md:justify-between py-3"
    >
      <section className="space-y-4">
        <figure>
          <img src={logo} alt="" />
        </figure>
        <figure className="space-y-2">
          <div className="flex  items-center">
            <i>
              <img src={emailIcn} alt="" className="h-5 aspect-square" />
            </i>
            <span>skillninja@gmail.com</span>
          </div>
          <div className="flex  items-center">
            <i>
              <img src={phoneIcn} alt="" className="h-5 aspect-square" />
            </i>
            <span>+91 92231 9301</span>
          </div>
          <div className="flex items-center">
            <i>
              <img src={locationIcn} alt="" className="h-5 aspect-square" />
            </i>
            <span>somewhere</span>
          </div>
        </figure>
      </section>
      <section className="grid grid-cols-2 md:gap-x-16">
        <div>
          <Link to="/">
            <h4 className="font-semiBold text-lg pb-1">Home</h4>
          </Link>
          <p className="text-grey-35 ">Benefits</p>
          <Link to="/courses">
            <p className="text-grey-35">Our Courses</p>
          </Link>
          <p className="text-grey-35">Our Testimonials</p>
          <p className="text-grey-35">Our FAQ</p>
        </div>
        <div>
          <h4 className="font-semiBold text-lg pb-1">About Us</h4>
          <p className="text-grey-35">Company</p>
          <p className="text-grey-35">Achievments</p>
          <p className="text-grey-35">Our Goals</p>
        </div>
      </section>
      <section className="">
        <div className="font-semiBold pb-1">Social Profiles</div>
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
      </section>
    </footer>
  );
};

export default Footer;
