import "../../styles/css/course.css";
import React, { useContext, useEffect, useState } from "react";
import CourseContext from "../../../layouts/CourseContext";
import useAxios from "../../../utils/useAxios";
import { useNavigate, useParams  } from "react-router-dom";

const Hero = () => {
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

  return (
    <section className="hero">
      {loading ? ( // Render loading indicator while data is being fetched
        <p>Loading...</p>
      ) : (
        <div>
          <h2 className="hero--title">{course.title}</h2>
          <p className="hero--description">{course.description}</p>
        </div>
      )}
    </section>
  );
};

export default Hero;
