import NorthEast from "./assets/icons/north-east.svg";

function Benefits() {
  return (
    <article className="grid leading-6 gap-7 md:grid-cols-3">
      <div className="bg-abs-white p-7 grid border-[1px] border-solid border-white-90 rounded-regular">
        <p className="text-5xl font-bold text-right">01</p>
        <div>
          <h3 className="font-semiBold text-2xl text-grey-20">
            Comprehensive Learning Resources
          </h3>
          <p className="text-grey-60 text-sm">
            Our e-learning application offers a wide range of courses,
            tutorials, and resources covering all aspects of cybersecurity. From
            fundamental concepts to advanced techniques, learners can access a
            rich repository of information designed to cater to all skill
            levels.
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
            cybersecurity. Our instructors provide insights, best practices, and
            up-to-date information on the latest threats and security measures,
            ensuring learners receive high-quality and relevant education.
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
            Cyber Ninja is designed for flexibility, allowing users to learn at
            their own pace and on their own schedule. With mobile accessibility,
            learners can access courses and resources anytime, anywhere, making
            it convenient for busy professionals and students alike to advance
            their cybersecurity skills.
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
            exercises that align with individual learning styles and pace. This
            ensures that users receive the most relevant and effective
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
            Cyber Ninja features real-time progress tracking, allowing users to
            monitor their achievements and areas for improvement continuously.
            The app provides detailed analytics and insights into performance,
            helping users stay motivated and focused on their learning
            objectives. With instant feedback and progress reports.
          </p>
        </div>
        <figure className="ml-auto">
          <img src={NorthEast} alt="" className="icon" />
        </figure>
      </div>
    </article>
  );
}
export default Benefits;
