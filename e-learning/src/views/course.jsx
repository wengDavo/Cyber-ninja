import { Link } from "react-router-dom/dist";
import React, { useContext, useEffect, useState } from "react";
import CourseContext from "../layouts/CourseContext";
import anyAxios from "../utils/anyAxios";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../components/LoadingSpinner";
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
          toast.error(error.response, {
            autoClose: 3000,
          });
        }
        // else if (error.request) {
        //   // Request made but no response is received from the server.
        //   console.log(error.request);
        // }
        else {
          // Error occurred while setting up the request
          toast.error(error.message, {
            autoClose: 3000,
          });
        }
      }
    };
    const fetchData = async () => {
      try {
        await fetchAndSetProfile();
      } catch (error) {
        toast.error(error, {
          autoClose: 3000,
          toastId: 418,
        });;
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
      setSelectedLesson(response.data);
      setSelectedLessonId(lessonId);
    } catch (error) {
      toast.dismiss();
      if (error.response) {
        if (error.response.status === 404) {
          toast.error("Failed to login. Please try again later.", {
            autoClose: 3000,
          });
          setError("No Lesson matches the given query.");
        } else if (error.response.status === 403) {
          toast.error(
            "You must be enrolled in this course to access the lesson.",
            {
              autoClose: 3000,
            }
          );
          setError("You must be enrolled in this course to access the lesson.");
        } else {
          toast.error("An error occurred while fetching the lesson.", {
            autoClose: 3000,
          });
          setError("An error occurred while fetching the lesson.");
        }
      } else {
        toast.error("An error occurred while fetching the lesson.", {
          autoClose: 3000,
        });
        setError("An error occurred while fetching the lesson.");
      }
    }
  };

  return (
    <div className="p-2 space-y-4 md:p-4">
      <NavBar />
      <main id="main">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <HeroBar
              course={course}
              onEnroll={handleEnroll}
              isEnrolled={checkEnroll}
            />
            {!selectedLessonId ? (
              null
            ) : (
              <>
                <Video
                  selectedLessonId={selectedLessonId}
                  lesson={selectedLesson}
                />{" "}
              </>
            )}
            {/* Pass selectedLessonId as prop */}
            <Lessons course={course} onSelectLesson={handleLessonSelect} />{" "}
            {/* Pass setSelectedLessonId as prop */}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Course;
