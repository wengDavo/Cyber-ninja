import "../../styles/css/contact.css";
import emailIcn from "../../assets/icons/emial-icon.svg";
import phoneIcn from "../../assets/icons/phone-icon.svg";
import locationIcn from "../../assets/icons/location-icon.svg";
import facebookIcn from "../../assets/icons/sociual-facebook.svg";
import twitterIcn from "../../assets/icons/social-twitter.svg";
import linkedinIcn from "../../assets/icons/social-linkedin.svg";

const Contact = () => {
  return (
    <section class="contact">
      <form action="" class="contact--form">
        <p class="contact--item">
          <label for="">First Name</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Your First Name"
          />
        </p>
        <p class="contact--item">
          <label for="">Last Name</label>
          <input type="text" name="" id="" placeholder="Enter Your Last Name" />
        </p>
        <p class="contact--item">
          <label for="">Email</label>
          <input type="email" name="" id="" placeholder="Enter your Email" />
        </p>
        <p class="contact--item">
          <label for="">Phone</label>
          <input type="tel" name="" id="" placeholder="Enter Phone Number" />
        </p>
        <p class="contact--item">
          <label for="">Subject</label>
          <input type="text" name="" id="" placeholder="Enter Subject Matter" />
        </p>
        <p class="contact--item">
          <label for="">Message</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="enter your message here..."
          ></textarea>
        </p>
        <button type="submit" class="white p-12 rad-6 bg-orange-50">
          Send Your Message
        </button>
      </form>
      <section>
        <article>
          <div class="contact--locate">
            <p>
              <img src={emailIcn} alt="" />
            </p>
            <i>support@cyber-ninja.com</i>
          </div>
          <div class="contact--locate">
            <p>
              <img src={phoneIcn} alt="" />
            </p>
            <i>+91 00000 00000</i>
          </div>
          <div class="contact--locate">
            <p>
              <img src={locationIcn} alt="" />
            </p>
            <i>opposite the trides</i>
          </div>
        </article>
        <figure class="contact--socials">
          <img src={linkedinIcn} alt="" />
          <img src={twitterIcn} alt="" />
          <img src={facebookIcn} alt="" />
        </figure>
      </section>
    </section>
  );
};

export default Contact;
