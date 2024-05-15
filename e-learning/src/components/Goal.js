import notes from "./assets/icons/notes.svg";
import bookClosed from "./assets/icons/book-closed.svg";
import weights from "./assets/icons/weights.svg";
import alert from "./assets/icons/alert.svg";

const Goals = () => {
  return (
    <section class="grid gap-8 bg-white-97 rounded-regular p-3">
      <article>
        <h3 class="font-medium text-2xl leading-6 text-grey-20 underline decoration-wavy decoration-orange-90 mb-4">
          Our Goals
        </h3>
        <p class="leading-6 text-sm text-grey-35">
          At SkillBridge, our goal is to empower individuals from all
          backgrounds to thrive in the world of design and development. We
          believe that education should be accessible and transformative,
          enabling learners to pursue their passions and make a meaningful
          impact.Through our carefully crafted courses, we aim to
        </p>
      </article>
      <article class="grid gap-4 md:grid-cols-2">
        <div class="border border-white-95 p-8 grid rounded-regular">
          <figure>
            <img src={notes} alt="" class="border border-orange-90 bg-orange-97 p-3 rounded-regular" />
          </figure>
          <p class="text-lg font-medium">Provide Practical Skills</p>
          <p class="bg-white-97 rounded-regular  md:flex md:items-center md:justify-between">
            We focus on delivering practical skills that are relevant to the
            current industry demands. Our courses are designed to equip learners
            with the knowledge and tools needed to excel in their chosen field.
          </p>
        </div>
        <div class="border border-white-95 p-8 grid rounded-regular">
          <figure>
            <img src={bookClosed} alt="" class="border border-orange-90 bg-orange-97 p-3 rounded-regular" />
          </figure>
          <p class="text-lg font-medium">Foster Creative Problem-Solving</p>
          <p class="bg-white-97 rounded-regular  md:flex md:items-center md:justify-between">
            We encourage creative thinking and problem-solving abilities,
            allowing our students to tackle real-world challenges with
            confidence and innovation.
          </p>
        </div>
        <div class="border border-white-95 p-8 grid rounded-regular">
          <figure>
            <img src={weights} alt="" class="border border-orange-90 bg-orange-97 p-3 rounded-regular" />
          </figure>
          <p class="text-lg font-medium">Promote Collaboration and Community</p>
          <p class="bg-white-97 rounded-regular  md:flex md:items-center md:justify-between">
            We believe in the power of collaboration and peer learning. Our
            platform fosters a supportive and inclusive community where learners
            can connect, share insights, and grow together..
          </p>
        </div>
        <div class="border border-white-95 p-8 grid rounded-regular">
          <figure>
            <img src={alert} alt="" class="border border-orange-90 bg-orange-97 p-3 rounded-regular" />
          </figure>
          <p class="text-lg font-medium">Stay Ahead of the Curve</p>
          <p class="bg-white-97 rounded-regular  md:flex md:items-center md:justify-between">
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