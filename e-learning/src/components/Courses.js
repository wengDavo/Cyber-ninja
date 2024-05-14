import "../components/styles/css/courses.css";
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
    setSelectedCourseId(id);
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
    <section class="courses">
      {courses.map((course) => (
        <article className="course" key={course.id}>
          <div>
            <h3 className="course--title">{course.title}</h3>
            <div className="course--meta">
              <p className="course--description">{course.description}</p>
              <Link
                to="/course"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={() => handleCourseClick(course.id)}
              >
                <button className="bg-white-95 p-12 rad-6 m-t-10 align-star">
                  View Course
                </button>
              </Link>
            </div>
          </div>
          <div>
            <figure className="course--images">
              <img src={course.image1} alt="" className="course--image" />
              <img src={course.image2} alt="" className="course--image" />
              <img src={course.image3} alt="" className="course--image" />
            </figure>
            <div className="course--info">
              <span className="rad-6 m-t-10 grey-35">{course.duration}</span>
              <span className="rad-6 m-t-10 grey-35">{course.difficulty}</span>
              <p className="course--instructor medium m-y-20">By {course.instructor_name}</p>
            </div>
          </div>
          <div className="curriculum">
            <h3 className="curriculum--title">Curriculum</h3>
            <div className="topics">
              {course.curriculums.map((curriculum, index) => (
                <div className="topic" key={index}>
                  <p className="topic--number">{index + 1}</p>
                  <p className="topic--name medium">{curriculum.title}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}




      <article class="course">
        <div>
          <h3 class="course--title">Web Design Fundamentals</h3>
          <div class="course--meta">
            <p class="course--description">
              Learn the fundamentals of web design, including HTML, CSS, and
              responsive design principles. Develop the skills to create
              visually appealing and user-friendly websites.
            </p>
            <Link
              to="/course"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button class="bg-white-95 p-12 rad-6 m-t-10 align-star">
                View Course
              </button>
            </Link>
          </div>
        </div>
        <div>
          <figure class="course--images">
            <img src={manClipboard} alt="" class="course--image" />
            <img src={manWriting} alt="" class="course--image" />
            <img src={womanDesktop} alt="" class="course--image" />
          </figure>
          <div class="course--info">
            <span class=" rad-6 m-t-10 grey-35">4 weeks</span>
            <span class=" rad-6 m-t-10 grey-35">Beginner</span>
            <p class="course--instructor medium m-y-20">By John Smith</p>
          </div>
        </div>
        <div class="curriculum">
          <h3 class="curriculum--title">Curriculum</h3>
          <div class="topics">
            <div class="topic">
              <p class="topic--number">01</p>
              <p class="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div class="topic">
              <p class="topic--number">02</p>
              <p class="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div class="topic">
              <p class="topic--number">03</p>
              <p class="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div class="topic">
              <p class="topic--number">04</p>
              <p class="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div class="topic">
              <p class="topic--number">05</p>
              <p class="topic--name medium">Intoroduction to HTML</p>
            </div>
          </div>
        </div>
      </article>
      <article class="course">
        <div>
          <h3 class="course--title">Web Design Fundamentals</h3>
          <div class="course--meta">
            <p class="course--description">
              Learn the fundamentals of web design, including HTML, CSS, and
              responsive design principles. Develop the skills to create
              visually appealing and user-friendly websites.
            </p>
            <button class="bg-white-95 p-12 rad-6 m-t-10 align-start">
              View Course
            </button>
          </div>
        </div>
        <div>
          <figure class="course--images">
            <img src={manClipboard} alt="" class="course--image" />
            <img src={manWriting} alt="" class="course--image" />
            <img src={womanDesktop} alt="" class="course--image" />
          </figure>
          <div class="course--info">
            <span class="rad-6 m-t-10 grey-35">4 weeks</span>
            <span class="rad-6 m-t-10 grey-35">Beginner</span>
            <p class="course--instructor medium m-y-20">By John Smith</p>
          </div>
        </div>
        <div class="curriculum">
          <h3 class="curriculum--title">Curriculum</h3>
          <div class="topics">
            <div class="topic">
              <p class="topic--number">01</p>
              <p class="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div class="topic">
              <p class="topic--number">02</p>
              <p class="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div class="topic">
              <p class="topic--number">03</p>
              <p class="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div class="topic">
              <p class="topic--number">04</p>
              <p class="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div class="topic">
              <p class="topic--number">05</p>
              <p class="topic--name medium">Intoroduction to HTML</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Courses;
