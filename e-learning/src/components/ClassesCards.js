import timer from "../components/assets/icons/timer.svg";
import stickyNote from "../components/assets/icons/stickynote.svg";
import profile from "../components/assets/icons/profile.svg";

import { Link } from "react-router-dom";

function ClassesCards({ course }) {
  return (
    <section>
      <Link to={`/course/${course.id}`}>
        {/* {user_courses.map((course) => ( */}
        <div
          style={{ borderTopWidth: "10px", borderTopColor: "#FFEACC" }}
          className="rounded-regular border border-white-90 p-2 space-y-2 md:min-w-[300px]  mx-auto mb-2"
          // key={key}
        >
          <p className="text-lg">{course.title}</p>
          <p className="text-sm text-grey-60">{course.description}</p>
          <figure className="flex gap-x-2">
            <img src={profile} alt="" />
            <figcaption className="text-grey-60">
              {course.instructor_name}
            </figcaption>
          </figure>
          <div className="bg-white-90 flex justify-between">
            <figure className="flex">
              <img src={timer} alt="" style={{ width: "14px" }} />
              <figcaption className="text-sm text-grey-40">
                {course.duration}
              </figcaption>
            </figure>
            <figure className="flex">
              <img src={stickyNote} alt="" style={{ width: "14px" }} />
              <figcaption className="text-sm text-grey-40">
                6 lessons
              </figcaption>
            </figure>
          </div>
        </div>
      </Link>
      {/* ))} */}
    </section>
  );
}

export default ClassesCards;
