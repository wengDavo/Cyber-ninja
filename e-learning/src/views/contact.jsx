import HeroBar from "../components/HeroBar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import NavBar from "../components/Navbar";

const ContactHome = () => {
  return (
    <body className="p-2 space-y-4 md:p-4">
      <NavBar />
      <main id="main">
        <HeroBar
          title={"Contact Us"}
          description={
            " Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX). Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum"
          }
        />
        <Contact />
      </main>
      <Footer />
    </body>
  );
};

export default ContactHome;
