import React, { useContext, useEffect, useState } from "react";
const Video = ({ selectedLessonId, lesson }) => {

  return (
    <section className="video p-3">
      {/* <video src=""></video> */}
      <div>
        <h2 className="topicc--title m-auto leading-6 font-bold overflow-y-auto scrollbar-hidden">
          {" "}
          {lesson.title}
        </h2>
        <div className="overflow-y-scroll max-h-[500px] mx-auto group topicc border border-white-95 rounded-regular flex flex-col gap-y-8 p-5 md:flex-row md:justify-between md:items-center border-orange-80 shadow-md">
          <p className=" m-auto leading-6 font-light overflow-y-auto scrollbar-hidden">
            {lesson.content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Video;
