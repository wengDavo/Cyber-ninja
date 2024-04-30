import "../../styles/css/about.css";
import notes from "../../assets/icons/notes.svg";
import bookClosed from "../../assets/icons/book-closed.svg";
import weights from "../../assets/icons/weights.svg";
import alert from "../../assets/icons/alert.svg";

const Goals = () => {
  return (
    <section class="container">
      <article>
        <h3 class="container--title">Our Goals</h3>
        <p class="container--msg">
          At SkillBridge, our goal is to empower individuals from all
          backgrounds to thrive in the world of design and development. We
          believe that education should be accessible and transformative,
          enabling learners to pursue their passions and make a meaningful
          impact.Through our carefully crafted courses, we aim to
        </p>
      </article>
      <article class="cards">
        <div class="card">
          <figure>
            <img src={notes} alt="" class="card--icon" />
          </figure>
          <p class="card--topic">Provide Practical Skills</p>
          <p class="card--description">
            We focus on delivering practical skills that are relevant to the
            current industry demands. Our courses are designed to equip learners
            with the knowledge and tools needed to excel in their chosen field.
          </p>
        </div>
        <div class="card">
          <figure>
            <img src={bookClosed} alt="" class="card--icon" />
          </figure>
          <p class="card--topic">Foster Creative Problem-Solving</p>
          <p class="card--description">
            We encourage creative thinking and problem-solving abilities,
            allowing our students to tackle real-world challenges with
            confidence and innovation.
          </p>
        </div>
        <div class="card">
          <figure>
            <img src={weights} alt="" class="card--icon" />
          </figure>
          <p class="card--topic">Promote Collaboration and Community</p>
          <p class="card--description">
            We believe in the power of collaboration and peer learning. Our
            platform fosters a supportive and inclusive community where learners
            can connect, share insights, and grow together..
          </p>
        </div>
        <div class="card">
          <figure>
            <img src={alert} alt="" class="card--icon" />
          </figure>
          <p class="card--topic">Stay Ahead of the Curve</p>
          <p class="card--description">
            The digital landscape is constantly evolving, and we strive to stay
            at the forefront of industry trends. We regularly update our course
            content to ensure our students receive the latest knowledge and
            skills.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Goals;
