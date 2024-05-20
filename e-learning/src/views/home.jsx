import { Link } from "react-router-dom/dist";
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
  // const [isLister, user] = useAuthStore((state) => [
  //   state.isLister,
  //   state.user,
  // ]);
  return (
    <body className="p-2 space-y-4 md:p-4">
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
    </body>
  );
};

// const LoggedInView = ({ user }) => {
//   return (
//     <div>
//       <h1>Welcome {user.username}</h1>
//       <Link to="/private">
//         <button>Private</button>
//       </Link>
//       <Link to="/logout">
//         <button>Logout</button>
//       </Link>
//     </div>
//   );
// };

// export const LoggedOutView = ({ title = "Home" }) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <Link to="/login">
//         <button>Login</button>
//       </Link>
//       <Link to="/register">
//         <button>Register</button>
//       </Link>
//     </div>
//   );
// };

export default Home;
