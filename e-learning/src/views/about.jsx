import HeroBar from "../components/HeroBar";
import Achievements from "../components/Achievement";
import Goals from "../components/Goal";
import Message from "../components/Message";
import Footer from "../components/Footer";

import NavBar from "../components/Navbar";

const About = () => {

  return (
    <body className="p-2 space-y-4 md:p-4">
      <NavBar />
      <main id="main">
        <HeroBar
          title={"About Cyber-Ninja"}
          description={
            "Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skillsand knowledge needed to succeed in the ever-evolving digital landscape."
          }
        />
        <Achievements />
        <Goals />
        <Message />
      </main>
      <Footer />
    </body>
  );
};

export default About;
