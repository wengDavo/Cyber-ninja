import Sarah from "./assets/photos/mobile/sarah.png";
import Jason from "./assets/photos/mobile/jason.png";
import Emily from "./assets/photos/mobile/emily.png";
import Michael from "./assets/photos/mobile/michael.png";

const s = () => {
  return (
    <section className="m-4">
      <article>
        <h2 className="font-semiBold h-10 flex items-center text-3xl md:text-4xl">
          Testimonies
        </h2>
        <div className="flex flex-col md:flex-row md:justify-between">
          <p className="leading-6 text-grey-35 md:w-[60%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
            necessitatibus accusantium earum porro dolor, aspernatur debitis.
            Consectetur atque itaque rem quis quas facilis veritatis
            dignissimos.
          </p>
          <button className="w-20 h-10 rounded-regular self-end text-abs-black bg-white-95">
            View All
          </button>
        </div>
      </article>
      <article className="grid leading-6 md:grid-cols-2 ">
        <div className="p-5 bg-white-99">
          <p className="text-grey-40 text-sm">
            The web design course provided a solid foundation for me. The
            instructors were knowledgeable and supportive, and the interactive
          </p>
          <figure className="border-t-[1px] mt-4 pt-4 border-solid border-white-90 flex items-center gap-x-4 p-2">
            <img src={Sarah} alt="" />
            <figcaption>Sarah L</figcaption>
          </figure>
        </div>
        <div className=" p-5 bg-white-99">
          <p className=" text-grey-40 text-sm self-end">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quod,
            rem sint assumenda possimus voluptates quae quia rerum sapiente
            voluptas.
          </p>
          <figure className="border-t-[1px] mt-4 pt-4 border-solid border-white-90 flex items-center gap-x-4 p-2">
            <img src={Jason} alt="" />
            <figcaption>Jason M</figcaption>
          </figure>
        </div>
        <div className=" p-5 bg-white-99">
          <p className=" text-grey-40 text-sm self-end">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quod,
            rem sint assumenda possimus voluptates quae quia rerum sapiente
            voluptas.
          </p>
          <figure className="border-t-[1px] mt-4 pt-4 border-solid border-white-90 flex items-center gap-x-4 p-2">
            <img src={Emily} alt="" />
            <figcaption>Emily R</figcaption>
          </figure>
        </div>
        <div className=" p-5 bg-white-99">
          <p className=" text-grey-40 text-sm self-end">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quod,
            rem sint assumenda possimus voluptates quae quia rerum sapiente
            voluptas.
          </p>
          <figure className="border-t-[1px] mt-4 pt-4 border-solid border-white-90 flex items-center gap-x-4 p-2">
            <img src={Michael} alt="" />
            <figcaption>Michael K</figcaption>
          </figure>
        </div>
      </article>
    </section>
  );
};

export default s;