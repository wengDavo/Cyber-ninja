import "./styles/css/homepage.css";
import Adobe from "./assets/icons/Adobe_Inc.-Logo.wine.svg";
import Google from "./assets/icons/Google-Logo.wine.svg";
import Metabo from "./assets/icons/Metabo-Logo.wine.svg";
import Netflix from "./assets/icons/Netflix-Logo.wine.svg";
import Spotify from "./assets/icons/Spotify-Logo.wine.svg";
import Zoom from "./assets/icons/Zoom_Corporation-Logo.wine.svg";
import Amazon from "./assets/icons/Amazon_(company)-Logo.wine.svg";

const CompanyLogos = () => {
  return (
    <section className="company-logos scrollbar-hide">
      <figure className="company-logo">
        <img src={Adobe} alt="" className="icon" />
      </figure>
      <figure className="company-logo">
        <img src={Google} alt="" className="icon" />
      </figure>
      <figure className="company-logo">
        <img src={Metabo} alt="" className="icon" />
      </figure>
      <figure className="company-logo">
        <img src={Netflix} alt="" className="icon" />
      </figure>
      <figure className="company-logo">
        <img src={Spotify} alt="" className="icon" />
      </figure>
      <figure className="company-logo">
        <img src={Zoom} alt="" className="icon" />
      </figure>
      <figure className="company-logo">
        <img src={Amazon} alt="" className="icon" />
      </figure>
    </section>
  );
};

export default CompanyLogos;
