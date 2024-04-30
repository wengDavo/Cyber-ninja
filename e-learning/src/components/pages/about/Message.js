import "../../styles/css/about.css";
import logoTransparent from "../../assets/icons/logo-transparent.svg";

const Message = () => {
  return (
    <section className="message">
      <article className="msg-container">
        <p className="info">
          <span className="orange-50">Together</span> , let's shape the future of
          digital innovation
        </p>
        <p className="description">
        Join us on this exciting learning journey and unlock your potential in
          design and development.
        </p>
      </article>
      <article className="logo-btn">
        <button className="bg-orange-50 white p-12 rad-6 m-y-20">Join Now</button>
        <figure>
          <img src={logoTransparent} alt="" />
        </figure>
      </article>
    </section>
  );
};

export default Message;
