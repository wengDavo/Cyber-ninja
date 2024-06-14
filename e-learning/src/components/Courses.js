import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import anyAxios from "../utils/anyAxios";
import LoadingSpinner from "./LoadingSpinner";
import CourseContext from "../layouts/CourseContext";
import Cookies from "js-cookie";
import {
  // ToastContainer,
  toast,
  // Slide,
  // Zoom,
  // Flip,
  // Bounce,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const api = anyAxios();
  const { selectedCourseId, setSelectedCourseId } = useContext(CourseContext);

  const handleCourseClick = (id) => {
    if (id) {
      setSelectedCourseId(id);
    }
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get("course/");
        console.log("res:", response);
        setCourses(response.data);
        setLoading(false);
      } catch (error) {
        if (error.response) {
          // Request made but the server responded with an error
          toast.error(error.response, {
            autoClose: 3000,
          });
        } else if (error.request) {
          // Request made but no response is received from the server.
          toast.error(error.request, {
            autoClose: 3000,
          });
        } else {
          // Error occured while setting up the request
          toast.error(error.message, {
            autoClose: 3000,
          });
        }
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="grid gap-y-4 border border-white-99 p-3 md:p-10">
      {loading ? (
        <LoadingSpinner />
      ) : (
        courses.map((course) => (
          <article
            className="grid gap-y-4  border py-2 border-white-95 bg-white-97 rounded-regular p-3  md:p-10"
            key={course.id}
            p-3
          >
            <div>
              <h3 className="course--title text-2xl font-semiBold leading-6">
                {course.title}
              </h3>
              <div className="course--meta md:flex md:justify-between">
                <p className="course--description text-sm leading-6 text-grey-35 md:w-[70%]">
                  {course.description}
                </p>
                <Link
                  to={`/course/${course.id}`}
                  onClick={() => handleCourseClick(course.id)}
                >
                  <button className="bg-white-95 p-3 rounded-regular mt-3 self-start">
                    View Course
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <figure className="course--images flex justify-between gap-x-2">
                <img
                  src={course.image1}
                  alt=""
                  className="w-[32%] object-cover max-h-[200px]"
                />
                <img
                  src={course.image2}
                  alt=""
                  className="w-[32%] object-cover max-h-[200px]"
                />
                <img
                  src={course.image3}
                  alt=""
                  className="w-[32%] object-cover max-h-[200px]"
                />
              </figure>
              <div className="course--info md:flex md:gap-x-4 sm:gap-x-4">
                <span className="rounded-regular mt-3 text-grey-35 h-fit inline-block border border-white-95 p-1">
                  {course.duration}
                </span>
                <span className="rounded-regular mt-3 text-grey-35 h-fit inline-block border border-white-95 p-1">
                  {course.difficulty}
                </span>
                {/* <p className="course--instructor font-medium my-5 text-grey-35 border border-white-95 w-fit md:ml-auto">
                  By {course.instructor_name}
                </p> */}
              </div>
            </div>
            <div className="curriculum flex flex-col gap-y-5 py-4 px-5 border border-white-95 rounded-regular">
              <h3 className="curriculum--title  leading-6 font-semiBold border-b border-b-white-90">
                Curriculum
              </h3>
              <div className="topics md:flex md:justify-between divide-y md:divide-x md:divide-y-0 divide-white-90">
                {course.curriculums.map((curriculum, index) => (
                  <div className="topic md:px-3" key={index}>
                    <p className="topic--number font-extraBold text-3xl">
                      {index + 1}
                    </p>
                    <p className="topic--name medium font-medium text-grey-20 leading-6 text-sm md:w-[80%]">
                      {curriculum.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))
      )}{" "}
    </section>
  );
};

export default Courses;
