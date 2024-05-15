// import "./styles/css/homepage.css";
import wrong from "./assets/icons/wrong.svg";
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
        <div className="faq bg-abs-white md:p-5 rounded-regular my-1">
          <details className="faq--detail group text-sm text-grey-30 p-5 border border-white-95">
            <summary className="faq--summary text-grey-15 font-medium text-lg md:w-[80%] cursor-pointer list-none relative">
              <figure className="absolute -right-1 -top-1 bg-orange-95 p-4">
                <img
                  src={wrong}
                  alt=""
                  className="group-open:rotate-0 rotate-45 transition-all duration-300"
                />
              </figure>
              <p className="w-[80%]">Can I enroll multiple courses at once?</p>
            </summary>
            <p className="pl-1  mt-4 w-[60%] border-t border-t-white-90 ">
              Absolutely! You can enroll in multiple courses simultaneously and
              access them at your convenience.
            </p>
          </details>
        </div>
        <div className="faq bg-abs-white md:p-5 rounded-regular my-1">
          <details className="faq--detail group text-sm text-grey-30 p-5 border border-white-95">
            <summary className="faq--summary text-grey-15 font-medium text-lg md:w-[80%] cursor-pointer list-none relative">
              <figure className="absolute -right-1 -top-1 bg-orange-95 p-4">
                <img
                  src={wrong}
                  alt=""
                  className="group-open:rotate-0 rotate-45 transition-all duration-300"
                />
              </figure>
              <p className="w-[80%]">Can I enroll multiple courses at once?</p>
            </summary>
            <p className="pl-1  mt-4 w-[60%] border-t border-t-white-90 ">
              Absolutely! You can enroll in multiple courses simultaneously and
              access them at your convenience.
            </p>
          </details>
        </div>
        <div className="faq bg-abs-white md:p-5 rounded-regular my-1">
          <details className="faq--detail group text-sm text-grey-30 p-5 border border-white-95">
            <summary className="faq--summary text-grey-15 font-medium text-lg md:w-[80%] cursor-pointer list-none relative">
              <figure className="absolute -right-1 -top-1 bg-orange-95 p-4">
                <img
                  src={wrong}
                  alt=""
                  className="group-open:rotate-0 rotate-45 transition-all duration-300"
                />
              </figure>
              <p className="w-[80%]">Can I enroll multiple courses at once?</p>
            </summary>
            <p className="pl-1  mt-4 w-[60%] border-t border-t-white-90 ">
              Absolutely! You can enroll in multiple courses simultaneously and
              access them at your convenience.
            </p>
          </details>
        </div>
        <div className="faq bg-abs-white md:p-5 rounded-regular my-1">
          <details className="faq--detail group text-sm text-grey-30 p-5 border border-white-95">
            <summary className="faq--summary text-grey-15 font-medium text-lg md:w-[80%] cursor-pointer list-none relative">
              <figure className="absolute -right-1 -top-1 bg-orange-95 p-4">
                <img
                  src={wrong}
                  alt=""
                  className="group-open:rotate-0 rotate-45 transition-all duration-300"
                />
              </figure>
              <p className="w-[80%]">Can I enroll multiple courses at once?</p>
            </summary>
            <p className="pl-1  mt-4 w-[60%] border-t border-t-white-90 ">
              Absolutely! You can enroll in multiple courses simultaneously and
              access them at your convenience.
            </p>
          </details>
        </div>
        
      </article>
    </section>
  );
};

export default FAQS;
