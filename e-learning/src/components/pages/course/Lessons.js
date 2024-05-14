import clock from "../../assets/icons/clock.svg";
import "../../styles/css/course.css";
import React, { useContext, useEffect, useState } from "react";

const VideoCourse = ({ course }) => {
  return (
    <section className="lessons" style={{ paddingBottom: "20px" }}>
      {course.curriculums.map((curriculum, index) => (
        <article className="lesson" key={index}>
          <p className="lesson--number">{index + 1}</p>
          <p className="lesson--title">{curriculum.title}</p>
          <div className="topiccs">
            {curriculum.lessons.map((lesson, index) => (
              <div className="topicc" style={{ padding: "20px" }} key={index}>
                <div>
                  <p className="topicc--title">{lesson.title}</p>
                  <p className="topicc--number">Lesson {index + 1}</p>
                </div>
                <p className="topicc--duration">
                  <i>
                    <img src={clock} alt="" />
                  </i>
                  <span>45 Minutes</span>
                </p>
              </div>
            ))}
            {/* <div className="topicc" style={{ padding: "20px" }}>
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
                
              </div> */}
          </div>
        </article>
      ))}

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
