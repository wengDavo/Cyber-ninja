import { Link } from "react-router-dom/dist";
import { useAuthStore } from "../store/auth";import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import FAQS from "../components/Faqs";

import NavBar from "../components/Navbar";

const Home = () => {
  return (
    <body className="p-2 space-y-4 md:p-4">
      <NavBar />
      <main id="main">
        <Pricing />
        <FAQS />
      </main>
      <Footer />
    </body>
  );
};

export default Home;
