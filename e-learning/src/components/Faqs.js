import "./styles/css/homepage.css";

const FAQS = () => {
  return (
    <section class="faqs--container">
      <article>
        <h2 class="info--title">Frequently Asked Questions</h2>
        <p class="info--description p-y-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button class="p-12 rad-6">See All FAQ's</button>
      </article>
      <article class="faqs">
        <div class="faq">
          <details class="faq--detail">
            <summary class="faq--summary">
              Can I enroll multiple courses at once?
            </summary>
            <p>
              Absolutely! You can enroll in multiple courses simultaneously and
              access them at your convenience.
            </p>
          </details>
        </div>
        <div class="faq">
          <details class="faq--detail">
            <summary class="faq--summary">
              What kind of support can I expect from instructors?
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              corrupti. Officia corporis voluptatum ipsum ratione?
            </p>
          </details>
        </div>
        <div class="faq">
          <details class="faq--detail">
            <summary class="faq--summary">
              Are the courses self-paced or do they have specific start and end
              dates?
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              corrupti. Officia corporis voluptatum ipsum ratione?
            </p>
          </details>
        </div>
        <div class="faq">
          <details class="faq--detail">
            <summary class="faq--summary">
              Are there any prerequisites for the courses?
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              corrupti. Officia corporis voluptatum ipsum ratione?
            </p>
          </details>
        </div>
        <div class="faq">
          <details class="faq--detail">
            <summary class="faq--summary">
              Can I download the course materials for offline access?
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              corrupti. Officia corporis voluptatum ipsum ratione?
            </p>
          </details>
        </div>
      </article>
    </section>
  );
};

export default FAQS;
