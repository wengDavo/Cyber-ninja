import "./styles/css/homepage.css";
import threeLines from "./assets/icons/three-lines.svg";
import bolt from "./assets/icons/bolt.svg";

const Hero = () => {
  return (
    <section className="hero" style={{ display: "block" }}>
      <article className="hero--top">
        <img src={threeLines} alt="" className="icon-lg fly" />
        <figure className="bg-orange-95 p-12">
          <img src={bolt} alt="" className="icon-m" />
        </figure>
        <div>
          <span className="orange-50">Unlock</span> Your Creative Potential
        </div>
      </article>
      <article className="hero--center">
        <div className="fs-24">With Online Design and Development Courses</div>
        <div className="fs-14 grey-60">
          Learn from Industry Experts and Enhance Your Skill
        </div>
      </article>
      <article className="hero--bottom">
        <button className="btn-lg bg-orange-50 white">Explore Courses</button>
        <button className="btn-lg" style={{ marginLeft: "10px" }}>
          View Pricing
        </button>
      </article>
    </section>
  );
};

export default Hero;
