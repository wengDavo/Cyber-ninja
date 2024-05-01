import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../utils/auth";
import { useNavigate } from "react-router-dom/dist";
import { useAuthStore } from "../store/auth";
import Testimonials from "../components/Testimonials";
import "../components/styles/css/login.css"
import Footer from "../components/Footer";
import eye from "../components/assets/icons/eye.svg"
import northE from "../components/assets/icons/north-e.svg"

import NavBar from "../components/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/");
    }
  }, []);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await login(email, password);
    console.log(email);
    console.log(password);
    if (error) {
      alert(error);
      console.log(error);
    } else {
      navigate("/");
      resetForm();
    }
  };

  return (
    <div>
      <NavBar />
      <main id="mainn">
        <section class="login">
          <div>
            <p class="login--title">Login</p>
            <p class="login--msg">
              Welcome back! Please log in to access your account.
            </p>
          </div>
          <div>
            <form action="" class="login--form">
              <p class="login--item">
                <label for="">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                />
              </p>
              <p class="login--item">
                <label for="">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                />
                <i>
                  <img src={eye} alt="" />
                </i>
              </p>
              <a href="" class="login--forgot">
                forgot password ?
              </a>
              <button type="submit" class="white p-12 rad-6 bg-orange-50">
                Login
              </button>
            </form>
            <div class="login--or">
              <p></p>
              <p>OR</p>
              <p></p>
            </div>
            <div class="to-signup">
              <p>Do not have an account? </p>
              <Link to="/register">Sign Up</Link>
              <i>
                <img src={northE} alt="" class="icon" />
              </i>
            </div>
          </div>
        </section>
        <section class="testti">
        <Testimonials />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
