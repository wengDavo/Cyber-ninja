// import { useAuthStore } from "../store/auth";
import timer from "../components/assets/icons/timer.svg";
import stickynote from "../components/assets/icons/stickynote.svg";
import profile from "../components/assets/icons/profile.svg";

function ClassesCards({ course }) {
  // const user = useAuthStore((state) => state.user());
  // const user_courses = user.courses_enlisted;
  console.log(course);
  // console.log(key)
  return (
    <section>
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
            <img src={stickynote} alt="" style={{ width: "14px" }} />
            <figcaption className="text-sm text-grey-40">6 lessons</figcaption>
          </figure>
        </div>
      </div>
      {/* ))} */}
    </section>
  );
}

export default ClassesCards;
