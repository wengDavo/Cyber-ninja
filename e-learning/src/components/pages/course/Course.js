import "../../styles/css/course.css";
import manClipboard from "./assets/photos/mobile/man-clipboard-desktop.png";
import manWriting from "./assets/photos/mobile/man-writting-desktop.png";
import womanDesktop from "./assets/photos/mobile/woman-desktop-laptop.png";

const Courses = () => {
  return (
    <section class="courses">
      <article class="course">
        <div>
          <h3 class="course--title">Web Design Fundamentals</h3>
          <div class="course--meta">
            <p class="course--description">
              Learn the fundamentals of web design, including HTML, CSS, and
              responsive design principles. Develop the skills to create
              visually appealing and user-friendly websites.
            </p>
            <button class="bg-white-97 p-12 rad-6 m-t-10 align-start">
              View Course
            </button>
          </div>
        </div>
        <div>
          <figure class="course--images">
            <img
              src={manClipboard}
              alt=""
              class="course--image"
            />
            <img
              src={manWriting}
              alt=""
              class="course--image"
            />
            <img
              src={womanDesktop}
              alt=""
              class="course--image"
            />
          </figure>
          <div class="course--info">
            <button class="bg-white-97 p-12 rad-6 m-t-10 grey-35">
              4 weeks
            </button>
            <button class="bg-white-97 p-12 rad-6 m-t-10 grey-35">
              Beginner
            </button>
            <p class="course--instructor medium m-y-20">By John Smith</p>
          </div>
        </div>
        <div class="curriculum">
          <h3 class="curriculum--title">Curriculum</h3>
          <div class="topics">
            <div class="topic">
              <p class="topic--number">01</p>
              <p class="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div class="topic">
              <p class="topic--number">02</p>
              <p class="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div class="topic">
              <p class="topic--number">03</p>
              <p class="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div class="topic">
              <p class="topic--number">04</p>
              <p class="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div class="topic">
              <p class="topic--number">05</p>
              <p class="topic--name medium">Intoroduction to HTML</p>
            </div>
          </div>
        </div>
      </article>
      <article class="course">
        <div>
          <h3 class="course--title">Web Design Fundamentals</h3>
          <div class="course--meta">
            <p class="course--description">
              Learn the fundamentals of web design, including HTML, CSS, and
              responsive design principles. Develop the skills to create
              visually appealing and user-friendly websites.
            </p>
            <button class="bg-white-97 p-12 rad-6 m-t-10 align-start">
              View Course
            </button>
          </div>
        </div>
        <div>
          <figure class="course--images">
            <img
              src={manClipboard}
              alt=""
              class="course--image"
            />
            <img
              src={manWriting}
              alt=""
              class="course--image"
            />
            <img
              src={womanDesktop}
              alt=""
              class="course--image"
            />
          </figure>
          <div class="course--info">
            <button class="bg-white-97 p-12 rad-6 m-t-10 grey-35">
              4 weeks
            </button>
            <button class="bg-white-97 p-12 rad-6 m-t-10 grey-35">
              Beginner
            </button>
            <p class="course--instructor medium m-y-20">By John Smith</p>
          </div>
        </div>
        <div class="curriculum">
          <h3 class="curriculum--title">Curriculum</h3>
          <div class="topics">
            <div class="topic">
              <p class="topic--number">01</p>
              <p class="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div class="topic">
              <p class="topic--number">02</p>
              <p class="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div class="topic">
              <p class="topic--number">03</p>
              <p class="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div class="topic">
              <p class="topic--number">04</p>
              <p class="topic--name medium">Intoroduction to HTML</p>
            </div>
            <div class="topic">
              <p class="topic--number">05</p>
              <p class="topic--name medium">Intoroduction to HTML</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Courses;
