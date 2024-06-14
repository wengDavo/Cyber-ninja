import clock from "../components/assets/icons/clock.svg";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Lessons = ({ course, onSelectLesson }) => {
  const navigate = useNavigate();

  return (
    <section
      className="lessons  grid gap-4 bg-white-97 p-5 md:grid-cols-2"
      style={{ paddingBottom: "20px" }}
    >
      {course.curriculums.map((curriculum, index) => (
        <article
          className="lesson border-white-99 bg-white-99 p-8 grid gap-y-8"
          key={index}
        >
          <p className="lesson--number text-right font-bold text-5xl">
            {index + 1}
          </p>
          <p className="lesson--title leading-6 text-lg font-semiBold text-grey-35">
            {curriculum.title}
          </p>
          <div className="topiccs  grid gap-y-4 ">
            {curriculum.lessons.map((lesson, lessonIndex) => (
              <div
                className="group topicc border border-white-95 rounded-regular flex flex-col gap-y-8 p-5 md:flex-row md:justify-between md:items-center hover:border hover:border-orange-80 hover:shadow-md"
                key={lessonIndex}
                onClick={() => onSelectLesson(lesson.id)} // Update the state with the selected lesson ID
              >
                <div>
                  <p className="topicc--title  m-auto leading-6 font-medium">
                    {lesson.title}
                  </p>
                  <p className="topicc--number m-auto text-sm text-grey-35 border border-white-97 p-1">
                    Lesson {lessonIndex + 1}
                  </p>
                </div>
                <p className="topicc--duration  bg-white-95 text-grey-35 mw-fit p-3 md:rounded-regular md:ml-auto group-hover:bg-orange-80 flex justify-between">
                  <i>
                    <img src={clock} alt="" />
                  </i>
                  <span>{lesson.duration}</span>
                </p>
              </div>
            ))}
        
        </div>
        </article>
      ))}     
    </section>
  );
};

export default Lessons;
