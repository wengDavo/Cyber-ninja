import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import Footer from "../components/Footer";

import NavBar from "../components/Navbar";

const Dashboard = () => {
  const [isLoggedIn, user] = useAuthStore((state) => [
    state.isLoggedIn,
    state.user,
  ]);

  return (
    <body>
      <NavBar />
      <main className="text-abs-white ">
        <section className="bg-orange-50 h-[40px] text-center flex justify-center items-center gap-2 rounded-regular">
          <article>{user().username}</article>
        </section>
      </main>
      <Footer />
    </body>
  );
};
export default Dashboard;
