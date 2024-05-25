function PricingFeature({feature, status}){
    return (
      <figure className="flex flex-row items-baseline p-3 bg-white-97 text-grey-30 gap-2">
        <i className="bg-orange-95 p-2">
          <img src={status} alt="" />
        </i>
        <p className="self-center ">{feature}</p>
      </figure>
    );
};
export default PricingFeature;