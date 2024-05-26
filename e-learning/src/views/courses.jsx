import { Link } from "react-router-dom/dist";
import { useAuthStore } from "../store/auth";
// // import "../components/styles/css/courses.css";
import Landing from "../components/Landing";
import HeroBar from "../components/HeroBar";
import Courses from "../components/Courses";
import Footer from "../components/Footer";

import NavBar from "../components/Navbar";

const CoursesHome = () => {
  return (
    <body className="p-2 space-y-4 md:p-4">
      <NavBar />
      <main id="main">
        <HeroBar
          title={"Online Courses On Ethical Hacking"}
          description={
            "Welcome to our courses page, where you can explore our comprehensive offerings in cybersecurity education. Whether you're just starting your journey in cybersecurity or looking to advance your skills and career, we have a range of courses to meet your needs.Our courses are designed and developed by industry experts to provide you with the knowledge and skills necessary to excel in today's cybersecurity landscape. From foundational concepts to advanced techniques, each course is crafted to be engaging, practical, and relevant to real-world scenarios."
          }
        />
        <Courses />
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

export default CoursesHome;
