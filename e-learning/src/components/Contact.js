// import "../../styles/css/contact.css";
import emailIcn from "./assets/icons/emial-icon.svg";
import phoneIcn from "./assets/icons/phone-icon.svg";
import locationIcn from "./assets/icons/location-icon.svg";
import facebookIcn from "./assets/icons/sociual-facebook.svg";
import twitterIcn from "./assets/icons/social-twitter.svg";
import linkedinIcn from "./assets/icons/social-linkedin.svg";

import { useState } from "react";
import anyAxios from "../utils/anyAxios";
import { toast } from "react-toastify";

const Contact = () => {
  const api = anyAxios();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      toast.loading("Sending Message ...");
      const response = await api.post("contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Add CSRF token if needed
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data, { autoClose: 3000 });
      } else {
        toast.error("Message not sent", { autoClose: 3000 });
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to send message. Please try again later.", {
        autoClose: 3000,
      });
    }
  };
  return (
    <section className="bg-white-97 border border-white-97 p-7 flex flex-col gap-8 md:grid md:grid-cols-2">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 md:p-3 border border-white-90 p-2"
      >
        <p className="flex flex-col gap-2 relative">
          <label for="" className="text-sm leading-6">
            First Name
          </label>
          <input
            className="p-5 border border-white-95 placeholder:leading-6 placeholder:text-sm placeholder:capitalize"
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter Your First Name"
          />
        </p>
        <p className="flex flex-col gap-2 relative">
          <label for="" className="text-sm leading-6">
            Last Name
          </label>
          <input
            className="p-5 border border-white-95"
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter Your Last Name"
          />
        </p>
        <p className="flex flex-col gap-2 relative">
          <label for="" className="text-sm leading-6">
            Email
          </label>
          <input
            className="p-5 border border-white-95"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email"
          />
        </p>
        <p className="flex flex-col gap-2 relative">
          <label for="" className="text-sm leading-6">
            Phone
          </label>
          <input
            className="p-5 border border-white-95"
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
          />
        </p>
        <p className="flex flex-col gap-2 relative">
          <label for="" className="text-sm leading-6">
            Subject
          </label>
          <input
            className="p-5 border border-white-95"
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter Subject Matter"
          />
        </p>
        <p className="flex flex-col gap-2 relative">
          <label for="" className="text-sm leading-6">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={formData.message}
            onChange={handleChange}
            placeholder="enter your message here..."
            className="resize-none border border-white-95 leading-6 p-5 tex-sm"
          ></textarea>
        </p>
        <button type="submit" className="text-abs-white p-3 rad-6 bg-orange-50">
          Send Your Message
        </button>
      </form>
      <section>
        <article>
          <div className="flex flex-col justify-center items-center text-grey-30 leading-6 text-sm border border-white-95 p-4 mb-4">
            {/* <p>
              <img src={emailIcn} alt="" />
            </p>
            <i>support@cyber-ninja.com</i> */}
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
          </div>
          <div className="flex flex-col justify-center items-center text-grey-30 leading-6 text-sm border border-white-95 p-4 mb-4">
            <p>
              <img src={phoneIcn} alt="" />
            </p>
            <a href="tel:14243738600">+1-424-373-8600</a>
          </div>
          {/* <div className="flex flex-col justify-center items-center text-grey-30 leading-6 text-sm border border-white-95 p-4 mb-4">
            <p>
              <img src={locationIcn} alt="" />
            </p>
            <i>opposite the trides</i>
          </div> */}
        </article>
        {/* <figure className="flex items-center gap-4 justify-center">
          <img src={linkedinIcn} alt="" />
          <img src={twitterIcn} alt="" />
          <img src={facebookIcn} alt="" />
        </figure> */}
      </section>
    </section>
  );
};

export default Contact;
