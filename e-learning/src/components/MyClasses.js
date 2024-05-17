import timer from "../components/assets/icons/timer.svg";
import ClassesCards from "../components/ClassesCards";

function MyClasses() {
  return (
    <>
      <article className=" bg-orange-80 h-32 md:h-80 relative rounded-regular">
        <div className="absolute left-0 bottom-0 p-2 text-abs-white">
          <p>HTML</p>
          <p>11 lessons</p>
        </div>
        <figure className="flex absolute right-0 bottom-0 p-2 text-abs-white">
          <img src={timer} alt="" />
          <figcaption>3 Hours</figcaption>
        </figure>
      </article>
      <article>
        <div className="flex justify-between my-4">
          <p className="font-semiBold text-xl text-grey-40">My classes</p>
          <a href="" className="text-orange-80 underline">
            See all
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 overflow-y-scroll md:flex no-scrollbar">
          <ClassesCards />
          <ClassesCards />
          <ClassesCards />
          <ClassesCards />
        </div>
      </article>
    </>
  );
}

export default MyClasses;
