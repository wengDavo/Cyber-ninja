import "./styles/css/homepage.css";
import threeLines from "./assets/icons/three-lines.svg";
import bolt from "./assets/icons/bolt.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="heroo">
      <article className="heroo--top">
        <img src={threeLines} alt="" className="icon-lg fly" />
        <figure className="bg-orange-95 p-12">
          <img src={bolt} alt="" className="icon-m" />
        </figure>
        <div>
          <span className="orange-50">Unlock</span> Your Creative Potential
        </div>
      </article>
      <article className="heroo--center">
        <div className="fs-24">With Online Design and Development Courses</div>
        <div className="fs-14 grey-60">
          Learn from Industry Experts and Enhance Your Skill
        </div>
      </article>
      <article className="heroo--bottom">
        <Link
          to="/courses"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <button className="btn-lg bg-orange-50 white">Explore Courses</button>
        </Link>
        <Link
          to="/pricing"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <button className="btn-lg" style={{ marginLeft: "10px" }}>
            View Pricing
          </button>
        </Link>
      </article>
    </section>
  );
};

export default Hero;
