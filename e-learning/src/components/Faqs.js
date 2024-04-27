import "./styles/css/homepage.css";

const FAQS = () => {
  return (
    <section className="faqs--container">
      <article>
        <h2 className="info--title">Frequently Asked Questions</h2>
        <p className="info--description p-y-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="p-12 rad-6">See All FAQ's</button>
      </article>
      <article className="faqs">
        <div className="faq">
          <details className="faq--detail">
            <summary className="faq--summary">
              Can I enroll multiple courses at once?
            </summary>
            <p>
              Absolutely! You can enroll in multiple courses simultaneously and
              access them at your convenience.
            </p>
          </details>
        </div>
        <div className="faq">
          <details className="faq--detail">
            <summary className="faq--summary">
              What kind of support can I expect from instructors?
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              corrupti. Officia corporis voluptatum ipsum ratione?
            </p>
          </details>
        </div>
        <div className="faq">
          <details className="faq--detail">
            <summary className="faq--summary">
              Are the courses self-paced or do they have specific start and end
              dates?
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              corrupti. Officia corporis voluptatum ipsum ratione?
            </p>
          </details>
        </div>
        <div className="faq">
          <details className="faq--detail">
            <summary className="faq--summary">
              Are there any prerequisites for the courses?
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              corrupti. Officia corporis voluptatum ipsum ratione?
            </p>
          </details>
        </div>
        <div className="faq">
          <details className="faq--detail">
            <summary className="faq--summary">
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
