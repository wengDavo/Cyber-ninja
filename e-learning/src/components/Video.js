const Video = ({ course }) => {
  return (
    <section className="video">
      {/* <video src=""></video> */}
      {course.curriculums.map((curriculum) => (
        <div>
          {curriculum.lessons.map((lesson, index) => (
            <div
              className="group topicc border border-white-95 rounded-regular flex flex-col gap-y-8 p-5 md:flex-row md:justify-between md:items-center hover:border hover:border-orange-80 hover:shadow-md"
              key={index}
            >
              <p className="topicc--title  m-auto leading-6 font-medium">
                {lesson.content}
              </p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Video;
