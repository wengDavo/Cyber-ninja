// import Container from "react-bootstrap/Container";
import "./styles/css/homepage.css";

const Landing = ({ children }) => {
  return (
    <div id="body" className="px-md-0 justify-content-center p-0 m-0 ">
      {children}
    </div>
  );
};

export default Landing;
