// import "../../styles/css/about.css";
import logoTransparent from "./assets/icons/logo-transparent.svg";

const Message = () => {
  return (
    <section className="bg-white-97 rounded-regular md:px-14 md:flex md:items-center md:justify-between">
      <article className="md:w-[60%]">
        <p className="text-3xl font-semiBold">
          <span className="text-orange-50 inline-block">Together</span> , let's shape the future of
          digital innovation
        </p>
        <p className="text-sm leading-6 text-grey-30">
        Join us on this exciting learning journey and unlock your potential in
          design and development.
        </p>
      </article>
      <article className="flex items-center justify-center md:flex-row-reverse">
        <button className="bg-orange-50 text-abs-white p-3 rounded-regular my-5">Join Now</button>
        <figure>
          <img src={logoTransparent} alt="" />
        </figure>
      </article>
    </section>
  );
};

export default Message;
