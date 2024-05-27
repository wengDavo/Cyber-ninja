import {faqs} from './FaqsData';
import Accordion from "./Accordion";

const FAQS = () => {
  return (
    <section className="py-8 px-2 md:grid md:grid-cols-2">
      <article>
        <h2 className="font-semiBold h-10 flex items-center text-3xl md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="leading-6 text-grey-35 md:w-[60%] py-6">
          At Cyber Ninja, we pride ourselves on providing an exceptional
          learning experience tailored to each individual's needs. But don't
          just take our word for it hear directly from our users who have
          transformed their lives and careers through our platform. Here are
          some of their inspiring stories:
        </p>
      </article>
      <article className="faqs grid leading-6">
        {faqs.map((faq, idx) => {
          {
            return <Accordion {...faq} key={idx} />;
          }
        })}
      </article>
    </section>
  );
};

export default FAQS;