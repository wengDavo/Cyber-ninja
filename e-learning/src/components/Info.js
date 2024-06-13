import { Link } from "react-router-dom";

import Courses from "../components/Courses";
import Benefits from "./Benefits";

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
      <Benefits/>
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
      <Courses />
    </section>
  );
};

export default Info;
