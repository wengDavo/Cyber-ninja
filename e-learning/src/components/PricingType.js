function PricingType({amount ,duration}){
    return (
      <>
        <span className=" text-5xl font-semiBold">${amount}</span>
        <span className="  text-grey-30">/{duration}</span>
      </>
    );
};

export default PricingType;
