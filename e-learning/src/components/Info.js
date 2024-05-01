import "./styles/css/homepage.css";
import { Link } from "react-router-dom";
import NorthEast from "./assets/icons/north-east.svg";
import Image1 from "./assets/photos/mobile/Image (1).png";
import Image2 from "./assets/photos/mobile/Image (2).png";
import Image3 from "./assets/photos/mobile/Image (3).png";
import Image4 from "./assets/photos/mobile/Image (4).png";
import Image5 from "./assets/photos/mobile/Image (5).png";
import Image from "./assets/photos/mobile/Image.png";

const Info = () => {
  return (
    <section className="info">
      <article>
        <h3 className="info--title">Benefits</h3>
        <div className="info--main">
          <p className="info--description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            excepturi? Rerum et id beatae alias ipsam soluta cupiditate
            molestiae? Distinctio.
          </p>
          <button className="btn-medium bg-white-50 black">View All</button>
        </div>
      </article>
      <article className="benefits">
        <div className="benefit">
          <p className="benefit--number">01</p>
          <div>
            <h3 className="benefit--topic">Flexible Learning Schedule</h3>
            <p className="benefit--description">
              Fit yout courseework around your existing commitments and
              obligations.
            </p>
          </div>
          <figure className="align-right">
            <img src={NorthEast} alt="" className="icon" />
          </figure>
        </div>
        <div className="benefit">
          <p className="benefit--number">02</p>
          <div>
            <h3 className="benefit--topic">Expert Instruction</h3>
            <p className="benefit--description">
              Learn from industry experts who have hands-on experience in
              cyber-security.
            </p>
          </div>
          <figure className="align-right">
            <img src={NorthEast} alt="" className="icon" />
          </figure>
        </div>
        <div className="benefit">
          <p className="benefit--number">03</p>
          <div>
            <h3 className="benefit--topic">Diverse Course Offerings</h3>
            <p className="benefit--description">
              Explre a wide range of designs and development coursees covering
              various topics.
            </p>
          </div>
          <figure className="align-right">
            <img src={NorthEast} alt="" className="icon" />
          </figure>
        </div>
        <div className="benefit">
          <p className="benefit--number">04</p>
          <div>
            <h3 className="benefit--topic">Update Curriculum</h3>
            <p className="benefit--description">
              Access coursees with up-to-dat content reflection the latest trends
              and industry practices
            </p>
          </div>
          <figure className="align-right">
            <img src={NorthEast} alt="" className="icon" />
          </figure>
        </div>
        <div className="benefit">
          <p className="benefit--number">05</p>
          <div>
            <h3 className="benefit--topic">Update Curriculum</h3>
            <p className="benefit--description">
              Access coursees with up-to-dat content reflection the latest trends
              and industry practices
            </p>
          </div>
          <figure className="align-right">
            <img src={NorthEast} alt="" className="icon" />
          </figure>
        </div>
        <div className="benefit">
          <p className="benefit--number">06</p>
          <div>
            <h3 className="benefit--topic">Update Curriculum</h3>
            <p className="benefit--description">
              Access coursees with up-to-dat content reflection the latest trends
              and industry practices
            </p>
          </div>
          <figure className="align-right">
            <img src={NorthEast} alt="" className="icon" />
          </figure>
        </div>
      </article>
      <article>
        <h3 className="info--title">Our Courses</h3>
        <div className="info--main">
          <p className="info--description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            labore vitae officiis libero hic veritatis laudantium maiores
            obcaecati nesciunt voluptates?
          </p>
          <button className="btn-medium bg-white-50 black">
            <Link to="/coursees">View All</Link>
          </button>
        </div>
      </article>
      <article className="coursees">
        <div className="coursee">
          <div>
            <figure>
              <img src={Image1} alt="" className="coursee--img" />
            </figure>
            <div className="coursee--meta">
              <span className="coursee--duration">4 weeks</span>
              <span className="coursee--difficulty">Begineer</span>
            </div>
              <p >By John Smith</p>
            <p className="coursee--title">Web Design Fundapntals</p>
            <p className="coursee--description">
              Larn the Fundamentals of web design, including HTML, CSS and
              responsivr design principles. Develop the skill to create visually
              appealing and user friendly websites
            </p>
          </div>
          <button className="p-x-24 p-y-14 medium white-97">Get it Now</button>
        </div>
        <div className="coursee">
          <div>
            <figure>
              <img src={Image2} alt="" className="coursee--img" />
            </figure>
            <div className="coursee--meta">
              <span className="coursee--duration">6 weeks</span>
              <span className="coursee--difficulty">Intermediate</span>
            </div>
              <p >By Emily Johnson</p>
            <p className="coursee--title">UI/UX Desing</p>
            <p className="coursee--description">
              Master the art of creating intuitive user interfaces(UI) and
              enhancing user experiences(UX). Learn the design principles,
              wireframing, prototyping, and usability testing techniques
            </p>
          </div>
          <button className="p-x-24 p-y-14 medium white-97">Get it Now</button>
        </div>
        <div className="coursee">
          <div>
            <figure>
              <img src={Image3} alt="" className="coursee--img" />
            </figure>
            <div className="coursee--meta">
              <span className="coursee--duration">8 weeks</span>
              <span className="coursee--difficulty">Intermediate</span>
            </div>
              <p >By David Brown</p>
            <p className="coursee--title">Mobile App Develpment</p>
            <p className="coursee--description">
              Dive into the world of mobile app development. Learn to builf
              native IOS and Android applicationa using industry leading
              frameworks like Swift and Kotline
            </p>
          </div>
          <button className="p-x-24 p-y-14 medium white-97">Get it Now</button>
        </div>
        <div className="coursee">
          <div>
            <figure>
              <img src={Image4} alt="" className="coursee--img" />
            </figure>
            <div className="coursee--meta">
              <span className="coursee--duration">20 weeks</span>
              <span className="coursee--difficulty">Advanced</span>
            </div>
              <p >By Jack Simons</p>
            <p className="coursee--title">Cyber Security</p>
            <p className="coursee--description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
              rerum quibusdam. Porro fugit voluptate dignissimos.
            </p>
          </div>
          <button className="p-x-24 p-y-14 medium white-97">Get it Now</button>
        </div>
        <div className="coursee">
          <div>
            <figure>
              <img src={Image} alt="" className="coursee--img" />
            </figure>
            <div className="coursee--meta">
              <span className="coursee--duration">4 weeks</span>
              <span className="coursee--difficulty">Begineer</span>
            </div>
              <p >By Michal Adams</p>
            <p className="coursee--title">Backen Developmep</p>
            <p className="coursee--description">
              Larn the Fundamentals of web design, including HTML, CSS and
              responsivr design principles. Develop the skill to create visually
              appealing and user friendly websites
            </p>
          </div>
          <button className="p-x-24 p-y-14 medium white-97">Get it Now</button>
        </div>
        <div className="coursee">
          <div>
            <figure>
              <img src={Image5} alt="" className="coursee--img" />
            </figure>
            <div className="coursee--meta">
              <span className="coursee--duration">4 weeks</span>
              <span className="coursee--difficulty">Begineer</span>
            </div>
              <p >By Sarah Thompson</p>
            <p className="coursee--title">Graphic Desing fp Beginners</p>
            <p className="coursee--description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
              doloribus sapiente error quasi cupiditate aut molestias ipsum
              obcaecati? Quisquam, provident!
            </p>
          </div>
          <button className="p-x-24 p-y-14 medium white-97">Get it Now</button>
        </div>
      </article>
    </section>
  );
};

export default Info;
