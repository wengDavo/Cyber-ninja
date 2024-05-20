import threeLines from "./assets/icons/three-lines.svg";
import bolt from "./assets/icons/bolt.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-white-97 text-center py-8 md:w-[80%] mx-auto space-y-6">
      <article className="h-20 flex items-center p-4 gap-4 font-semiBold text-grey-10 [word-sapcing:0.1rem] border-white-95 border-solid border-[1px] relative md:font-bold md:text-4xl md:w-fit md:mx-auto bg-abs-white rounded-regular">
        <img
          src={threeLines}
          alt=""
          className="w-10 h-10 absolute top-[-20px] left-[-10px]"
        />
        <figure className="bg-orange-95 p-3">
          <img src={bolt} alt="" className="w-6 h-6" />
        </figure>
        <div>
          <span className="text-orange-50 inline-block px-1">Unlock</span> Your
          Creative Potential
        </div>
      </article>
      <article className="items-center font-medium leading-6">
        <div className="mx-auto text-xl">
          With Online Design and Development Courses
        </div>
        <div className="text-sm text-grey-60 mx-auto">
          Learn from Industry Experts and Enhance Your Skill
        </div>
      </article>
      <article>
        <Link to="/courses">
          <button className="bg-orange-50 white rounded-regular h-12 w-32 text-abs-white text-xs">
            Explore Courses
          </button>
        </Link>
        <Link to="/pricing">
          <button className="text-grey-15 rounded-regular h-12 w-32 ml-2 text-xs bg-abs-white border border-white-97">
            View Pricing
          </button>
        </Link>
      </article>
    </section>
  );
};

export default Hero;
