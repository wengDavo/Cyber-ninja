import PricingFeature from "./PricingFeature";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-toastify";
import useAxios from "../utils/useAxios";
import { useAuthStore } from "../store/auth";

function getDurationInMonths(duration) {
  if (typeof duration === "string") {
    if (duration.toLowerCase() === "year") {
      return 12;
    }
    const match = duration.match(/(\d+)\s*months?/i);
    if (match) {
      return parseInt(match[1], 10);
    }
  }
  return 0; // Default to 0 if no match
}

function PricingCard({ planType, amount, duration, features }) {
  const navigate = useNavigate();
  const api = useAxios();
  const user = useAuthStore((state) => state.user());
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  // const handleSubscribe = async () => {
  //   const durationMonths = getDurationInMonths(duration);
  //   if (durationMonths === 0) {
  //     return;
  //   } else {
  //     try {
  //       const response = await api.post("subscribe/", {
  //         duration_months: durationMonths,
  //       });
  //       toast.success(response.data.detail, { autoClose: 3000 });
  //       navigate("/courses");
  //     } catch (error) {
  //       toast.error("Failed to subscribe. Please try again.", {
  //         autoClose: 3000,
  //       });
  //     }
  //   }
  // };

  const handleSubscribe = async () => {
    if (!isLoggedIn()) {
      navigate("/login");
    } else {
      const durationMonths = getDurationInMonths(duration);
      if (durationMonths === 0) {
        return;
      } else {
        try {
          const NowPaymentsApi = window.NOWPaymentsApiJS;
          if (NowPaymentsApi) {
            const NPApi5 = new NowPaymentsApi({
              apiKey: "1PX46YZ-3DR401W-N8T8V6R-435B8DF",
            });
            const response = await NPApi5.createInvoice({
              price_amount: amount,
              price_currency: "usd",
              ipn_callback_url:
                "https://cyber-ninja-bckend.onrender.com/api/ipn/",
              order_id: `user_${user.user_id}_subscribe_${durationMonths}`,
              order_description: `Subscription for ${durationMonths} months`,
              success_url:
                "https://cyber-ninja-pied.vercel.app/payment/success/",
              cancel_url: "https://cyber-ninja-pied.vercel.app/payment/cancel/",
            });

            if (response.invoice_url) {
              // Save invoice details to backend
              try {
                await api.post("save-invoice/", {
                  user_id: user.user_id,
                  subscription_type: user?.paid ? "extend" : "subscribe",
                  invoice_id: response.id,
                  duration_months: durationMonths,
                });
                toast.success("Invoice Successfully Created");
        
                // Redirect to payment
                window.location.href = response.invoice_url;
              } catch (error) {
                toast.error(error);
              }
            }
          } else {
            toast.error("Payment Gateway is not available.");
          }
        } catch (error) {
          toast.error("Error initializing Payment Gateway:", error);
        }
      }
    }
  };

  // const handleExtendSubscribe = async () => {
  //   const durationMonths = getDurationInMonths(duration);
  //   if (durationMonths === 0) {
  //     return;
  //   } else {
  //     try {
  //       const response = await api.post("extend_subscription/", {
  //         duration_months: durationMonths,
  //       });
  //       toast.success(response.data.detail, { autoClose: 3000 });
  //       navigate("/courses");
  //     } catch (error) {
  //       toast.error("Failed to extend subscription. Please try again.", {
  //         autoClose: 3000,
  //       });
  //     }
  //   }
  // };

  // const handleButtonClick = user?.paid
  //   ? handleExtendSubscribe
  //   : handleSubscribe;

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
        <button
          className="p-3 bg-orange-50 text-abs-white rounded-regular"
          onClick={handleSubscribe}
        >
          Get Started
        </button>
      </div>
    </article>
  );
}
export default PricingCard;
