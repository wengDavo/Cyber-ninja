import "../../styles/css/course.css";

const Hero = ({ course }) => {

  return (
    <section className="hero">
      <div>
        <h2 className="hero--title">{course.title}</h2>
        <p className="hero--description">{course.description}</p>
      </div>
    </section>
  );
};

export default Hero;
