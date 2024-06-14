import { useAuthStore } from "../store/auth";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import timer from "../components/assets/icons/timer.svg";
import ClassesCards from "../components/ClassesCards";
import Carousel from "./Carousel";
import { API_IMAGE_BASE_URL } from "../utils/constants";

function MyClasses() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user());
  const user_courses = user.courses_enlisted;
  console.log(user_courses);

  useEffect(() => {
    // Redirect to login page if user is not authenticated
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    // Show a loading spinner or message while redirecting
    return <div>Loading...</div>;
  }

  return (
    <>
      <Carousel>
        {user.courses_enlisted.map((course, index) => {
          const imageUrl = `${API_IMAGE_BASE_URL}${course.image1}`;
          console.log(imageUrl);
          return (
            <article
              key={index}
              className="h-32 md:h-80 relative rounded-regular min-w-full"
            >
              <img
                src={course.image1}
                alt={course.title}
                className="w-full h-full object-cover rounded-regular"
              />
              <Link to={`/course/${course.id}`}>
                <div className="absolute left-0 bottom-0 p-2 text-abs-white">
                  <p>{course.title}</p>
                  <p>{course.curriculums.length} curriculums</p>
                </div>
              </Link>
              <figure className="flex absolute right-0 bottom-0 p-2 text-abs-white">
                <img src={timer} alt="Duration" />
                <figcaption>{course.duration}</figcaption>
              </figure>
            </article>
          );
        })}
      </Carousel>
      <article>
        <div className="flex justify-between my-4">
          <p className="font-semiBold text-xl text-grey-40">My classes</p>
          <Link to="/courses" className="text-orange-80 underline">
            See all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 overflow-y-scroll md:flex no-scrollbar">
          {user.courses_enlisted.map((course, index) => (
            <ClassesCards key={index} course={course} />
          ))}
        </div>
      </article>
    </>
  );
}

export default MyClasses;
