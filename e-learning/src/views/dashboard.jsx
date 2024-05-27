import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import Footer from "../components/Footer";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "../components/Navbar";
import "../styles/calendar.css";
import Calendar from "react-calendar";

import VideoSection from "../components/VideoSection";
import MyClasses from "../components/MyClasses";
import UserNavbar from "../components/UserNavbar";
import useAxios from "../utils/useAxios";
import useProfileUpdater from "../utils/profile";

const Dashboard = () => {
  const [profile, setProfile] = useState("");
  const { fetchAndSetProfile } = useProfileUpdater();
  const [date, setDate] = useState(new Date());
  const onChange = (nextDate) => setDate(nextDate);

  const user = useAuthStore((state) => state.user());

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchAndSetProfile();
      } catch (error) {
        toast.error(error, {
          autoClose: 3000,
          toastId: 488,
        });;
      }
    };

    fetchData();
  }, [fetchAndSetProfile]);
  
  return (
    <div className="p-2 space-y-4 md:p-4">
      {" "}
      <NavBar />
      <header className="flex gap-4  h-16">
        <UserNavbar />
      </header>
      <main
        className="flex flex-col gap-4 md:grid md:grid-cols-3"
        style={{ gridColumn: "3/4" }}
      >
        <section className="md:order-1" style={{ gridColumn: "1/3" }}>
          <MyClasses />
        </section>
        <section className="grid gap-4 md:order-2 ">
          <Calendar onChange={onChange} value={date} />
          <VideoSection />
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};
export default Dashboard;
