import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxios from "../utils/useAxios";
import { useAuthStore } from "../store/auth";
import useProfileUpdater from "../utils/profile";

const HeroBar = ({ course, onEnroll, isEnrolled }) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const [loading, setLoading] = useState(true); // Add loading state
  const api = useAxios();
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user());
  const [err, setErr] = useState(null); // Define error state
  const { fetchAndSetProfile } = useProfileUpdater();

  const handleEnroll = async () => {
    if (!isLoggedIn()) {
      navigate("/login");
    } else {
      try {
        const response = await api.post(`enroll/`, { course_id: course.id });
        if (response.status === 200) {
          toast.success("You have successfully enrolled in the course.", {
            autoClose: 3000,
          });
          try {
            await fetchAndSetProfile();
          } catch (error) {
            toast.error(error, {
              autoClose: 3000,
            });
          }
        }
      } catch (error) {
        if (error.message === "Network Error") {
          setErr(error.message);
          toast.error(error.message, {
            autoClose: 3000,
          });
        } else {
          for (const field in error.response.data) {
            if (error.response.data.hasOwnProperty(field)) {
              // Log the error messages for each field
              setErr(error?.response?.data || {});
              toast.error(error.response.data[field], {
                autoClose: 3000,
              });
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
