import PricingFeature from "./PricingFeature";

function PricingCard({planType, amount, duration, features}) {
  return (
    <article className=" grid gap-y-8 border-[1px] border-solid border-white-95 rounded-regular p-5 bg-abs-white">
      <p className=" py-2 px-6 flex justify-center items-center border-[1px] border-solid border-orange-90 bg-orange-97">
        {planType}
      </p>
      <div className="text-center ">
        <span className="text-5xl font-semiBold">${amount}</span>
        <span className=" text-grey-30">/{duration}</span>
      </div>
      <div className=" grid gap-y-5 text-center border-[1px] border-solid border-white-90 rounded-regular p-3">
        <p className="pt-4 text-lg font-semiBold">Available Features</p>
        {features.map((feature, idx) => {
          return <PricingFeature key={idx} {...feature} />;
        })}
        <button className="p-3 bg-orange-50 text-abs-white rounded-regular">
          Get Started
        </button>
      </div>
    </article>
  );
};
export default PricingCard;