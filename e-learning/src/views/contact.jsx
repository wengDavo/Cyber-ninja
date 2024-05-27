import HeroBar from "../components/HeroBar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import NavBar from "../components/Navbar";

const ContactHome = () => {
  return (
    <div className="p-2 space-y-4 md:p-4">
      <NavBar />
      <main id="main">
        <HeroBar
          title={"Contact Us"}
          description={
            "Have a question, feedback, or just want to say hello? We’d love to hear from you! Our team is here to assist you with any inquiries you may have. Feel free to reach out to us using the contact form below.Whether you're interested in learning more about our courses, have technical issues, or want to explore partnership opportunities, we're here to help. Your satisfaction is our priority, and we're committed to providing timely and helpful support."
          }
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactHome;
