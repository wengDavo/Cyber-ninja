import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../utils/useAxios";
import { useAuthStore } from "../store/auth";
import { fetchAndSetProfile } from "../utils/profile";

const HeroBar = ({ course, onEnroll, isEnrolled }) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const api = useAxios();
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user());
  const [err, setErr] = useState(null); // Define error state
  fetchAndSetProfile();

  // console.log(user.paid);

  const handleEnroll = async () => {
    if (!isLoggedIn()) {
      navigate("/login");
    } else {
      try {
        const response = await api.post(`enroll/`, { course_id: course.id });
        if (response.status === 200) {
          alert("You have successfully enrolled in the course.");
          // console.log("Enrolled successfully:", response.data);

          // Update the user profile in the state with the new enrollment
          // const updatedUser = {
          //   ...user,
          //   courses_enlisted: [...user.courses_enlisted, response.data.course],
          // };
          // setUser(updatedUser);
          fetchAndSetProfile();
          console.log("Enrolled successfully:", response.data);
        }
      } catch (error) {
        if (error.message === "Network Error") {
          console.log(error.message);
          setErr(error.message);
        } else {
          for (const field in error.response.data) {
            if (error.response.data.hasOwnProperty(field)) {
              // Log the error messages for each field
              console.log(`${field}: ${error.response.data[field]}`);
              setErr(error?.response?.data || {});
              console.log(err);
              if (err.unpaid) {
                navigate("/pricing");
              }
            }
          }
        }
        // console.error("Error enrolling in course:", error.response.data);
        // alert("There was an error enrolling in the course. Please try again.");
      }
      // if (error.unpaid) {
      //   navigate("/pricing");
      // }
    }
  };

  return (
    <section className="border border-white-97 bg-white-97 rounded-regular p-1 md:py-10 md:px-16 md:grid md:grid-cols-2 mx-2">
      <h2 className="leading-6 text-opacity-35xl font-semiBold p-1 md:w-[60%] text-2xl">
        {course.title}
      </h2>
      <p className="hero--description text-sm text-grey-35">
        {course.description}
      </p>

      <div className="flex justify-end items-center">
        {isEnrolled(course.id) ? (
          <p>You are enrolled in this course.</p>
        ) : (
          <button
            onClick={handleEnroll}
            className="bg-orange-50 white rounded-regular h-12 w-32 text-abs-white text-xs"
          >
            Enroll
          </button>
        )}
      </div>
    </section>
  );
};

export default HeroBar;
