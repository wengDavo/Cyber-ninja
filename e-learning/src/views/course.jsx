import { Link } from "react-router-dom/dist";
import React, { useContext, useEffect, useState } from "react";
import CourseContext from "../layouts/CourseContext";
import useAxios from "../utils/useAxios";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import "../components/styles/css/course.css";
import Landing from "../components/Landing";
import Hero from "../components/pages/course/Hero";
import Video from "../components/pages/course/Video";
import Lessons from "../components/pages/course/Lessons";
import Footer from "../components/Footer";

import NavBar from "../components/Navbar";

const Course = () => {
  const [course, setCourse] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state
  const { selectedCourseId } = useContext(CourseContext);
  const api = useAxios();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchCourse = async () => {
      // // Check if selectedCourseId is available
      // if (!selectedCourseId) {
      //   navigate("/courses"); // Redirect to courses page if no course is selected
      //   return;
      // }

      try {
        const response = await api.get(`/course/${id || selectedCourseId}`);
        setCourse(response.data);
        setLoading(false);
        console.log(course);
      } catch (error) {
        if (error.response) {
          // Request made but the server responded with an error
          console.log(error.response);
        } else if (error.request) {
          // Request made but no response is received from the server.
          console.log(error.request);
        } else {
          // Error occurred while setting up the request
          console.log("Error", error.message);
        }
      }
    };

    fetchCourse();
  }, [api, navigate, selectedCourseId]);

  // const [isLister, user] = useAuthStore((state) => [
  //   state.isLister,
  //   state.user,
  // ]);
  // console.log(isLister())

  return (
    <body>
      <NavBar />
      <main id="main">
        {!loading && (
          <>
            <Hero course={course} />
            <Video course={course} />
            <Lessons course={course} />
          </>
        )}
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
