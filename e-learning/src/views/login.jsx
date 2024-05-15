import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../utils/auth";
import { useNavigate } from "react-router-dom/dist";
import { useAuthStore } from "../store/auth";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import eye from "../components/assets/icons/eye.svg";
import northE from "../components/assets/icons/north-e.svg";

import NavBar from "../components/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null); // Define error state

  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/");
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("ok");
    const { error } = await login(email, password);
    console.log(email);
    console.log(password);
    if (error) {
      // alert(error);
      console.log("ok");
      if (error.message === "Network Error") {
        console.log(error.message);
        setError(error.message);
      } else {
        console.log(error.response.data.detail);
        setError(error.response.data.detail);
      }
    } else {
      console.log("ok");
      navigate("/");
      resetForm();
    }
  };

  return (
    <div>
      <NavBar />
      <main className="md:grid md:grid-cols-2">
        <section className="bg-white-97 border border-white-95 p-7 flex flex-col gap-8">
          <div>
            <p className="font-semiBold text-3xl mb-">Login</p>
            <p className="text-sm text-grey-30">
              Welcome back! Please log in to access your account.
            </p>
          </div>
          <div>
            <form
              action="submit"
              className="flex flex-col gap-4"
              onSubmit={handleLogin}
            >
              <p className="flex flex-col gap-2 relative">
                <label for="" className="text-sm leading-6">
                  Email
                </label>
                <input
                  className="p-5 border border-white-95 placeholder:leading-6 placeholder:text-sm placeholder:capitalize"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </p>
              <p className="flex flex-col gap-2 relative">
                <label for="" className="text-sm leading-6">
                  Password
                </label>
                <input
                  className="p-5 border border-white-95 placeholder:leading-6 placeholder:text-sm placeholder:capitalize"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i
                  className="absolute right-0"
                  onClick={togglePasswordVisibility}
                >
                  <img src={eye} alt="" />
                </i>
              </p>
              <a
                href=""
                className="text-sm leading-6 text-grey-30 text-right capitalize"
              >
                forgot password ?
              </a>
              <button
                type="submit"
                className="text-abs-white p-3 rounded-regular bg-orange-50"
              >
                Login
              </button>
            </form>
            <div className="flex w-full justify-between items-center my-4 text-grey-60 gap-1 text-sm">
              <p className="w-full h-[1px] bg-grey-60"></p>
              <p>OR</p>
              <p className="w-full h-[1px] bg-grey-60"></p>
            </div>
            <div className="text-sm leading-6 flex gap-2 items-center justify-center">
              <p>Do not have an account? </p>
              <Link to="/register">Sign Up</Link>
              <i>
                <img src={northE} alt="" />
              </i>
            </div>
          </div>
        </section>
        <section>
          <Testimonials />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
