import { Link } from "react-router-dom/dist";
import { useAuthStore } from "../store/auth";
import "../components/styles/css/course.css";
import Landing from "../components/Landing";
import Hero from "../components/pages/course/Hero";
import Video from "../components/pages/course/Video";
import Lessons from "../components/pages/course/Lessons";
import Footer from "../components/Footer";

import NavBar from "../components/Navbar";

const Course = () => {
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
          <Video />
          <Lessons />
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

export default Course;
