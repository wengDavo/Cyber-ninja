import "./styles/css/homepage.css";
import emailIcn from "./assets/icons/emial-icon.svg";
import logo from "./assets/icons/Logo.svg";
import phoneIcn from "./assets/icons/phone-icon.svg";
import locationIcn from "./assets/icons/location-icon.svg";
import facebookIcn from "./assets/icons/sociual-facebook.svg";
import twitterIcn from "./assets/icons/social-twitter.svg";
import linkedinIcn from "./assets/icons/social-linkedin.svg";

const Footer = () => {
  return (
    <footer id="footer" >
      <section className="contact-info">
        <figure className="p-b-5">
          <img src={logo} alt="" />
        </figure>
        <figure>
          <div>
            <i>
              <img src={emailIcn} alt="" className="icon-sm"/>
            </i>
            <span>skillninja@gmail.com</span>
          </div>
          <div>
            <i>
              <img src={phoneIcn} alt="" className="icon-sm" />
            </i>
            <span>+91 92231 9301</span>
          </div>
          <div>
            <i>
              <img src={locationIcn} alt="" className="icon-sm"/>
            </i>
            <span>somewhere</span>
          </div>
        </figure>
      </section>
      <section className="summary">
        <div>
          <h4 className="semi-bold fs-18 p-b-5">Home</h4>
          <p className="summary--item">Benefits</p>
          <p className="summary--item">Our Courses</p>
          <p className="summary--item">Our Testimonials</p>
          <p className="summary--item">Our FAQ</p>
        </div>
        <div>
          <h4 className="semi-bold fs-18 p-b-5">About Us</h4>
          <p className="summary--item">Company</p>
          <p className="summary--item">Achievments</p>
          <p className="summary--item">Our Goals</p>
        </div>
      </section>
      <section className="social-info">
        <div className="semi-bold p-b-5">Social Profiles</div>
        <figure>
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
