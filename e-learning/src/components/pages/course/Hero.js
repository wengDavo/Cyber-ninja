import "../../styles/css/course.css";
import React, { useContext, useEffect, useState } from "react";
import CourseContext from "../../../layouts/CourseContext";
import useAxios from "../../../utils/useAxios";

const Hero = () => {
  const [course, setCourse] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state
  const { selectedCourseId } = useContext(CourseContext);
  const api = useAxios();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        // await api.get("course/").then((response) => {
        //   // Handle response data
        //   setCourses(response.data);
        //   console.log(courses);
        // });
        const response = await api.get(`/course/${selectedCourseId}`);
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
          // Error occured while setting up the request
          console.log("Error", error.message);
        }
      }
    };

    fetchCourse();
  }, [api]);

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
