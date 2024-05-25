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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className=" h-10 bg-white-97 rounded-regular px-4 mb-4">
          See All FAQ's
        </button>
      </article>
      <article className="faqs grid leading-6">
        {faqs.map((faq, idx)=>{{
          return <Accordion {...faq} key={idx}/>
        }})}
      </article>
    </section>
  );
};

export default FAQS;