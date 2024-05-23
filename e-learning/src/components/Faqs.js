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
            <summary className="faq--summary text-grey-15 font-medium text-lg cursor-pointer list-none relative">
              <figure className="absolute -right-0 -top-1 bg-orange-95 p-4">
                <img
                  src={wrong}
                  alt=""
                  className="group-open:rotate-0 rotate-45 transition-all duration-300"
                />
              </figure>
              <p className="w-[80%]">How do I sign up for an account?</p>
            </summary>
            <p className="pl-1  mt-4 w-[60%] border-t border-t-white-90 ">
              To create an account, simply visit our website and click on the
              "Sign Up" or "Get Started" button. Follow the prompts to enter
              your email address, create a password, and complete the
              registration process. Once registered, you'll have access to our
              platform and can start exploring our courses immediately.
            </p>
          </details>
        </div>
        <div className="faq bg-abs-white md:p-5 rounded-regular my-1">
          <details className="faq--detail group text-sm text-grey-30 p-5 border border-white-95">
            <summary className="faq--summary text-grey-15 font-medium text-lg  cursor-pointer list-none relative">
              <figure className="absolute -right-1 -top-1 bg-orange-95 p-4">
                <img
                  src={wrong}
                  alt=""
                  className="group-open:rotate-0 rotate-45 transition-all duration-300"
                />
              </figure>
              <p className="w-[80%]">
                Can I access my courses on multiple devices?
              </p>
            </summary>
            <p className="pl-1  mt-4 w-[60%] border-t border-t-white-90 ">
              Yes, you can access your courses on multiple devices such as
              laptops, desktop computers, tablets, and smartphones. Simply log
              in to your account on the device of your choice, and your progress
              and course history will sync across all devices automatically for
              seamless learning anytime, anywhere.
            </p>
          </details>
        </div>
        <div className="faq bg-abs-white md:p-5 rounded-regular my-1">
          <details className="faq--detail group text-sm text-grey-30 p-5 border border-white-95">
            <summary className="faq--summary text-grey-15 font-medium text-lg  cursor-pointer list-none relative">
              <figure className="absolute -right-1 -top-1 bg-orange-95 p-4">
                <img
                  src={wrong}
                  alt=""
                  className="group-open:rotate-0 rotate-45 transition-all duration-300"
                />
              </figure>
              <p className="w-[80%]">
                Are certificates of completion provided for courses?
              </p>
            </summary>
            <p className="pl-1  mt-4 w-[60%] border-t border-t-white-90 ">
              Yes, upon successfully completing a course, you will receive a
              certificate of completion to showcase your achievement.
              Certificates can be downloaded or shared directly from your
              account. Please note that certificates are available for certain
              courses and may have specific completion criteria.
            </p>
          </details>
        </div>
        <div className="faq bg-abs-white md:p-5 rounded-regular my-1">
          <details className="faq--detail group text-sm text-grey-30 p-5 border border-white-95">
            <summary className="faq--summary text-grey-15 font-medium text-lg  cursor-pointer list-none relative">
              <figure className="absolute -right-1 -top-1 bg-orange-95 p-4">
                <img
                  src={wrong}
                  alt=""
                  className="group-open:rotate-0 rotate-45 transition-all duration-300"
                />
              </figure>
              <p className="w-[80%]">
                How can I get help if I encounter any issues or have questions?
              </p>
            </summary>
            <p className="pl-1  mt-4 w-[60%] border-t border-t-white-90 ">
              If you encounter any issues or have questions about our platform,
              courses, or account, our dedicated support team is here to assist
              you. You can reach out to us through the "Contact Us" page on our
              website or email us directly at our contact page. We strive to
              provide timely and helpful assistance to ensure you have a smooth
              learning experience.
            </p>
          </details>
        </div>
      </article>
    </section>
  );
};

export default FAQS;