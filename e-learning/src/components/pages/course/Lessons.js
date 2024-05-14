import clock from "../../assets/icons/clock.svg";
import "../../styles/css/course.css";
import React, { useContext, useEffect, useState } from "react";
import CourseContext from "../../../layouts/CourseContext";
import useAxios from "../../../utils/useAxios";

const VideoCourse = () => {
  const [course, setCourse] = useState("");
  const { selectedCourseId } = useContext(CourseContext);
  const api = useAxios();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // await api.get("course/").then((response) => {
        //   // Handle response data
        //   setCourses(response.data);
        //   console.log(courses);
        // });
        const response = await api.get(`/course/${selectedCourseId}`);
        setCourse(response.data);
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

    fetchCourses();
  }, [api]);

  return (
    <section className="lessons" style={{ paddingBottom: "20px" }}>
      {/* {course.map(() => (
        <article className="lesson">
          <p className="lesson--number">01</p>
          <p className="lesson--title">Introduction to UI/UX Design</p>
          <div className="topiccs">
            <div className="topicc" style={{ padding: "20px" }}>
              <div>
                <p className="topicc--title">
                  Understanding to UI/UX Design Principles
                </p>
                <p className="topicc--number">Lesson 01</p>
              </div>
              <p className="topicc--duration">
                <i>
                  <img src={clock} alt="" />
                </i>
                <span>45 Minutes</span>
              </p>
            </div>
            <div className="topicc" style={{ padding: "20px" }}>
              <div>
                <p className="topicc--title">
                  Conducting User Research and Analysis
                </p>
                <p className="topicc--number">Lesson 02</p>
              </div>
              <p className="topicc--duration">
                <i>
                  <img src={clock} alt="" />
                </i>
                <span>20 Minutes</span>
              </p>
            </div>
          </div>
        </article>
      ))} */}

      <article className="lesson">
        <p className="lesson--number">01</p>
        <p className="lesson--title">Introduction to UI/UX Design</p>
        <div className="topiccs">
          <div className="topicc" style={{ padding: "20px" }}>
            <div>
              <p className="topicc--title">
                Understanding to UI/UX Design Principles
              </p>
              <p className="topicc--number">Lesson 01</p>
            </div>
            <p className="topicc--duration">
              <i>
                <img src={clock} alt="" />
              </i>
              <span>45 Minutes</span>
            </p>
          </div>
          <div className="topicc" style={{ padding: "20px" }}>
            <div>
              <p className="topicc--title">
                Conducting User Research and Analysis
              </p>
              <p className="topicc--number">Lesson 02</p>
            </div>
            <p className="topicc--duration">
              <i>
                <img src={clock} alt="" />
              </i>
              <span>20 Minutes</span>
            </p>
          </div>
        </div>
      </article>
      <article className="lesson">
        <p className="lesson--number">02</p>
        <p className="lesson--title">User Reasearch and Analysis</p>
        <div className="topiccs">
          <div className="topicc" style={{ padding: "20px" }}>
            <div>
              <p className="topicc--title">Analyzing User Needs and Behavior</p>
              <p className="topicc--number">Lesson 01</p>
            </div>
            <p className="topicc--duration">
              <i>
                <img src={clock} alt="" />
              </i>
              <span>45 Minutes</span>
            </p>
          </div>
          <div className="topicc" style={{ padding: "20px" }}>
            <div>
              <p className="topicc--title">
                Creating User Personas and Scenarios
              </p>
              <p className="topicc--number">Lesson 02</p>
            </div>
            <p className="topicc--duration">
              <i>
                <img src={clock} alt="" />
              </i>
              <span>20 Minutes</span>
            </p>
          </div>
        </div>
      </article>
      <article className="lesson">
        <p className="lesson--number">02</p>
        <p className="lesson--title">User Reasearch and Analysis</p>
        <div className="topiccs">
          <div className="topicc" style={{ padding: "20px" }}>
            <div>
              <p className="topicc--title">Analyzing User Needs and Behavior</p>
              <p className="topicc--number">Lesson 01</p>
            </div>
            <p className="topicc--duration">
              <i>
                <img src={clock} alt="" />
              </i>
              <span>45 Minutes</span>
            </p>
          </div>
          <div className="topicc" style={{ padding: "20px" }}>
            <div>
              <p className="topicc--title">
                Creating User Personas and Scenarios
              </p>
              <p className="topicc--number">Lesson 02</p>
            </div>
            <p className="topicc--duration">
              <i>
                <img src={clock} alt="" />
              </i>
              <span>20 Minutes</span>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default VideoCourse;
