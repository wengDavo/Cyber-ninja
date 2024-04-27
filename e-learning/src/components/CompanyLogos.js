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
    <section class="company-logos scrollbar-hide">
      <figure class="company-logo">
        <img src={Adobe} alt="" class="icon" />
      </figure>
      <figure class="company-logo">
        <img src={Google} alt="" class="icon" />
      </figure>
      <figure class="company-logo">
        <img src={Metabo} alt="" class="icon" />
      </figure>
      <figure class="company-logo">
        <img src={Netflix} alt="" class="icon" />
      </figure>
      <figure class="company-logo">
        <img src={Spotify} alt="" class="icon" />
      </figure>
      <figure class="company-logo">
        <img src={Zoom} alt="" class="icon" />
      </figure>
      <figure class="company-logo">
        <img src={Amazon} alt="" class="icon" />
      </figure>
    </section>
  );
};

export default CompanyLogos;
