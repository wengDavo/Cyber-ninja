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
            <p>
              <img src={emailIcn} alt="" />
            </p>
            <i>support@cyber-ninja.com</i>
          </div>
          <div className="flex flex-col justify-center items-center text-grey-30 leading-6 text-sm border border-white-95 p-4 mb-4">
            <p>
              <img src={phoneIcn} alt="" />
            </p>
            <i>+91 00000 00000</i>
          </div>
          <div className="flex flex-col justify-center items-center text-grey-30 leading-6 text-sm border border-white-95 p-4 mb-4">
            <p>
              <img src={locationIcn} alt="" />
            </p>
            <i>opposite the trides</i>
          </div>
        </article>
        <figure className="flex items-center gap-4 justify-center">
          <img src={linkedinIcn} alt="" />
          <img src={twitterIcn} alt="" />
          <img src={facebookIcn} alt="" />
        </figure>
      </section>
    </section>
  );
};

export default Contact;
