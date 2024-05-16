import { Link } from "react-router-dom/dist";
import React, { useContext, useEffect, useState } from "react";
import CourseContext from "../layouts/CourseContext";
import anyAxios from "../utils/anyAxios";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import Landing from "../components/Landing";
import HeroBar from "../components/HeroBar copy";
import Video from "../components/Video";
import Lessons from "../components/Lessons";
import Footer from "../components/Footer";
import axios from "axios";
import useAxios from "../utils/useAxios";
import { fetchAndSetProfile } from "../utils/profile";

import NavBar from "../components/Navbar";

const Course = () => {
  const [course, setCourse] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state
  const [selectedLessonId, setSelectedLessonId] = useState(null); // State to track selected lesson ID
  const { selectedCourseId } = useContext(CourseContext);
  const api = useAxios();
  const api2 = anyAxios();
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const user = useAuthStore((state) => state.user());
  // console.log(user)

  const { id } = useParams();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await api2.get(`/course/${id || selectedCourseId}`);
        setCourse(response.data);
        setLoading(false);
        // console.log(course);
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
    // checkEnroll(course.id);
  }, [api, navigate, selectedCourseId]);

  const handleEnroll = (data) => {
    console.log("Enrolled successfully:", data);
  };

  const checkEnroll = (courseId) => {
    // fetchAndSetProfile();
    // console.log(user);
    // Ensure user and user.courses_enlisted are defined
    if (!user || !user.courses_enlisted) {
      console.log("ball")
      return false; // Return false if user or user.courses_enlisted is undefined
    }
    // user.courses_enlisted.some(
    //   (enlistedCourse) => console.log(enlistedCourse)
    // );

    return user.courses_enlisted.some(
      (enlistedCourse) => enlistedCourse.id === courseId
    );
  };

  const handleLessonSelect = (lessonId) => {
    if (!isLoggedIn()) {
      navigate("/login");
    } else {
      console.log('click')
      handleLessonClick(lessonId);
    }
  };

  const handleLessonClick = async (lessonId) => {
    try {
      console.log("aiit")
      const response = await api.get(`lesson/${lessonId}/`);
      // Handle the response as needed, e.g., show lesson content
      console.log(response.data);
      setSelectedLessonId(lessonId);
    } catch (error) {
      if (error.response.status === 403) {
        console.log(error);
        // Handle forbidden response, e.g., redirect to a payment page or show an error message
        navigate("/pricing");
      } else {
        console.log(error);
      }
    }
  };

  // const [isLister, user] = useAuthStore((state) => [
  //   state.isLister,
  //   state.user,
  // ]);
  // console.log(isLister())

  return (
    <body className="p-2 space-y-4 md:p-4">
      <NavBar />
      <main id="main">
        {!loading && (
          <>
            <HeroBar
              course={course}
              onEnroll={handleEnroll}
              isEnrolled={checkEnroll}
            />
            <Video course={course} selectedLessonId={selectedLessonId} />{" "}
            {/* Pass selectedLessonId as prop */}
            <Lessons course={course} onSelectLesson={handleLessonSelect} />{" "}
            {/* Pass setSelectedLessonId as prop */}
          </>
        )}
      </main>
      <Footer />
    </body>
  );
};

export default Course;
