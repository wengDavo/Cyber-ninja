import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import { useAuthStore } from "../store/auth";
import useAxios from "../utils/useAxios";
import useProfileUpdater from "../utils/profile";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logout from "../components/assets/icons/logout.svg";

function UserNavbar() {
  const api = useAxios();
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user());
  const cancelSubscription = async () => {
    try {
      const response = await api.post("unsubscribe/");
      toast.success(response.data.detail, {
        autoClose: 3000,
      });
      navigate("/courses");
    } catch (error) {
      toast.error("Failed to unsubscribe. Please try again later.", {
        autoClose: 3000,
      });
    }
  };
  const redirectSubscribe = () => {
    navigate("/pricing");
  };

  const handleButtonClick = user?.paid ? cancelSubscription : redirectSubscribe;
  return (
    <>
      <div className="flex gap-4">
        <section className="grid">
          <p className="font-medium text-grey-40 text-lg">
            Welcome, {user.first_name} {user.last_name}
          </p>
          <p className="text-sm text-grey-60 hidden md:block">
            Have a good day
          </p>
        </section>
      </div>
      {/* <figure>
        <img src={logout} alt="logout" />
      </figure> */}
    </>
  );
}

export default UserNavbar;
