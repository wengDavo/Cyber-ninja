import { useState, useEffect } from "react";
import { useAuthStore } from "../store/auth";

import "react-toastify/dist/ReactToastify.css";
import useProfileUpdater from "../utils/profile";
import HeroBar from "./HeroBar";
import { free, yearly, months4, months8 } from "./PricingFeatureData";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const [duration, setDuration] = useState(1);
  const user = useAuthStore((state) => state.user());
  const { fetchAndSetProfile } = useProfileUpdater();
  const [pricing, setPricing] = useState({ duration: "Month" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchAndSetProfile();
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [fetchAndSetProfile]);

  return (
    <section id="pricing">
      <article>
        <HeroBar
          title={"Our Pricing"}
          description={
            "At Cyber Ninja, we believe that quality education should be accessible to everyone. That's why we offer a range of flexible pricing options to suit your budget and learning goals. We offer comprehensive content reviws and practice questions to reinforce key conecpts.These guides enable a tailored and self paced preparatino for the certification exams, Explore our pricing plans below to find the perfect fit for you, "
          }
        />
        <div className="pricing--btn-container h-fit w-fit mx-auto p-3 bg-abs-white border-[1px] border-solid border-white-95 flex gap-4 justify-evenly mb-5">
          <button
            className={`w-20 h-10 ${
              duration === 1 ? "bg-orange-50 text-abs-white" : "bg-white-97"
            } rounded-regular`}
            onClick={() => {
              setPricing({ duration: "Month" });
              setDuration(1);
            }}
          >
            Monthly
          </button>
          <button
            className={`w-20 h-10 ${
              duration === 12 ? "bg-orange-50 text-abs-white" : "bg-white-97"
            } rounded-regular`}
            onClick={() => {
              setDuration(12);
              setPricing({ duration: "Year" });
            }}
          >
            Yearly
          </button>
        </div>
      </article>
      <div className="grid gap-8 bg-abs-white md:grid-cols-2">
        {(function () {
          switch (pricing.duration) {
            case "Month":
              return (
                <>
                  <PricingCard
                    planType={"Free"}
                    amount={"0"}
                    duration={"month"}
                    features={free}
                  />
                  <PricingCard
                    planType={"Paid"}
                    amount={"300"}
                    duration={"4 months"}
                    features={months4}
                  />
                  <PricingCard
                    planType={"Paid"}
                    amount={"611"}
                    duration={"8 months"}
                    features={months8}
                  />
                </>
              );
            case "Year":
              return (
                <PricingCard
                  planType={"Paid"}
                  amount={"950"}
                  duration={"year"}
                  features={yearly}
                />
              );
            default:
              return <></>;
          }
        })()}
      </div>
    </section>
  );
};

export default Pricing;
