import cyberVideo from "./assets/videos/hero-cyber-video.mp4";
const CompanyLogos = () => {
  return (
    <section className="">
      <video
        src={cyberVideo}
        // autoPlay="true"
        autoPlay
        controls
        className="md:w-[80%] md:mx-auto"
        controlsList="nodownload"
        preload="metadata"
        muted
      />
    </section>
  );
};

export default CompanyLogos;
