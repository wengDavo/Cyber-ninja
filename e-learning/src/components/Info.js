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
    <section className="bg-white-97 grid gap-y-10 text-grey-15 p-2 my-4 md:m-4">
      <article>
        <h3 className="font-semiBold h-10 flex items-center text-3xl md:text-4xl">
          Benefits
        </h3>
        <div className="leading-6 text-grey-35 px-2 grid gap-4">
          <ul className="list-disc px-2">
            <li>
              According to the Bureau of Labor Statistics, there is a high
              demand for ethical hackers in the job market, with an unexpected
              growth rate of 32% from 2020 to 2030
            </li>
            <li>
              Ethical hacking is a diverse filed with opportunities in various
              industries such as finance, healthcare, goverenment and technology
            </li>
            <li>
              As per PayScale the average scalary for an ethical hacker in
              tUnited State is $99,000 per year
            </li>
            <li>
              The ethical hacking filed is constantly evolving, with new
              technologies and tecgniques emerging, providing ongoing learning
              opportunities for professionals
            </li>
            <li>
              A report by Burning Glass Technologies found that cybersecurity
              skills can boost a worker's salary by up to 16%
            </li>
            <li>
              Learning ethical hacking can help individual protect themselves
              from cyber attacks. According to Statista, there were 1.2 billion
              data breaches in the first half of 2024 alone, which makes it
              crucial for everyone to understand how to protect their personal
              information online
            </li>
          </ul>
          <p>
            Below are some benefits of learning ethical hacking on Our platform
            as we boast a set of features that facilitate maximum productivity.
          </p>
        </div>
      </article>
      <article className="grid leading-6 gap-7 md:grid-cols-3">
        <div className="bg-abs-white p-7 grid border-[1px] border-solid border-white-90 rounded-regular">
          <p className="text-5xl font-bold text-right">01</p>
          <div>
            <h3 className="font-semiBold text-2xl text-grey-20">
              Comprehensive Learning Resources
            </h3>
            <p className="text-grey-60 text-sm">
              Our e-learning application offers a wide range of courses,
              tutorials, and resources covering all aspects of cybersecurity.
              From fundamental concepts to advanced techniques, learners can
              access a rich repository of information designed to cater to all
              skill levels.
            </p>
          </div>
          <figure className="ml-auto">
            <img src={NorthEast} alt="north east" className="" />
          </figure>
        </div>
        <div className=" bg-abs-white p-7 grid border-[1px] border-solid border-white-90 rounded-regular">
          <p className=" text-5xl font-bold text-right">02</p>
          <div>
            <h3 className="font-semiBold text-2xl text-grey-20">
              Interactive and Engaging Content
            </h3>
            <p className="text-grey-60 text-sm">
              To enhance the learning experience, the app features interactive
              modules, hands-on labs, and real-world simulations. These engaging
              tools help learners apply theoretical knowledge in practical
              scenarios, reinforcing their understanding and boosting retention.
            </p>
          </div>
          <figure className="ml-auto">
            <img src={NorthEast} alt="" className="icon" />
          </figure>
        </div>
        <div className="bg-abs-white p-7 grid border-[1px] border-solid border-white-90 rounded-regular">
          <p className=" text-5xl font-bold text-right">03</p>
          <div>
            <h3 className="font-semiBold text-2xl text-grey-20">
              Expert-Led Instruction
            </h3>
            <p className="text-grey-60 text-sm">
              Learn from industry experts with years of experience in
              cybersecurity. Our instructors provide insights, best practices,
              and up-to-date information on the latest threats and security
              measures, ensuring learners receive high-quality and relevant
              education.
            </p>
          </div>
          <figure className="ml-auto">
            <img src={NorthEast} alt="" className="icon" />
          </figure>
        </div>
        <div className=" bg-abs-white p-7 grid border-[1px] border-solid border-white-90 rounded-regular">
          <p className=" text-5xl font-bold text-right">04</p>
          <div>
            <h3 className="font-semiBold text-2xl text-grey-20">
              Flexible and Accessible Learning
            </h3>
            <p className="text-grey-60 text-sm">
              Cyber Ninja is designed for flexibility, allowing users to learn
              at their own pace and on their own schedule. With mobile
              accessibility, learners can access courses and resources anytime,
              anywhere, making it convenient for busy professionals and students
              alike to advance their cybersecurity skills.
            </p>
          </div>
          <figure className="ml-auto">
            <img src={NorthEast} alt="" className="icon" />
          </figure>
        </div>
        <div className=" bg-abs-white p-7 grid border-[1px] border-solid border-white-90 rounded-regular">
          <p className=" text-5xl font-bold text-right">05</p>
          <div>
            <h3 className="font-semiBold text-2xl text-grey-20">
              Tailored Learning Experience
            </h3>
            <p className="text-grey-60 text-sm">
              Cyber Ninja offers personalized learning paths designed to match
              each user's unique needs and goals. By leveraging advanced
              algorithms and user data, the app creates customized content and
              exercises that align with individual learning styles and pace.
              This ensures that users receive the most relevant and effective
              educational experience, enhancing their progress and retention.
            </p>
          </div>
          <figure className="ml-auto">
            <img src={NorthEast} alt="" className="icon" />
          </figure>
        </div>
        <div className=" bg-abs-white p-7 grid border-[1px] border-solid border-white-90 rounded-regular">
          <p className=" text-5xl font-bold text-right">06</p>
          <div>
            <h3 className="font-semiBold text-2xl text-grey-20">
              Real-Time Progress Tracking
            </h3>
            <p className="text-grey-60 text-sm">
              Cyber Ninja features real-time progress tracking, allowing users
              to monitor their achievements and areas for improvement
              continuously. The app provides detailed analytics and insights
              into performance, helping users stay motivated and focused on
              their learning objectives. With instant feedback and progress
              reports.
            </p>
          </div>
          <figure className="ml-auto">
            <img src={NorthEast} alt="" className="icon" />
          </figure>
        </div>
      </article>
      <article>
        <h3 className="font-semiBold h-10 flex items-center text-3xl md:text-4xl">
          Our Courses
        </h3>
        <div className="flex flex-col md:flex-row md:justify-between">
          <p className="leading-6 text-grey-35 md:w-[60%]">
            Cyber Ninja provides a diverse range of courses designed to meet the
            educational needs and interests of all our users. Our curriculum is
            developed by experts in each field and incorporates the latest
            advancements in educational technology to ensure a comprehensive and
            engaging learning experience. Here's a brief overview of the courses
            we offer:
          </p>
          <button className="w-20 h-10 rounded-regular bg-white-95 text-abs-black">
            <Link to="/courses" className="">
              View All
            </Link>
          </button>
        </div>
      </article>
      <article className="grid leading-6 gap-7 md:grid-cols-3 ">
        <div className="bg-abs-white border-[1px] border-solid border-white-90 p-4 grid gap-y-6 rounded-regular">
          <div>
            <figure>
              <img src={Image1} alt="" className="w-full" />
            </figure>
            <div className="inline-block space-x-2">
              <span className="font-regular inline-block h-8 border-[1px] border-solid border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm  max-w-[150px] overflow-hidden truncate text-nowrap">
                4 weeks
              </span>
              <span className="font-regular inline-block h-8 border-[1px] border-solid  border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm max-w-[150px] overflow-hidden truncate text-nowrap">
                Begineer
              </span>
            </div>
            <p className="text-sm font-medium">By John Smith</p>
            <p className=" font-semiBold text-xl">Web Design Fundamentals</p>
            <p className="bg-abs-white text-sm text-grey-30">
              Larn the Fundamentals of web design, including HTML, CSS and
              responsivr design principles. Develop the skill to create visually
              appealing and user friendly websites
            </p>
          </div>
          <Link to="/course">
            <button className="px-6 py-3 font-medium bg-white-97 w-full">
              Get it Now
            </button>
          </Link>
        </div>
        <div className=" bg-abs-white border-[1px] border-solid border-white-90 p-2 grid gap-y-6 rounded-regular">
          <div>
            <figure>
              <img src={Image2} alt="" className="w-full" />
            </figure>
            <div className="inline-block space-x-2">
              <span className="font-regular inline-block h-8 border-[1px] border-solid border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm  max-w-[150px] overflow-hidden truncate text-nowrap">
                6 weeks
              </span>
              <span className=" font-regular inline-block h-8 border-[1px] border-solid border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm  max-w-[150px] overflow-hidden truncate text-nowrap">
                Intermediate
              </span>
            </div>
            <p className="text-sm font-medium">By Emily Johnson</p>
            <p className=" font-semiBold text-xl">UI/UX Desing</p>
            <p className="bg-abs-white text-sm text-grey-30">
              Master the art of creating intuitive user interfaces(UI) and
              enhancing user experiences(UX). Learn the design principles,
              wireframing, prototyping, and usability testing techniques
            </p>
          </div>
          <button className="px-6 py-3 font-medium bg-white-97 w-full">
            Get it Now
          </button>
        </div>
        <div className="bg-abs-white border-[1px] border-solid border-white-90 p-2 grid gap-y-6 rounded-regular">
          <div>
            <figure>
              <img src={Image3} alt="" className="w-full" />
            </figure>
            <div className="inline-block space-x-2">
              <span className="font-regular inline-block h-8 border-[1px] border-solid border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm  max-w-[150px] overflow-hidden truncate text-nowrap">
                8 weeks
              </span>
              <span className="font-regular inline-block h-8 border-[1px] border-solid border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm  max-w-[150px] overflow-hidden truncate text-nowrap">
                Intermediate
              </span>
            </div>
            <p className="text-sm font-medium">By David Brown</p>
            <p className="font-semiBold text-xl">Mobile App Develpment</p>
            <p className="bg-abs-white text-sm text-grey-30">
              Dive into the world of mobile app development. Learn to builf
              native IOS and Android applicationa using industry leading
              frameworks like Swift and Kotline
            </p>
          </div>
          <button className="px-6 py-3 font-medium bg-white-97 w-full">
            Get it Now
          </button>
        </div>
        <div className="bg-abs-white border-[1px] border-solid border-white-90 p-2 grid gap-y-6 rounded-regular">
          <div>
            <figure>
              <img src={Image4} alt="" className="w-full" />
            </figure>
            <div className="inline-block space-x-2">
              <span className="courseefont-regular inline-block h-8 border-[1px] border-solid border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm  max-w-[150px] overflow-hidden truncate text-nowrap">
                20 weeks
              </span>
              <span className="font-regular inline-block h-8 border-[1px] border-solid border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm  max-w-[150px] overflow-hidden truncate text-nowrap">
                Advanced
              </span>
            </div>
            <p className="text-sm font-medium">By Jack Simons</p>
            <p className="font-semiBold text-xl">Cyber Security</p>
            <p className="bg-abs-white text-sm text-grey-30">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
              rerum quibusdam. Porro fugit voluptate dignissimos.
            </p>
          </div>
          <button className="px-6 py-3 font-medium bg-white-97 w-full">
            Get it Now
          </button>
        </div>
        <div className="bg-abs-white border-[1px] border-solid border-white-90 p-2 grid gap-y-6 rounded-regular">
          <div>
            <figure>
              <img src={Image} alt="" className="w-full" />
            </figure>
            <div className="inline-block space-x-2">
              <span className="font-regular inline-block h-8 border-[1px] border-solid border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm  max-w-[150px] overflow-hidden truncate text-nowrap">
                4 weeks
              </span>
              <span className="font-regular inline-block h-8 border-[1px] border-solid border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm  max-w-[150px] overflow-hidden truncate text-nowrap">
                Begineer
              </span>
            </div>
            <p className="text-sm font-medium">By Michal Adams</p>
            <p className="font-semiBold text-xl">Backen Developmep</p>
            <p className="bg-abs-white text-sm text-grey-30">
              Larn the Fundamentals of web design, including HTML, CSS and
              responsivr design principles. Develop the skill to create visually
              appealing and user friendly websites
            </p>
          </div>
          <button className="px-6 py-3 font-medium bg-white-97 w-full">
            Get it Now
          </button>
        </div>
        <div className="bg-abs-white border-[1px] border-solid border-white-90 p-2 grid gap-y-6 rounded-regular">
          <div>
            <figure>
              <img src={Image5} alt="" className="w-full" />
            </figure>
            <div className="inline-block space-x-2">
              <span className="courseefont-regular inline-block h-8 border-[1px] border-solid border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm  max-w-[150px] overflow-hidden truncate text-nowrap">
                4 weeks
              </span>
              <span className="font-regular inline-block h-8 border-[1px] border-solid border-white-95 py-2 px-3 text-grey-30 rounded-regular my-3 text-sm  max-w-[150px] overflow-hidden truncate text-nowrap">
                Begineer
              </span>
            </div>
            <p className="text-sm font-medium">By Sarah Thompson</p>
            <p className="font-semiBold text-xl">Graphic Desing fp Beginners</p>
            <p className="courseebg-abs-white text-sm text-grey-30">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
              doloribus sapiente error quasi cupiditate aut molestias ipsum
              obcaecati? Quisquam, provident!
            </p>
          </div>
          <button className="px-6 py-3 font-medium bg-white-97 w-full">
            Get it Now
          </button>
        </div>
      </article>
    </section>
  );
};

export default Info;
