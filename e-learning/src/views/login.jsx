import { useEffect, useState } from "react";
import { login } from "../utils/auth";
import { useNavigate } from "react-router-dom/dist";
import { useAuthStore } from "../store/auth";
import Testimonials from "../components/Testimonials";
import "../components/styles/css/login.css"

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
    <body>
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
                name=""
                id=""
                placeholder="Enter your Email"
              />
            </p>
            <p class="login--item">
              <label for="">Password</label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter your Password"
              />
              <i>
                <img src="/assets/icons/eye.svg" alt="" />
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
            <a href="">Sign Up</a>
            <i>
              <img src="/assets/icons/north-e.svg" alt="" class="icon" />
            </i>
          </div>
        </div>
      </section>
      <Testimonials />
    </body>
  );
};

export default Login;
