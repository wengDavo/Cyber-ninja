import correct from "./assets/icons/correct.svg";
import wrong from "./assets/icons/wrong.svg";
import HeroBar from "./HeroBar";

const Pricing = () => {
  return (
    <section>
      <article>
        <HeroBar
          title={"Our Pricing"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, earum consequatur architecto labore vero recusandae adipisci libero id nostrum perspiciatis maiores magni ipsa ratione ex non voluptates! Dolorem, perferendis unde."
          }
        />
        <div className="pricing--btn-container h-fit w-fit mx-auto p-3 bg-abs-white border-[1px] border-solid border-white-95 flex gap-4 justify-evenly mb-5">
          <button className="w-20 h-10 bg-orange-50 text-abs-white rounded-regular">
            Monthly
          </button>
          <button className="w-20 h-10 bg-white-97 rounded-regular">
            Yearly
          </button>
        </div>
      </article>
      <div className=" grid gap-8 bg-abs-white md:grid-cols-2">
        <article className=" grid gap-y-8 border-[1px] border-solid border-white-95 rounded-regular p-5 bg-abs-white">
          <p className=" py-2 px-6 flex justify-center items-center border-[1px] border-solid border-orange-90 bg-orange-97">
            Free Plan
          </p>
          <div className=" text-center">
            <span className=" text-5xl font-semiBold">$0</span>
            <span className=" text-grey-30">/month</span>
          </div>
          <div className=" grid gap-y-5 text-center border-[1px] border-solid border-white-90 rounded-regular p-3">
            <p className=" pt-4 text-lg font-semiBold">Available Features</p>
            <figure className="--feature flex flex-row justify-between items-baseline p-3 bg-white-97 text-grey-30">
              <i className="bg-orange-95 p-2">
                <img src={correct} alt="" />
              </i>
              <p className="self-center md:mr-auto md:ml-6">
                Access to selected free courses.
              </p>
            </figure>
            <figure className="flex flex-row justify-between items-baseline p-3 bg-white-97 text-grey-30">
              <i className="bg-orange-95 p-2">
                <img src={correct} alt="" />
              </i>
              <p className="self-center md:mr-auto md:ml-6">
                Access to selected free courses.
              </p>
            </figure>
            <figure className="flex flex-row justify-between items-baseline p-3 bg-white-97 text-grey-30">
              <i className="bg-orange-95 p-2">
                <img src={correct} alt="" />
              </i>
              <p className="self-center md:mr-auto md:ml-6">
                Access to selected free courses.
              </p>
            </figure>
            <figure className="flex flex-row justify-between items-baseline p-3 bg-white-97 text-grey-30">
              <i className="bg-orange-95 p-2">
                <img src={correct} alt="" />
              </i>
              <p className="self-center md:mr-auto md:ml-6">
                Access to selected free courses.
              </p>
            </figure>
            <figure className="flex flex-row justify-between items-baseline p-3 bg-white-97 text-grey-30">
              <i className="bg-orange-95 p-2">
                <img src={correct} alt="" />
              </i>
              <p className="self-center md:mr-auto md:ml-6">
                Access to selected free courses.
              </p>
            </figure>
            <figure className="flex flex-row justify-between items-baseline p-3 bg-white-97 text-grey-30">
              <i className="bg-orange-95 p-2">
                <img src={wrong} alt="" />
              </i>
              <p className="self-center md:mr-auto md:ml-6">
                Access to selected free courses.
              </p>
            </figure>
            <figure className="flex flex-row justify-between items-baseline p-3 bg-white-97 text-grey-30">
              <i className="bg-orange-95 p-2">
                <img src={wrong} alt="" />
              </i>
              <p className="self-center md:mr-auto md:ml-6">
                Access to selected free courses.
              </p>
            </figure>
            <button className="bg-orange-50 p-3 text-abs-white rounded-regular">
              Get Started
            </button>
          </div>
        </article>
        <article className=" grid gap-y-8 border-[1px] border-solid  border-white-95 rounded-regular p-5 bg-abs-white">
          <p className=" py-2 px-6 flex justify-center items-center border-[1px] border-solid border-orange-90 bg-orange-97">
            Paid Plan
          </p>
          <div className=" text-center">
            <span className=" text-5xl font-semiBold">$100</span>
            <span className="  text-grey-30">/month</span>
          </div>
          <div className=" grid gap-y-5 text-center border-[1px] border-solid border-white-90 rounded-regular p-3">
            <p className=" pt-4 text-lg font-semiBold">Available Features</p>
            <figure className="--feature flex flex-row justify-between p-3 bg-white-97 text-grey-30">
              <i className="bg-orange-95 p-2">
                <img src={correct} alt="" />
              </i>
              <p className="self-center md:mr-auto md:ml-6">
                Access to selected free courses.
              </p>
            </figure>
            <figure className="flex flex-row justify-between items-baseline p-3 bg-white-97 text-grey-30">
              <i className="bg-orange-95 p-2">
                <img src={correct} alt="" />
              </i>
              <p className="self-center md:mr-auto md:ml-6">
                Access to selected free courses.
              </p>
            </figure>
            <figure className="flex flex-row justify-between items-baseline p-3 bg-white-97 text-grey-30">
              <i className="bg-orange-95 p-2">
                <img src={correct} alt="" />
              </i>
              <p className="self-center md:mr-auto md:ml-6">
                Access to selected free courses.
              </p>
            </figure>
            <figure className="flex flex-row justify-between items-baseline p-3 bg-white-97 text-grey-30">
              <i className="bg-orange-95 p-2">
                <img src={correct} alt="" />
              </i>
              <p className="self-center md:mr-auto md:ml-6">
                Access to selected free courses.
              </p>
            </figure>
            <figure className="flex flex-row justify-between items-baseline p-3 bg-white-97 text-grey-30">
              <i className="bg-orange-95 p-2">
                <img src={correct} alt="" />
              </i>
              <p className="self-center md:mr-auto md:ml-6">
                Access to selected free courses.
              </p>
            </figure>
            <figure className="flex flex-row justify-between items-baseline p-3 bg-white-97 text-grey-30">
              <i className="bg-orange-95 p-2">
                <img src={correct} alt="" />
              </i>
              <p className="self-center md:mr-auto md:ml-6">
                Access to selected free courses.
              </p>
            </figure>
            <figure className="flex flex-row justify-between items-baseline p-3 bg-white-97 text-grey-30">
              <i className="bg-orange-95 p-2">
                <img src={correct} alt="" />
              </i>
              <p className="self-center md:mr-auto md:ml-6">
                Access to selected free courses.
              </p>
            </figure>
            <button className="bg-orange-50 p-3 text-abs-white rounded-regular">
              Get Started
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Pricing;
