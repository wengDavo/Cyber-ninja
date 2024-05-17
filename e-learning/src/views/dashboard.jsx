import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/auth";

import "../styles/calendar.css";
import Calendar from "react-calendar";

import VideoSection from "../components/VideoSection";
import MyClasses from "../components/MyClasses";
import UserNavbar from "../components/UserNavbar";

const Dashboard = () => {
  const [isLoggedIn, user] = useAuthStore((state) => [
    state.isLoggedIn,
    state.user,
  ]);
  const [date, setDate] = useState(new Date());
  const onChange = (nextDate) => setDate(nextDate);

  return (
    <body className="p-2 space-y-4 md:p-4">
      <header className="flex gap-4  h-16">
        <UserNavbar />
      </header>
      <main className="flex flex-col gap-4 md:grid md:grid-cols-3" style={{ gridColumn: "3/4" }}>
        <section className="grid gap-4 md:order-2 ">
          <Calendar onChange={onChange} value={date} />
          <VideoSection />
        </section>
        <section className="md:order-1" style={{ gridColumn: "1/3" }}>
          <MyClasses />
        </section>
      </main>
    </body>
  );
};

export default Dashboard;
