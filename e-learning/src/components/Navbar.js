import "./styles/css/homepage.css";
import { Link } from "react-router-dom/dist";
import arrowRight from "./assets/icons/arrow-right.svg";
import logo from "./assets/icons/Logo.svg";
import hamburger from "./assets/icons/hamburger.svg";
// import { useAuthStore } from "../store/auth";

const NavBar = () => {
  //   const [isLoggedIn, user] = useAuthStore((state) => [
  //     state.isLoggedIn,
  //     state.user,
  //   ]); console.log(user().user_type);
  return (
    <header id="header">
      <section className="header--info">
        <article>Free Courses Sales Ends Soon. Get it Now</article>
        <img src={arrowRight} alt="" className="icon-sm" />
      </section>
      <nav className="nav">
        <figure className="nav--logo logo p-x-5">
          <img src={logo} alt="logo" />
        </figure>
        <div className="nav--btns">
          <button className="btn-medium grey-15">Sign Up</button>

          <Link to="/private">
            <button className="btn-medium bg-orange-50">Login</button>
          </Link>
        </div>
        <div className="nav--bar">
          <figure className="nav--hamburger">
            <img src={hamburger} alt="" />
          </figure>
          <menu className="nav--menu">
            <li className="nav--menu--list">Home</li>
            <li className="nav--menu--list">Courses</li>
            <li className="nav--menu--list">About Us</li>
            <li className="nav--menu--list">Pricing</li>
            <li className="nav--menu--list">Contact</li>
          </menu>
        </div>
      </nav>
    </header>
  );
};

// const LoggedInView = ({ user }) => {
//   // console.log(user.username)
//   return (
//     <Row>
//       <Col>
//         <Link to="/private">
//           <Button className="btn btn-outline-light btn-lg">
//             {user.username}
//           </Button>
//         </Link>
//       </Col>
//       <Col>
//         <Link to="/logout">
//           <Button className="btn btn-outline-light btn-lg">Logout</Button>
//         </Link>
//       </Col>
//     </Row>
//   );
// };

// export const LoggedOutView = ({ title }) => {
//   return (
//     <div>
//       <Navbar.Text className="text-white">{title}</Navbar.Text>
//       <Link to="/login">
//         <Button className="btn btn-outline-light btn-lg">Login</Button>
//       </Link>
//       <Link to="/register">
//         <Button className="btn btn-outline-light btn-lg">Register</Button>
//       </Link>
//     </div>
//   );
// };

export default NavBar;
