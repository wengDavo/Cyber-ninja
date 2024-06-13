import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import manClipboard from "./assets/photos/mobile/man-clipboard-desktop.png";
import manWriting from "./assets/photos/mobile/man-writting-desktop.png";
import womanDesktop from "./assets/photos/mobile/woman-desktop-laptop.png";
import anyAxios from "../utils/anyAxios";
import LoadingSpinner from "./LoadingSpinner";
import CourseContext from "../layouts/CourseContext";
import Cookies from "js-cookie";
import Image1 from "./assets/photos/mobile/Image (1).png";
import Image2 from "./assets/photos/mobile/Image (2).png";
import Image3 from "./assets/photos/mobile/Image (3).png";
import Image4 from "./assets/photos/mobile/Image (4).png";
import Image5 from "./assets/photos/mobile/Image (5).png";
import Image from "./assets/photos/mobile/Image.png";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
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
  }, [api]);

  return (
    <section className="grid gap-y-4 border border-white-99 p-3 md:p-10">
      {/* {loading ? (
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
                  className="w-[32%] object-cover"
                />
                <img
                  src={course.image2}
                  alt=""
                  className="w-[32%] object-cover"
                />
                <img
                  src={course.image3}
                  alt=""
                  className="w-[32%] object-cover"
                />
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
      )} */}
      <article className="grid leading-6 gap-7 md:grid-cols-3 ">
        <div className="bg-abs-white border-[1px] border-solid border-white-90 p-4 grid gap-y-6 rounded-regular">
          <div>
            <figure>
              <img src={Image1} alt="" className="w-full" />
            </figure>
            <div className="inline-block space-x-2">
              <span className="font-regular inline-block h-8 border-[1px] border-solid border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm  max-w-[150px] overflow-hidden truncate text-nowrap">
                4 weeks
              </span>
              <span className="font-regular inline-block h-8 border-[1px] border-solid  border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm max-w-[150px] overflow-hidden truncate text-nowrap">
                Begineer
              </span>
            </div>
            <p className="text-sm font-medium">By John Smith</p>
            <p className=" font-semiBold text-xl">
              INTRODUCTION TO CYBER SECURITY
            </p>
            <p className="bg-abs-white text-sm text-grey-30">
              A comprehensive course, which covers the Cyber Security Principles
              in a self paced begineer friendly manner, showing the steps to
              cybersecurity for people, organisations and bussinesses that are
              looking to protect themselves from attakcs in cyberspace, the
              steps discussed in this course follows the guidance originally
              produced by the National Cyber Security Centre (NCSC).
            </p>
          </div>
          <Link to="/course">
            <button className="px-6 py-3 font-medium bg-white-97 w-full">
              Get it Now
            </button>
          </Link>
        </div>
        <div className=" bg-abs-white border-[1px] border-solid border-white-90 p-2 grid gap-y-6 rounded-regular">
          <div>
            <figure>
              <img src={Image2} alt="" className="w-full" />
            </figure>
            <div className="inline-block space-x-2">
              <span className="font-regular inline-block h-8 border-[1px] border-solid border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm  max-w-[150px] overflow-hidden truncate text-nowrap">
                6 weeks
              </span>
              <span className=" font-regular inline-block h-8 border-[1px] border-solid border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm  max-w-[150px] overflow-hidden truncate text-nowrap">
                Intermediate
              </span>
            </div>
            <p className="text-sm font-medium">By Emily Johnson</p>
            <p className=" font-semiBold text-xl">
              SECURITY POLICIES AND STANDARDS
            </p>
            <p className="bg-abs-white text-sm text-grey-30">
              This unit covers the issues of security policies and security
              standards. It highlights the need for security policies and
              presents sample cyber security policies and standards. It will
              familiarize you with the International Organization for
              Standardization the Information Technology Act, the Copyright Act,
              Patent Law and Intellectual Property Rights.
            </p>
          </div>
          <button className="px-6 py-3 font-medium bg-white-97 w-full">
            Get it Now
          </button>
        </div>
        <div className="bg-abs-white border-[1px] border-solid border-white-90 p-2 grid gap-y-6 rounded-regular">
          <div>
            <figure>
              <img src={Image3} alt="" className="w-full" />
            </figure>
            <div className="inline-block space-x-2">
              <span className="font-regular inline-block h-8 border-[1px] border-solid border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm  max-w-[150px] overflow-hidden truncate text-nowrap">
                8 weeks
              </span>
              <span className="font-regular inline-block h-8 border-[1px] border-solid border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm  max-w-[150px] overflow-hidden truncate text-nowrap">
                Intermediate
              </span>
            </div>
            <p className="text-sm font-medium">By David Brown</p>
            <p className="font-semiBold text-xl">WEBSITE SECURITY</p>
            <p className="bg-abs-white text-sm text-grey-30">
              In this unit you would understand how SSL certificates encrypt
              data transmitted between users and websites, discover how WAFs
              (Web Application Firewalls) protect websites from common threats
              like SQL injection, cross-site scripting, session hacking, ssl
              stripping, MITB attacks, DNS spoofing, IP spoofing and so much
              more.
            </p>
          </div>
          <button className="px-6 py-3 font-medium bg-white-97 w-full">
            Get it Now
          </button>
        </div>
        <div className="bg-abs-white border-[1px] border-solid border-white-90 p-2 grid gap-y-6 rounded-regular">
          <div>
            <figure>
              <img src={Image4} alt="" className="w-full" />
            </figure>
            <div className="inline-block space-x-2">
              <span className="font-regular inline-block h-8 border-[1px] border-solid border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm  max-w-[150px] overflow-hidden truncate text-nowrap">
                20 weeks
              </span>
              <span className="font-regular inline-block h-8 border-[1px] border-solid border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm  max-w-[150px] overflow-hidden truncate text-nowrap">
                Advanced
              </span>
            </div>
            <p className="text-sm font-medium">By Jack Simons</p>
            <p className="font-semiBold text-xl">CYBER SECURITY THREATS</p>
            <p className="bg-abs-white text-sm text-grey-30">
              In this unit we cover the types of Cyber Security Threats such as
              Phising, SQL injection, Denial Of Service (DOS), Man in the Middle
              Attacks (MitM) and many more in detail, we show how it can be done
              and methods of mitigation. This unit concludes by highlighting the
              latest cyber threats and tools across the world.
            </p>
          </div>
          <button className="px-6 py-3 font-medium bg-white-97 w-full">
            Get it Now
          </button>
        </div>
        <div className="bg-abs-white border-[1px] border-solid border-white-90 p-2 grid gap-y-6 rounded-regular">
          <div>
            <figure>
              <img src={Image} alt="" className="w-full" />
            </figure>
            <div className="inline-block space-x-2">
              <span className="font-regular inline-block h-8 border-[1px] border-solid border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm  max-w-[150px] overflow-hidden truncate text-nowrap">
                16 weeks
              </span>

              <span className="font-regular inline-block h-8 border-[1px] border-solid border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm  max-w-[150px] overflow-hidden truncate text-nowrap">
                Advanced
              </span>
            </div>
            <p className="text-sm font-medium">By Michal Adams</p>
            <p className="font-semiBold text-xl">CYBER SECURITY OPERATIONS</p>
            <p className="bg-abs-white text-sm text-grey-30">
              This unit covers the Cyber Security Operations and how the
              Security Informations Event are effectively managed. It deals the
              staffing requirements for managing security informations events
              with the appropriates escalation chains, and the classification of
              incidents and the events to monitor in security ochestration and
              response
            </p>
          </div>
          <button className="px-6 py-3 font-medium bg-white-97 w-full">
            Get it Now
          </button>
        </div>
        <div className="bg-abs-white border-[1px] border-solid border-white-90 p-2 grid gap-y-6 rounded-regular">
          <div>
            <figure>
              <img src={Image5} alt="" className="w-full" />
            </figure>
            <div className="inline-block space-x-2">
            
              <span className="font-regular inline-block h-8 border-[1px] border-solid border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm  max-w-[150px] overflow-hidden truncate text-nowrap">
                14 weeks
              </span>
              <span className="font-regular inline-block h-8 border-[1px] border-solid border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm  max-w-[150px] overflow-hidden truncate text-nowrap">
                Advanced
              </span>
            </div>
            <p className="text-sm font-medium">By Sarah Thompson</p>
            <p className="font-semiBold text-xl">Cyber Security Tools</p>
            <p className="courseebg-abs-white text-sm text-grey-30">
              This unit covers the various cyber security tools available, these
              tools include Firewalls, Antivirus software, PKI Services, Managed
              Detection and Response Service, Penetration Tssting, and more this
              unit will familiarize you with much of the vocabulary you hear
              with regards to securty tools and also how to use them in
            </p>
          </div>
          <button className="px-6 py-3 font-medium bg-white-97 w-full">
            Get it Now
          </button>
        </div>
      </article>
    </section>
  );
};

export default Courses;
