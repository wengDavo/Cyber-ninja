import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import manClipboard from "./assets/photos/mobile/man-clipboard-desktop.png";
import manWriting from "./assets/photos/mobile/man-writting-desktop.png";
import womanDesktop from "./assets/photos/mobile/woman-desktop-laptop.png";
import anyAxios from "../utils/anyAxios";
import CourseContext from "../layouts/CourseContext";
import Cookies
from 'js-cookie';

const Courses = () => {
  const [courses, setCourses] = useState([]);
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
    <section className="grid gap-y-4 border border-white-99 p-3 md:p-10">
      {courses.map((course) => (
        <article
          className="grid gap-y-4  border py-2 border-white-95 bg-white-97 rounded-regular md:p-10"
          key={course.id} p-3
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
              <img src={course.image1} alt="" className="w-[32%] object-cover" />
              <img src={course.image2} alt="" className="w-[32%] object-cover" />
              <img src={course.image3} alt="" className="w-[32%] object-cover" />
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

      <article class="grid gap-y-4 border py-2 border-white-95 bg-white-97 rounded-regular p-3 md:p-10">
        <div>
          <h3 class="course--title text-2xl font-semiBold leading-6 ">
            Web Design Fundamentals
          </h3>
          <div class="course--meta md:flex md:justify-between">
            <p class="course--description text-sm leading-6 text-grey-35 md:w-[70%]">
              Learn the fundamentals of web design, including HTML, CSS, and
              responsive design principles. Develop the skills to create
              visually appealing and user-friendly websites.
            </p>
            <Link to="/course">
              <button class="bg-white-95 p-3 rounded-regular mt-3 self-start">
                View Course
              </button>
            </Link>
          </div>
        </div>
        <div>
          <figure class="course--images flex justify-between gap-x-2">
            <img src={manClipboard} alt="" class="w-[32%] object-cover" />
            <img src={manWriting} alt="" class="w-[32%] object-cover" />
            <img src={womanDesktop} alt="" class="w-[32%] " />
          </figure>
          <div class="course--info md:flex md:gap-x-4">
            <span class=" rounded-regular mt-3 text-grey-35 h-fit inline-block border border-white-95 p-1">
              4 weeks
            </span>
            <span class=" rounded-regular mt-3 text-grey-35 h-fit inline-block border border-white-95 p-1">
              Beginner
            </span>
            <p class="course--instructor font-medium my-5 text-grey-35 border border-white-95 w-fit md:ml-auto">
              By John Smith
            </p>
          </div>
        </div>
        <div class="curriculum flex flex-col gap-y-5 py-4 px-5 border border-white-95 rounded-regular">
          <h3 class="curriculum--title leading-6 font-semiBold border-b border-b-white-90">
            Curriculum
          </h3>
          <div class="topics md:flex md:justify-between divide-y md:divide-x md:divide-y-0 divide-white-90">
            <div class="topic md:px-3">
              <p class="topic--number font-extraBold text-3xl">01</p>
              <p class="topic--name font-medium text-grey-20 leading-6 text-sm md:w-[80%]">
                Intoroduction to HTML
              </p>
            </div>
            <div class="topic md:px-3">
              <p class="topic--number font-extraBold text-3xl">02</p>
              <p class="topic--name font-medium text-grey-20 leading-6 text-sm md:w-[80%]">
                Intoroduction to HTML
              </p>
            </div>
            <div class="topic md:px-3">
              <p class="topic--number font-extraBold text-3xl">03</p>
              <p class="topic--name font-medium text-grey-20 leading-6 text-sm md:w-[80%]">
                Intoroduction to HTML
              </p>
            </div>
            <div class="topic md:px-3">
              <p class="topic--number font-extraBold text-3xl">04</p>
              <p class="topic--name font-medium text-grey-20 leading-6 text-sm md:w-[80%]">
                Intoroduction to HTML
              </p>
            </div>
            <div class="topic md:px-3">
              <p class="topic--number font-extraBold text-3xl">05</p>
              <p class="topic--name font-medium text-grey-20 leading-6 text-sm md:w-[80%]">
                Intoroduction to HTML
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Courses;
