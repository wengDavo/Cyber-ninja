import React, { useContext, useEffect, useState } from "react";
const Video = ({ selectedLessonId, lesson }) => {
  useEffect(() => {
    if (selectedLessonId) {
      // Load the video based on the selected lesson ID
      console.log("Selected Lesson ID:", selectedLessonId);
    }
  }, [selectedLessonId]);

  return (
    <section className="video p-3">
      <video src=""></video>
      <div>
        <div className="group topicc border border-white-95 rounded-regular flex flex-col gap-y-8 p-5 md:flex-row md:justify-between md:items-center hover:border hover:border-orange-80 hover:shadow-md">
          <p className="topicc--title  m-auto leading-6 font-medium">
            {lesson.content}
          </p>
        </div>
      </div>

      <h2>Selected Lesson: {selectedLessonId}</h2>
    </section>
  );
};

export default Video;
