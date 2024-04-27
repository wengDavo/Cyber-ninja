import "./styles/css/homepage.css";
const Footer = () => {
  return (
    <footer id="footer">
      <section className="contact-info">
        <figure className="p-b-5">
          <img src="/assets/icons/Logo.svg" alt="" />
        </figure>
        <figure>
          <div>
            <i><img src="/assets/icons/emial-icon.svg" alt="" /></i>
            <span>skillninja@gmail.com</span>
          </div>
          <div>
            <i><img src="/assets/icons/phone-icon.svg" alt="" /></i>
            <span>+91 92231 9301</span>
          </div>
          <div>
            <i><img src="/assets/icons/location-icon.svg" alt="" /></i>
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
          <i><img src="/assets/icons/sociual-facebook.svg" alt="" /></i>
          <i><img src="/assets/icons/social-twitter.svg" alt="" /></i>
          <i><img src="/assets/icons/social-linkedin.svg" alt="" /></i>
        </figure>
      </section>
    </footer>
  );
};

export default Footer;
