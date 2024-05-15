import Adobe from "./assets/icons/Adobe_Inc.-Logo.wine.svg";
import Google from "./assets/icons/Google-Logo.wine.svg";
import Metabo from "./assets/icons/Metabo-Logo.wine.svg";
import Netflix from "./assets/icons/Netflix-Logo.wine.svg";
import Spotify from "./assets/icons/Spotify-Logo.wine.svg";
import Zoom from "./assets/icons/Zoom_Corporation-Logo.wine.svg";
import Amazon from "./assets/icons/Amazon_(company)-Logo.wine.svg";

const CompanyLogos = () => {
  return (
    <section
      className="no-scrollbar mx-auto w-[90%]
      md:h-20 flex justify-center items-center border-[1px] border-solid border-white-95
      md:p-6 md:justify-evenly divide-x-[1px] divide-solid divide-white-95 my-2"
    >
      <figure>
        <img src={Adobe} alt="adobe" className="h-16 w-32" />
      </figure>
      <figure className="company-logo">
        <img src={Google} alt="google" className="h-16 w-32" />
      </figure>
      <figure className="company-logo">
        <img src={Metabo} alt="metabo" className="h-16 w-32" />
      </figure>
      <figure className="company-logo">
        <img src={Netflix} alt="netflix" className="h-16 w-32" />
      </figure>
      <figure className="company-logo">
        <img src={Spotify} alt="spotify" className="h-16 w-32" />
      </figure>
      <figure className="company-logo">
        <img src={Zoom} alt="zoom" className="h-16 w-32" />
      </figure>
      <figure className="company-logo">
        <img src={Amazon} alt="amazon" className="h-16 w-32" />
      </figure>
    </section>
  );
};

export default CompanyLogos;
