import Sarah from "./assets/photos/mobile/sarah.png";
import Jason from "./assets/photos/mobile/jason.png";
import Emily from "./assets/photos/mobile/emily.png";
import Michael from "./assets/photos/mobile/michael.png";

const s = () => {
  return (
    <section className="m-4">
      <article>
        <h2 className="flex items-center h-10 text-3xl font-semiBold md:text-4xl">
          Testimonies
        </h2>
        <div className="">
          <p className="leading-6 text-grey-35 md:w-[60%]">
            At Cyber Ninja, we pride ourselves on providing an exceptional
            learning experience tailored to each individual's needs. But don't
            just take our word for it hear directly from our users who have
            transformed their lives and careers through our platform. Here are
            some of their inspiring stories:
          </p>
        </div>
      </article>
      <article className="grid leading-6 md:grid-cols-2 ">
        <div className="p-5 bg-white-99">
          <p className="text-sm text-grey-40">
            "I've always wanted to learn Penetration Testing, but my busy schedule made it
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
        <div className="p-5 bg-white-99">
          <p className="self-end text-sm text-grey-40">
            "As a manager, staying updated with the latest skills is
            crucial. The professional Certifiec Ethical Hacking courses on Cyber Ninja have
            not only helped me enhance my ethical hacking skills
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
        <div className="p-5 bg-white-99">
          <p className="self-end text-sm text-grey-40">
            "I had zero ethical hacking experience before I started using Cyber Ninja. The introduction to ethical hacking courses are incredibly
            user-friendly and comprehensive I still can't believe i got this all for the price. The hands-on projects and
            capture the flag exercises made learning ethical hacking fun
            and manageable. I'm now confident enough to aplly for a job"
          </p>
          <figure className="border-t-[1px] mt-4 pt-4 border-solid border-white-90 flex items-center gap-x-4 p-2">
            <img src={Emily} alt="" />
            <figcaption>Emily R., Aspiring Developer</figcaption>
          </figure>
        </div>
        <div className="p-5 bg-white-99">
          <p className="self-end text-sm text-grey-40">
            "The Malware and Attack Technologies courses on Cyber Ninja have transformed my thinking and how I approach ethical hacking. The variety of lessons and tips the instructors bring has
            helped me achieve a lot. The ability to track
            my progress and get instant feedback keeps me motivated to reach my
            goals."
          </p>
          <figure className="border-t-[1px] mt-4 pt-4 border-solid border-white-90 flex items-center gap-x-4 p-2">
            <img src={Michael} alt="" />
            <figcaption>Michael B., Fullstack Developer</figcaption>
          </figure>
        </div>
      </article>
    </section>
  );
};

export default s;