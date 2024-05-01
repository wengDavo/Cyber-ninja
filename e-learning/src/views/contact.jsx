import { Link } from "react-router-dom/dist";
import { useAuthStore } from "../store/auth";
import "../components/styles/css/contact.css";
import Landing from "../components/Landing";
import Hero from "../components/pages/contact/Hero";
import Contact from "../components/pages/contact/Contact";
import Footer from "../components/Footer";

import NavBar from "../components/Navbar";

const ContactHome = () => {
  // const [isLister, user] = useAuthStore((state) => [
  //   state.isLister,
  //   state.user,
  // ]);
  // console.log(isLister())
  return (
    
      <body>
        <NavBar />
        <main id="main">
          <Hero />
          <Contact />
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

export default ContactHome;
