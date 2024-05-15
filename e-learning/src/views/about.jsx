import { Link } from "react-router-dom/dist";
import Landing from "../components/Landing";
import HeroBar from "../components/HeroBar";
import Achievements from "../components/Achievement";
import Goals from "../components/Goal";
import Message from "../components/Message";
import Footer from "../components/Footer";

import NavBar from "../components/Navbar";

const About = () => {
  // const [isLister, user] = useAuthStore((state) => [
  //   state.isLister,
  //   state.user,
  // ]);
  // console.log(isLister())
  return (
    <body className="p-2 space-y-4 md:p-4">
      <NavBar />
      <main id="main">
        <HeroBar
          title={"About Cyber-Ninja"}
          description={
            "Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skillsand knowledge needed to succeed in the ever-evolving digital landscape."
          }
        />
        <Achievements />
        <Goals />
        <Message />
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

export default About;
