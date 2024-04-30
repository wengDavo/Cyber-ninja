import "../../styles/css/about.css";
import crown from "../../assets/icons/crown.svg";
import medal from "../../assets/icons/medal.svg";
import twoMasks from "../../assets/icons/two-masks.svg";
import boltShield from "../../assets/icons/bolt-shield.svg";

const Achievements = () => {
  return (
    <section class="container">
      <article>
        <h3 class="container--title">Achievements</h3>
        <p class="container--msg">
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements
        </p>
      </article>
      <article class="cards">
        <div class="card">
          <figure>
            <img src={crown} alt="" class="card--icon" />
          </figure>
          <p class="card--topic">Trusted by Thousands</p>
          <p class="card--description">
            We have successfully served thousands of students, helping them
            unlock their potential and achieve their career goals.
          </p>
        </div>
        <div class="card">
          <figure>
            <img src={medal} alt="" class="card--icon" />
          </figure>
          <p class="card--topic">Award-Winning Courses</p>
          <p class="card--description">
            Our courses have received recognition and accolades in the industry
            for their quality, depth of content, and effective teaching
            methodologies.
          </p>
        </div>
        <div class="card">
          <figure>
            <img src={twoMasks} alt="" class="card--icon" />
          </figure>
          <p class="card--topic">Positive Student Feedback</p>
          <p class="card--description">
            We take pride in the positive feedback we receive from our students,
            who appreciate the practicality and relevance of our course
            materials.
          </p>
        </div>
        <div class="card">
          <figure>
            <img src={boltShield} alt="" class="card--icon" />
          </figure>
          <p class="card--topic">Industry Partnerships</p>
          <p class="card--description">
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
