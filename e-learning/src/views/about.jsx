import HeroBar from "../components/HeroBar";
import Achievements from "../components/Achievement";
import Goals from "../components/Goal";
import Message from "../components/Message";
import Footer from "../components/Footer";

import NavBar from "../components/Navbar";

const About = () => {

  return (
    <div className="p-2 space-y-4 md:p-4">
      <NavBar />
      <main id="main">
        <HeroBar
          title={"About Cyber-Ninja"}
          description={
            "Welcome to Cyber Ninja We are passionate about empowering individuals and organizations with the knowledge and skills they need to succeed in the ever-evolving field of cybersecurity.At our core, we believe that education is the key to building a safer and more secure digital world. That's why we've created a platform that offers comprehensive, up-to-date training programs, expert-led instruction, and hands-on learning experiences."
          }
        />
        <Achievements />
        <Goals />
        <Message />
      </main>
      <Footer />
    </div>
  );
};

export default About;
