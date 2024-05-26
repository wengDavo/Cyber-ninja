function PricingFeature({feature, status}){
    return (
      <figure className="flex flex-row items-baseline gap-2 p-3 bg-white-97 text-grey-30">
        <i className="p-2 bg-orange-95">
          <img src={status} alt="" />
        </i>
        <p className="self-center text-sm md:text-lg">{feature}</p>
      </figure>
    );
};
export default PricingFeature;