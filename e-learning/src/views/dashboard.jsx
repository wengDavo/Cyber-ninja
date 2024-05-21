import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import Footer from "../components/Footer";

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
        console.log("update profile done!");
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [fetchAndSetProfile]);
  // const [loading, setLoading] = useState(true); // Add loading state
  // const [isLoggedIn, user] = useAuthStore((state) => [
  //   state.isLoggedIn,
  //   state.user,
  // ]);
  // const api = useAxios();
  // const id = user().username

  // useEffect(() => {
  //   const fetchCourse = async () => {
  //     // // Check if selectedCourseId is available
  //     // if (!selectedCourseId) {
  //     //   navigate("/courses"); // Redirect to courses page if no course is selected
  //     //   return;
  //     // }

  //     try {
  //       const response = await api.get(`profile/`);
  //       setProfile(response.data);
  //       // setLoading(false);
  //       console.log(profile);
  //       useAuthStore.getState().setUser(profile);
  //     } catch (error) {
  //       if (error.response) {
  //         // Request made but the server responded with an error
  //         console.log(error.response);
  //       } else if (error.request) {
  //         // Request made but no response is received from the server.
  //         console.log(error.request);
  //       } else {
  //         // Error occurred while setting up the request
  //         console.log("Error", error.message);
  //       }
  //     }
  //   };

  //   fetchCourse();
  // }, [api, id]);
  // console.log(user.courses_enlisted)
  return (
    <body className="p-2 space-y-4 md:p-4">
      {" "}
      <NavBar />
      <header className="flex gap-4  h-16">
        <UserNavbar />
      </header>
      <main
        className="flex flex-col gap-4 md:grid md:grid-cols-3"
        style={{ gridColumn: "3/4" }}
      >
        <section className="grid gap-4 md:order-2 ">
          <Calendar onChange={onChange} value={date} />
          <VideoSection />
        </section>
        <section className="md:order-1" style={{ gridColumn: "1/3" }}>
          <MyClasses />
        </section>
      </main>
      <Footer />
    </body>
  );
};
export default Dashboard;
