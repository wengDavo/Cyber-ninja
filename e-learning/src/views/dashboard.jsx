import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import Footer from "../components/Footer";

import NavBar from "../components/Navbar";
import useAxios from "../utils/useAxios";
import { fetchAndSetProfile } from "../utils/profile";

const Dashboard = () => {
  const [profile, setProfile] = useState("");
  fetchAndSetProfile();
  
  const user = useAuthStore((state) => state.user());
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

  return (
    <body className="p-2 space-y-4 md:p-4">
      <NavBar />
      <main className="text-abs-white ">
        <section className="bg-orange-50 h-[40px] text-center flex justify-center items-center gap-2 rounded-regular">
          <article>{user.username}</article>
          {/* <article>{user.paid}</article> */}
          {/* <article>{console.log(user)}</article> */}
        </section>
      </main>
      <Footer />
    </body>
  );
};
export default Dashboard;
