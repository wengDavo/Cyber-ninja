import { Link } from "react-router-dom/dist";
import { useAuthStore } from "../store/auth";
// import "../components/styles/css/course.css";
import Landing from "../components/Landing";
// import Hero from "../components/pages/course/Hero";
import HeroBar from "../components/HeroBar";
import Video from "../components/Video";
import Lessons from "../components/Lessons";
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
        <HeroBar
          title={"UI/UX Design Course"}
          description={
            " Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX). Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum"
          }
        />
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
