import "./styles/css/homepage.css";
import Sarah from "./assets/photos/mobile/sarah.png";
import Jason from "./assets/photos/mobile/jason.png";
import Emily from "./assets/photos/mobile/emily.png";
import Michael from "./assets/photos/mobile/michael.png";

const Testimonials = () => {
  return (
    <section>
      <article>
        <h2 className="info--title">Our Testimonials</h2>
        <div className="info--main">
          <p className="info--description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
            necessitatibus accusantium earum porro dolor, aspernatur debitis.
            Consectetur atque itaque rem quis quas facilis veritatis
            dignissimos.
          </p>
          <button className="btn-medium bg-white-50 black">View All</button>
        </div>
      </article>
      <article className="testimonials">
        <div className="testimonial">
          <p className="testimonial--description">
            The web design course provided a solid foundation for me. The
            instructors were knowledgeable and supportive, and the interactive
            learning environment was engaging. I highly recommend it!..
          </p>
          <figure className="witness">
            <img src={Sarah} alt="" />
            <figcaption>Sarah L</figcaption>
          </figure>
        </div>
        <div className="testimonial">
          <p className="testimonial--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quod,
            rem sint assumenda possimus voluptates quae quia rerum sapiente
            voluptas.
          </p>
          <figure className="witness">
            <img src={Jason} alt="" />
            <figcaption>Jason M</figcaption>
          </figure>
        </div>
        <div className="testimonial">
          <p className="testimonial--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quod,
            rem sint assumenda possimus voluptates quae quia rerum sapiente
            voluptas.
          </p>
          <figure className="witness">
            <img src={Emily} alt="" />
            <figcaption>Emily R</figcaption>
          </figure>
        </div>
        <div className="testimonial">
          <p className="testimonial--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quod,
            rem sint assumenda possimus voluptates quae quia rerum sapiente
            voluptas.
          </p>
          <figure className="witness">
            <img src={Michael} alt="" />
            <figcaption>Michael K</figcaption>
          </figure>
        </div>
      </article>
    </section>
  );
};

export default Testimonials;
