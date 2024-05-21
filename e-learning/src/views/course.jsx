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
import useProfileUpdater from "../utils/profile";

import NavBar from "../components/Navbar";

const Course = () => {
  const [course, setCourse] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state
  const [selectedLessonId, setSelectedLessonId] = useState(null); // State to track selected lesson ID
  const [selectedLesson, setSelectedLesson] = useState([]); // State to track selected lesson ID
  const { selectedCourseId } = useContext(CourseContext);
  const api = useAxios();
  const api2 = anyAxios();
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const user = useAuthStore((state) => state.user());
  const [error, setError] = useState(null); // Define error state
  const { fetchAndSetProfile } = useProfileUpdater();

  const { id } = useParams();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await api2.get(`/course/${id || selectedCourseId}`);
        setCourse(response.data);
        setLoading(false);
      } catch (error) {
        if (error.response) {
          // Request made but the server responded with an error
          console.log(error.response);
        }
        // else if (error.request) {
        //   // Request made but no response is received from the server.
        //   console.log(error.request);
        // }
        else {
          // Error occurred while setting up the request
          console.log("Error", error.message);
        }
      }
    };
    const fetchData = async () => {
      try {
        await fetchAndSetProfile();
        console.log("update profile done!");
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchData();
    fetchCourse();
    // checkEnroll(course.id);
  }, [api, navigate, selectedCourseId, fetchAndSetProfile]);

  const handleEnroll = (data) => {
    console.log("Enrolled successfully:", data);
  };

  const checkEnroll = (courseId) => {
    // fetchAndSetProfile();
    // Ensure user and user.courses_enlisted are defined
    if (!user || !user.courses_enlisted) {
      return false; // Return false if user or user.courses_enlisted is undefined
    }

    return user.courses_enlisted.some(
      (enlistedCourse) => enlistedCourse.id === courseId
    );
  };

  const handleLessonSelect = (lessonId) => {
    if (!isLoggedIn()) {
      navigate("/login");
    } else {
      handleLessonClick(lessonId);
    }
  };

  const handleLessonClick = async (lessonId) => {
    try {
      const response = await api.get(`lesson/${lessonId}/`);
      // Handle the response as needed, e.g., show lesson content
      console.log(response.data);
      setSelectedLesson(response.data);
      setSelectedLessonId(lessonId);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          setError("No Lesson matches the given query.");
        } else if (error.response.status === 403) {
          setError("You must be enrolled in this course to access the lesson.");
          console.log(error);
        } else {
          setError("An error occurred while fetching the lesson.");
        }
      } else {
        setError("An error occurred while fetching the lesson.");
      }
    }
  };

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
            <Video selectedLessonId={selectedLessonId} lesson={selectedLesson} />{" "}
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
