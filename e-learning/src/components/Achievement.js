import crown from "./assets/icons/crown.svg";
import medal from "./assets/icons/medal.svg";
import twoMasks from "./assets/icons/two-masks.svg";
import boltShield from "./assets/icons/bolt-shield.svg";

const Achievements = () => {
  return (
    <section className="grid gap-8 bg-white-97 rounded-regular p-3">
      <article>
        <h3 className="font-medium text-2xl leading-6 text-grey-20 underline decoration-wavy decoration-orange-90 mb-4">
          Achievements
        </h3>
        <p className="leading-6 text-sm text-grey-35">
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements
        </p>
      </article>
      <article className="grid gap-4 md:grid-cols-2">
        <div className="border border-white-95 p-8 grid rounded-regular">
          <figure>
            <img
              src={crown}
              alt=""
              className="border border-orange-90 bg-orange-97 p-3 rounded-regular"
            />
          </figure>
          <p className="text-lg font-medium">Trusted by Thousands</p>
          <p className="bg-white-97 rounded-regular  md:flex md:items-center md:justify-between">
            We have successfully served thousands of students, helping them
            unlock their potential and achieve their career goals.
          </p>
        </div>
        <div className="border border-white-95 p-8 grid rounded-regular">
          <figure>
            <img src={medal} alt="" className="border border-orange-90 bg-orange-97 p-3 rounded-regular" />
          </figure>
          <p className="text-lg font-medium">Award-Winning Courses</p>
          <p className="bg-white-97 rounded-regular  md:flex md:items-center md:justify-between">
            Our courses have received recognition and accolades in the industry
            for their quality, depth of content, and effective teaching
            methodologies.
          </p>
        </div>
        <div className="border border-white-95 p-8 grid rounded-regular">
          <figure>
            <img src={twoMasks} alt="" className="border border-orange-90 bg-orange-97 p-3 rounded-regular" />
          </figure>
          <p className="text-lg font-medium">Positive Student Feedback</p>
          <p className="bg-white-97 rounded-regular  md:flex md:items-center md:justify-between">
            We take pride in the positive feedback we receive from our students,
            who appreciate the practicality and relevance of our course
            materials.
          </p>
        </div>
        <div className="border border-white-95 p-8 grid rounded-regular">
          <figure>
            <img src={boltShield} alt="" className="border border-orange-90 bg-orange-97 p-3 rounded-regular" />
          </figure>
          <p className="text-lg font-medium">Industry Partnerships</p>
          <p className="bg-white-97 rounded-regular  md:flex md:items-center md:justify-between">
            We have established strong partnerships with industry leaders,
            enabling us to provide our students with access to the latest tools
            and technologies
          </p>
        </div>
      </article>
    </section>
  );
};

export default Achievements;