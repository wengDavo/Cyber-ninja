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
        <div className="flex flex-col md:flex-row md:justify-between">
          <p className="leading-6 text-grey-35 md:w-[60%]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            excepturi? Rerum et id beatae alias ipsam soluta cupiditate
            molestiae? Distinctio.
          </p>
          <button className="w-20 h-10 rounded-regular self-end text-abs-black bg-white-95">
            View All
          </button>
        </div>
      </article>
      <article className="grid leading-6 gap-7 md:grid-cols-3">
        <div className="bg-abs-white p-7 grid border-[1px] border-solid border-white-90 rounded-regular">
          <p className="text-5xl font-bold text-right">01</p>
          <div>
            <h3 className="font-semiBold text-2xl text-grey-20">
              Flexible Learning Schedule
            </h3>
            <p className="text-grey-60 text-sm">
              Fit yout courseework around your existing commitments and
              obligations.
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
              Expert Instruction
            </h3>
            <p className="text-grey-60 text-sm">
              Learn from industry experts who have hands-on experience in
              cyber-security.
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
              Diverse Course Offerings
            </h3>
            <p className="text-grey-60 text-sm">
              Explre a wide range of designs and development coursees covering
              various topics.
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
              Update Curriculum
            </h3>
            <p className="text-grey-60 text-sm">
              Access coursees with up-to-dat content reflection the latest
              trends and industry practices
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
              Update Curriculum
            </h3>
            <p className="text-grey-60 text-sm">
              Access coursees with up-to-dat content reflection the latest
              trends and industry practices
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
              Update Curriculum
            </h3>
            <p className="text-grey-60 text-sm">
              Access coursees with up-to-dat content reflection the latest
              trends and industry practices
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            labore vitae officiis libero hic veritatis laudantium maiores
            obcaecati nesciunt voluptates?
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
