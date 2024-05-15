// // import "./styles/css/homepage.css";

const HeroBar = ({ title, description }) => {
  return (
    <section className="border border-white-97 bg-white-97 rounded-regular p-1 md:py-10 md:px-16 md:grid md:grid-cols-2 mx-2">
      <h2 className="leading-6 text-opacity-35xl font-semiBold p-1 md:w-[60%] text-2xl">
        {title}
      </h2>
      <p className="hero--description text-sm text-grey-35">{description}</p>
    </section>
  );
};

export default HeroBar;