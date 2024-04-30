import clock from "../../assets/icons/clock.svg";
import "../../styles/css/course.css";

const VideoCourse = () => {
  return (
    <section className="lessons">
      <article className="lesson">
        <p className="lesson--number">01</p>
        <p className="lesson--title">Introduction to UI/UX Design</p>
        <div className="topics">
          <div className="topic" style = {{padding: "20px"}}>
            <div>
              <p className="topic--title">
                Understanding to UI/UX Design Principles
              </p>
              <p className="topic--number">Lesson 01</p>
            </div>
            <p className="topic--duration">
              <i>
                <img src={clock} alt="" />
              </i>
              <span>45 Minutes</span>
            </p>
          </div>
          <div className="topic" style = {{padding: "20px" }}>
            <div>
              <p className="topic--title">Conducting User Research and Analysis</p>
              <p className="topic--number">Lesson 02</p>
            </div>
            <p className="topic--duration">
              <i>
                <img src={clock} alt="" />
              </i>
              <span>20 Minutes</span>
            </p>
          </div>
        </div>
      </article>
      <article className="lesson">
        <p className="lesson--number">02</p>
        <p className="lesson--title">User Reasearch and Analysis</p>
        <div className="topics">
          <div className="topic" style = {{padding: "20px" }}>
            <div>
              <p className="topic--title">Analyzing User Needs and Behavior</p>
              <p className="topic--number">Lesson 01</p>
            </div>
            <p className="topic--duration">
              <i>
                <img src={clock} alt="" />
              </i>
              <span>45 Minutes</span>
            </p>
          </div>
          <div className="topic" style = {{padding: "20px" }}>
            <div>
              <p className="topic--title">Creating User Personas and Scenarios</p>
              <p className="topic--number">Lesson 02</p>
            </div>
            <p className="topic--duration">
              <i>
                <img src={clock} alt="" />
              </i>
              <span>20 Minutes</span>
            </p>
          </div>
        </div>
      </article>
      <article className="lesson">
        <p className="lesson--number">02</p>
        <p className="lesson--title">User Reasearch and Analysis</p>
        <div className="topics">
          <div className="topic" style = {{padding: "20px" }}>
            <div>
              <p className="topic--title">Analyzing User Needs and Behavior</p>
              <p className="topic--number">Lesson 01</p>
            </div>
            <p className="topic--duration">
              <i>
                <img src={clock} alt="" />
              </i>
              <span>45 Minutes</span>
            </p>
          </div>
          <div className="topic" style = {{padding: "20px" }}>
            <div>
              <p className="topic--title">Creating User Personas and Scenarios</p>
              <p className="topic--number">Lesson 02</p>
            </div>
            <p className="topic--duration">
              <i>
                <img src={clock} alt="" />
              </i>
              <span>20 Minutes</span>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default VideoCourse;
