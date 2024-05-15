// import "../components/styles/css/courses.css";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import React, { useContext } from "react";
import manClipboard from "./assets/photos/mobile/man-clipboard-desktop.png";
import manWriting from "./assets/photos/mobile/man-writting-desktop.png";
import womanDesktop from "./assets/photos/mobile/woman-desktop-laptop.png";
import useAxios from "../utils/useAxios";
import CourseContext from "../layouts/CourseContext";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const api = useAxios();
  const { selectedCourseId, setSelectedCourseId } = useContext(CourseContext);

  const handleCourseClick = (id) => {
    if (id) {
      setSelectedCourseId(id);
    }
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // await api.get("course/").then((response) => {
        //   // Handle response data
        //   setCourses(response.data);
        //   console.log(courses);
        // });
        const response = await api.get("course/");
        setCourses(response.data);
        console.log(response.data);
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

    fetchCourses();
  }, [api]);

  return (
    <section className="grid gap-y-4 border border-white-99 md:p-10">
      {courses.map((course) => (
        <article
          className="grid gap-y-4  border py-2 border-white-95 bg-white-97 rounded-regular md:p-10"
          key={course.id}
        >
          <div>
            <h3 className="text-2xl font-semiBold leading-6">{course.title}</h3>
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
              <img src={course.image1} alt="" className="w-full md:w-[30%]" />
              <img src={course.image2} alt="" className="w-full md:w-[30%]" />
              <img src={course.image3} alt="" className="w-full md:w-[30%]" />
            </figure>
            <div className="course--info md:flex md:gap-x-4 sm:gap-x-4">
              <span className="rounded-regular mt-3 text-grey-35 h-fit inline-block border border-white-95 p-1">
                {course.duration}
              </span>
              <span className="rounded-regular mt-3 text-grey-35 h-fit inline-block border border-white-95 p-1">
                {course.difficulty}
              </span>
              <p className="course--instructor font-medium my-5 text-grey-35 border border-white-95 w-fit md:ml-auto">
                By {course.instructor_name}
              </p>
            </div>
          </div>
          <div className="curriculum flex flex-col gap-y-5 py-4 px-5 border border-white-95 rounded-regular">
            <h3 className="curriculum--title  leading-6 font-semiBold border-b border-b-white-90">Curriculum</h3>
            <div className="topics md:flex md:justify-between divide-y md:divide-x md:divide-y-0 divide-white-90">
              {course.curriculums.map((curriculum, index) => (
                <div className="topic md:px-3" key={index}>
                  <p className="topic--number font-extraBold text-3xl">{index + 1}</p>
                  <p className="topic--name medium font-medium text-grey-20 leading-6 text-sm md:w-[80%]">{curriculum.title}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}

      {/* <article className="course">
        <div>
          <h3 className="course--title">Web Design Fundamentals</h3>
          <div className="course--meta">
            <p className="course--description">
              Learn the fundamentals of web design, including HTML, CSS, and
              responsive design principles. Develop the skills to create
              visually appealing and user-friendly websites.
            </p>
            <Link
              to="/course"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="bg-white-95 p-12 rad-6 m-t-10 align-star">
                View Course
              </button>
            </Link>
          </div>
        </div>
        <div>
          <figure className="course--images">
            <img src={manClipboard} alt="" className="course--image" />
            <img src={manWriting} alt="" className="course--image" />
            <img src={womanDesktop} alt="" className="course--image" />
          </figure>
          <div className="course--info">
            <span className=" rad-6 m-t-10 grey-35">4 weeks</span>
            <span className=" rad-6 m-t-10 grey-35">Beginner</span>
            <p className="course--instructor medium m-y-20">By John Smith</p>
          </div>
        </div>
        <div className="curriculum">
          <h3 className="curriculum--title">Curriculum</h3>
          <div className="topics">
            <div className="topic">
              <p className="topic--number">01</p>
              <p className="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div className="topic">
              <p className="topic--number">02</p>
              <p className="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div className="topic">
              <p className="topic--number">03</p>
              <p className="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div className="topic">
              <p className="topic--number">04</p>
              <p className="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div className="topic">
              <p className="topic--number">05</p>
              <p className="topic--name medium">Intoroduction to HTML</p>
            </div>
          </div>
        </div>
      </article>
      <article className="course">
        <div>
          <h3 className="course--title">Web Design Fundamentals</h3>
          <div className="course--meta">
            <p className="course--description">
              Learn the fundamentals of web design, including HTML, CSS, and
              responsive design principles. Develop the skills to create
              visually appealing and user-friendly websites.
            </p>
            <button className="bg-white-95 p-12 rad-6 m-t-10 align-start">
              View Course
            </button>
          </div>
        </div>
        <div>
          <figure className="course--images">
            <img src={manClipboard} alt="" className="course--image" />
            <img src={manWriting} alt="" className="course--image" />
            <img src={womanDesktop} alt="" className="course--image" />
          </figure>
          <div className="course--info">
            <span className="rad-6 m-t-10 grey-35">4 weeks</span>
            <span className="rad-6 m-t-10 grey-35">Beginner</span>
            <p className="course--instructor medium m-y-20">By John Smith</p>
          </div>
        </div>
        <div className="curriculum">
          <h3 className="curriculum--title">Curriculum</h3>
          <div className="topics">
            <div className="topic">
              <p className="topic--number">01</p>
              <p className="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div className="topic">
              <p className="topic--number">02</p>
              <p className="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div className="topic">
              <p className="topic--number">03</p>
              <p className="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div className="topic">
              <p className="topic--number">04</p>
              <p className="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div className="topic">
              <p className="topic--number">05</p>
              <p className="topic--name medium">Intoroduction to HTML</p>
            </div>
          </div>
        </div>
      </article> */}
    </section>
  );
};

export default Courses;
