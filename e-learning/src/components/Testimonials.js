import Sarah from "./assets/photos/mobile/sarah.png";
import Jason from "./assets/photos/mobile/jason.png";
import Emily from "./assets/photos/mobile/emily.png";
import Michael from "./assets/photos/mobile/michael.png";

const s = () => {
  return (
    <section className="m-4">
      <article>
        <h2 className="font-semiBold h-10 flex items-center text-3xl md:text-4xl">
          Testimonies
        </h2>
        <div className="flex flex-col md:flex-row md:justify-between">
          <p className="leading-6 text-grey-35 md:w-[60%]">
            At Cyber Ninja, we pride ourselves on providing an exceptional
            learning experience tailored to each individual's needs. But don't
            just take our word for it—hear directly from our users who have
            transformed their lives and careers through our platform. Here are
            some of their inspiring stories:
          </p>
          <button className="w-20 h-10 rounded-regular self-end text-abs-black bg-white-95">
            View All
          </button>
        </div>
      </article>
      <article className="grid leading-6 md:grid-cols-2 ">
        <div className="p-5 bg-white-99">
          <p className="text-grey-40 text-sm">
            "I've always wanted to learn French, but my busy schedule made it
            difficult to attend traditional classes. Cyber Ninja has been a
            game-changer for me! The personalized learning paths and interactive
            exercises keep me engaged, and I can study whenever it suits me.
            I've made incredible progress in just a few months."
          </p>
          <figure className="border-t-[1px] mt-4 pt-4 border-solid border-white-90 flex items-center gap-x-4 p-2">
            <img src={Sarah} alt="" />
            <figcaption>Sarah M., Language Learner</figcaption>
          </figure>
        </div>
        <div className=" p-5 bg-white-99">
          <p className=" text-grey-40 text-sm self-end">
            "As a project manager, staying updated with the latest skills is
            crucial. The professional development courses on Cyber Ninja have
            not only helped me enhance my leadership and communication skills
            but also provided practical insights I could immediately apply at
            work. The real-time progress tracking keeps me motivated and on
            track with my learning goals."
          </p>
          <figure className="border-t-[1px] mt-4 pt-4 border-solid border-white-90 flex items-center gap-x-4 p-2">
            <img src={Jason} alt="" />
            <figcaption>
              James L., Professional Development Enthusiast
            </figcaption>
          </figure>
        </div>
        <div className=" p-5 bg-white-99">
          <p className=" text-grey-40 text-sm self-end">
            "I had zero coding experience before I started using Cyber Ninja. The technology and coding courses are incredibly
            user-friendly and comprehensive. The hands-on projects and
            problem-solving exercises made learning Python and JavaScript fun
            and manageable. I'm now confident enough to take on freelance
            projects!"
          </p>
          <figure className="border-t-[1px] mt-4 pt-4 border-solid border-white-90 flex items-center gap-x-4 p-2">
            <img src={Emily} alt="" />
            <figcaption>Emily R., Aspiring Developer</figcaption>
          </figure>
        </div>
        <div className=" p-5 bg-white-99">
          <p className=" text-grey-40 text-sm self-end">
            "The health and wellness courses on Cyber Ninja have transformed my
            lifestyle. The variety of fitness routines and nutrition advice has
            helped me achieve a balanced and healthy life. The ability to track
            my progress and get instant feedback keeps me motivated to reach my
            fitness goals."
          </p>
          <figure className="border-t-[1px] mt-4 pt-4 border-solid border-white-90 flex items-center gap-x-4 p-2">
            <img src={Michael} alt="" />
            <figcaption>Michael B., Fitness Enthusiast</figcaption>
          </figure>
        </div>
      </article>
    </section>
  );
};

export default s;