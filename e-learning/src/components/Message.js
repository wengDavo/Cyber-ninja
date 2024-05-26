import { Link } from "react-router-dom";
import logoTransparent from "./assets/icons/logo-transparent.svg";

const Message = () => {
  return (
    <section className="bg-white-97 rounded-regular md:px-14 md:flex md:items-center md:justify-between">
      <article className="md:w-[60%]">
        <p className="text-3xl font-semiBold">
          <span className="inline-block text-orange-50">Together</span> , let's
          shape the future of digital innovation and ethical hacking
        </p>
        <p className="text-sm leading-6 text-grey-30">
          Join us on this exciting learning journey and unlock your potential in
          ethical hacking.
        </p>
      </article>
      <article className="flex items-center justify-center md:flex-row-reverse">
        <button className="p-3 my-5 bg-orange-50 text-abs-white rounded-regular">
          <Link to="/register">Join Now</Link>
        </button>
        <figure>
          <img src={logoTransparent} alt="" />
        </figure>
      </article>
    </section>
  );
};

export default Message;