import { Link } from "react-router-dom/dist";
import { toast } from 'react-toastify';
import { useState, useEffect } from "react";
import { useAuthStore } from "../store/auth";
import Hero from "../components/Hero";
import CompanyLogos from "../components/CompanyLogos";
import VideoSection from "../components/VideoSection";
import Info from "../components/Info";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQS from "../components/Faqs";
import Footer from "../components/Footer";

import NavBar from "../components/Navbar";


const Home = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const [currencies, setCurrencies] = useState([]);
  const [status, setStatus] = useState('');
  useEffect(() => {
    const initNowPayments = async () => {
      try {
        const NowPaymentsApi = window.NOWPaymentsApiJS;
        if (NowPaymentsApi) {
          const NPApi = new NowPaymentsApi({ apiKey: '3DEDSV5-GGKMN2G-HNFQN0Q-BDYJJZW' });
          const { currencies } = await NPApi.getCurrencies();
          setCurrencies(currencies);
          console.log(currencies);  
        } else {
          toast.error("Payment Gateway is not available.");
        }
      } catch (error) {
        toast.error("Error initializing Payment Gateway:", error);
      }
    };

    const checkStatus = async () => {
      try {
        const NowPaymentsApi = window.NOWPaymentsApiJS;
        if (NowPaymentsApi) {
          const NPApi2 = new NowPaymentsApi({ apiKey: process.env.REACT_APP_NOWPAY_API_KEY });
          const response = await NPApi2.status();
          setStatus(response.message);
          console.log(response.message);  
        } else {
          toast.error("Payment Gateway is not available.");
        }
      } catch (error) {
        toast.error("Error initializing Payment Gateway:", error);
      }
    };

    const estimatePrice = async () => {
      try {
        const NowPaymentsApi = window.NOWPaymentsApiJS;
        if (NowPaymentsApi) {
          const NPApi3 = new NowPaymentsApi({ apiKey: '1PX46YZ-3DR401W-N8T8V6R-435B8DF' });
          const response = await NPApi3.getEstimatePrice({
            "currency_from": "usd",
            "amount": 300,
            "currency_to": "btc"
          });
          // setStatus(response);
          console.log(response);  
        } else {
          toast.error("Payment Gateway is not available.");
        }
      } catch (error) {
        toast.error("Error initializing Payment Gateway:", error);
      }
    };

    const minPrice = async () => {
      try {
        const NowPaymentsApi = window.NOWPaymentsApiJS;
        if (NowPaymentsApi) {
          const NPApi4 = new NowPaymentsApi({ apiKey: '1PX46YZ-3DR401W-N8T8V6R-435B8DF' });
          const response = await NPApi4.getMinimumPaymentAmount({
            "currency_from": "btc",
            "currency_to": "USDTERC20"
          });
          // setStatus(response);
          console.log(response);  
        } else {
          toast.error("Payment Gateway is not available.");
        }
      } catch (error) {
        toast.error("Error initializing Payment Gateway:", error);
      }
    };    

    const initPayment = async () => {
      try {
        const NowPaymentsApi = window.NOWPaymentsApiJS;
        if (NowPaymentsApi) {
          const NPApi5 = new NowPaymentsApi({ apiKey: '1PX46YZ-3DR401W-N8T8V6R-435B8DF' });
          const response = await NPApi5.createPayment({
            "price_amount": 300,
            "price_currency": "usd",
            "pay_currency": "btc",
            "ipn_callback_url": "https://cyber-ninja-bckend.onrender.com/api/ipn/",
            
          });
          // setStatus(response);
          console.log(response);  
        } else {
          toast.error("Payment Gateway is not available.");
        }
      } catch (error) {
        toast.error("Error initializing Payment Gateway:", error);
      }
    }; 
    
    const initInvoice = async () => {
      try {
        const NowPaymentsApi = window.NOWPaymentsApiJS;
        if (NowPaymentsApi) {
          const NPApi5 = new NowPaymentsApi({ apiKey: '1PX46YZ-3DR401W-N8T8V6R-435B8DF' });
          const response = await NPApi5.createInvoice({
            "price_amount": 300,
            "price_currency": "usd",
            "ipn_callback_url": "https://cyber-ninja-bckend.onrender.com/api/ipn/",
          });
          // setStatus(response);
          console.log(response);  
        } else {
          toast.error("Payment Gateway is not available.");
        }
      } catch (error) {
        toast.error("Error initializing Payment Gateway:", error);
      }
    };  

    // initInvoice();
    // initPayment();
    // minPrice();
    checkStatus();
    // initNowPayments();
    // estimatePrice();
  }, []);

  return (
    <div className="p-2 space-y-4 md:p-4">
      <NavBar />
      <main>
        <Hero />
        <CompanyLogos />
        <VideoSection />
        <Info />
        <Testimonials />
        <Pricing />
        <FAQS />
      </main>
      <Footer />
    </div>
  );
};



export default Home;
