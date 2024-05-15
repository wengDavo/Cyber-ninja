// import "../../styles/css/contact.css";
import emailIcn from "./assets/icons/emial-icon.svg";
import phoneIcn from "./assets/icons/phone-icon.svg";
import locationIcn from "./assets/icons/location-icon.svg";
import facebookIcn from "./assets/icons/sociual-facebook.svg";
import twitterIcn from "./assets/icons/social-twitter.svg";
import linkedinIcn from "./assets/icons/social-linkedin.svg";

const Contact = () => {
  return (
    <section class="bg-white-97 border border-white-97 p-7 flex flex-col gap-8 md:grid md:grid-cols-2">
      <form
        action=""
        class="flex flex-col gap-4 md:p-3 border border-white-90 p-2"
      >
        <p class="flex flex-col gap-2 relative">
          <label for="" className="text-sm leading-6">
            First Name
          </label>
          <input
            className="p-5 border border-white-95 placeholder:leading-6 placeholder:text-sm placeholder:capitalize"
            type="text"
            name=""
            id=""
            placeholder="Enter Your First Name"
          />
        </p>
        <p class="flex flex-col gap-2 relative">
          <label for="" className="text-sm leading-6">
            Last Name
          </label>
          <input
            className="p-5 border border-white-95"
            type="text"
            name=""
            id=""
            placeholder="Enter Your Last Name"
          />
        </p>
        <p class="flex flex-col gap-2 relative">
          <label for="" className="text-sm leading-6">
            Email
          </label>
          <input
            className="p-5 border border-white-95"
            type="email"
            name=""
            id=""
            placeholder="Enter your Email"
          />
        </p>
        <p class="flex flex-col gap-2 relative">
          <label for="" className="text-sm leading-6">
            Phone
          </label>
          <input
            className="p-5 border border-white-95"
            type="tel"
            name=""
            id=""
            placeholder="Enter Phone Number"
          />
        </p>
        <p class="flex flex-col gap-2 relative">
          <label for="" className="text-sm leading-6">
            Subject
          </label>
          <input
            className="p-5 border border-white-95"
            type="text"
            name=""
            id=""
            placeholder="Enter Subject Matter"
          />
        </p>
        <p class="flex flex-col gap-2 relative">
          <label for="" className="text-sm leading-6">
            Message
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="enter your message here..."
            className="resize-none border border-white-95 leading-6 p-5 tex-sm"
          ></textarea>
        </p>
        <button type="submit" class="text-abs-white p-3 rad-6 bg-orange-50">
          Send Your Message
        </button>
      </form>
      <section>
        <article>
          <div class="flex flex-col justify-center items-center text-grey-30 leading-6 text-sm border border-white-95 p-4 mb-4">
            <p>
              <img src={emailIcn} alt="" />
            </p>
            <i>support@cyber-ninja.com</i>
          </div>
          <div class="flex flex-col justify-center items-center text-grey-30 leading-6 text-sm border border-white-95 p-4 mb-4">
            <p>
              <img src={phoneIcn} alt="" />
            </p>
            <i>+91 00000 00000</i>
          </div>
          <div class="flex flex-col justify-center items-center text-grey-30 leading-6 text-sm border border-white-95 p-4 mb-4">
            <p>
              <img src={locationIcn} alt="" />
            </p>
            <i>opposite the trides</i>
          </div>
        </article>
        <figure class="flex items-center gap-4 justify-center">
          <img src={linkedinIcn} alt="" />
          <img src={twitterIcn} alt="" />
          <img src={facebookIcn} alt="" />
        </figure>
      </section>
    </section>
  );
};

export default Contact;
