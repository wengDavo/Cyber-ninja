import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../utils/auth";
import { useNavigate } from "react-router-dom/dist";
import { useAuthStore } from "../store/auth";
import eye from "../components/assets/icons/eye.svg";
import northE from "../components/assets/icons/north-e.svg";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

import NavBar from "../components/Navbar";

function Register() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  // const [phone_number, setPhoneNumber] = useState("");
  const [user_type, setUserType] = useState("");
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const navigate = useNavigate();
  const [error, setError] = useState(null); // Define error state
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/");
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  const togglePassword2Visibility = () => {
    setShowPassword2(!showPassword2); // Toggle password visibility
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setUsername("");
    setPassword("");
    setPassword2("");
    // setPhoneNumber("");
    setUserType("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserType(1);
    console.log(first_name);
    console.log(last_name);
    console.log(email);
    console.log(username);
    console.log(password);
    console.log(password2);
    console.log(user_type);

    if (password === password2) {
      setUserType(1);
    } else {
      const error = "Passwords don't match";
      console.log(error);
    }
    console.log(user_type);
    const { error } = await register(
      first_name,
      last_name,
      email,
      username,
      password,
      password2,
      // phone_number,
      user_type
    );
    if (error) {
      // alert(JSON.stringify(error));
      // alert(error);
      console.log(error);
      if (error.message === "Network Error") {
        console.log(error.message);
        setError(error.message);
      } else {
        for (const field in error.response.data) {
          if (error.response.data.hasOwnProperty(field)) {
            // Log the error messages for each field
            console.log(`${field}: ${error.response.data[field].join("  ")}`);
            setError(error?.response?.data || {});
          }
        }
      }
    } else {
      navigate("/");
      resetForm();
    }
  };

  return (
    <body>
      <NavBar />
      <main className="md:grid md:grid-cols-2">
        <section class="bg-white-97 border border-white-95 p-7 flex flex-col gap-8">
          <div className="text-center">
            <p class="font-semiBold text-3xl mb-4">Sign Up</p>
            <p class="signup--msg text-sm text-grey-30">
              Create an account to unlock exclusive features.
            </p>
          </div>
          <div>
            <form
              action=""
              className="signup--form flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <p className="flex flex-col gap-2 relative">
                <label htmlFor="email" className="text-sm leading-6">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="p-5 border border-white-95 placeholder:leading-6 placeholder:text-sm placeholder:capitalize"
                />
                {error && error.email && (
                  <span className="error-message">
                    {error.email.join("  ")}
                  </span>
                )}
              </p>
              <p className="flex flex-col gap-2 relative">
                <label htmlFor="first_name" className="text-sm leading-6">
                  First Name
                </label>
                <input
                  className="p-5 border border-white-95 placeholder:leading-6 placeholder:text-sm placeholder:capitalize"
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Enter Your Name"
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </p>
              <p className="flex flex-col gap-2 relative">
                <label htmlFor="last_name" className="text-sm leading-6">
                  Last Name
                </label>
                <input
                  className="p-5 border border-white-95 placeholder:leading-6 placeholder:text-sm placeholder:capitalize"
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Enter Your Name"
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </p>
              <p className="flex flex-col gap-2 relative">
                <label htmlFor="username" className="text-sm leading-6">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter Your Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="p-5 border border-white-95 placeholder:leading-6 placeholder:text-sm placeholder:capitalize"
                />
                {error && error.username && (
                  <span className="error-message">
                    {error.username.join("  ")}
                  </span>
                )}
              </p>
              <p className="flex flex-col gap-2 relative">
                <label htmlFor="password" className="text-sm leading-6">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="p-5 border border-white-95 placeholder:leading-6 placeholder:text-sm placeholder:capitalize"
                />
                <i
                  className="absolute right-0"
                  onClick={togglePasswordVisibility}
                >
                  <img src={eye} alt="" />
                </i>
                {error && error.password && (
                  <span className="error-message">
                    {error.password.join("  ")}
                  </span>
                )}
              </p>
              <p className="flex flex-col gap-2 relative">
                <label htmlFor="password2" className="text-sm leading-6">
                  Confirm Password
                </label>
                <input
                  className="p-5 border border-white-95 placeholder:leading-6 placeholder:text-sm placeholder:capitalize"
                  type={showPassword2 ? "text" : "password"}
                  name="password2"
                  id="password2"
                  placeholder="Enter Password again"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  required
                />
                <i
                  className="absolute right-0"
                  onClick={togglePassword2Visibility}
                >
                  <img src={eye} alt="" />
                </i>
                {error && error.password2 && (
                  <span className="error-message">
                    {error.password2.join("  ")}
                  </span>
                )}
              </p>
              <a href="" className="text-grey-40">
                I agree with Terms of Use and Privacy Policy
              </a>
              <button
                type="submit"
                className="text-abs-white p-3 rounded-regular bg-orange-50"
              >
                Sign Up
              </button>
            </form>
            <div class="flex w-full justify-between items-center my-4 text-grey-60 gap-1 text-sm">
              <p className="w-full h-[1px] bg-grey-60"></p>
              <p>OR</p>
              <p className="w-full h-[1px] bg-grey-60"></p>
            </div>
            <div className="text-sm leading-6 flex gap-2 items-center justify-center">
              <p>ALready have an account? </p>
              <Link
                to="/login"
                // style={{ textDecoration: "none", color: "inherit" }}
              >
                Login
              </Link>
              <i>
                <img src={northE} alt="" className="" />
              </i>
            </div>
          </div>
        </section>
        <section>
          <Testimonials />
        </section>
      </main>
      <Footer />
    </body>
  );
}

export default Register;
