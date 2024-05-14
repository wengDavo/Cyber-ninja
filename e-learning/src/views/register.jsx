import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../utils/auth";
import { useNavigate } from "react-router-dom/dist";
import { useAuthStore } from "../store/auth";
import "../components/styles/css/signup.css";
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
      <main id="mainn">
        <section class="signup">
          <div>
            <p class="signup--title">Sign Up</p>
            <p class="signup--msg">
              Create an account to unlock exclusive features.
            </p>
          </div>
          <div>
            <form action="" class="signup--form" onSubmit={handleSubmit}>
              <p class="signup--item">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={error && error.email ? "error" : ""}
                />
                {error && error.email && (
                  <span className="error-message">
                    {error.email.join("  ")}
                  </span>
                )}
              </p>
              <p class="signup--item">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Enter Your Name"
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </p>
              <p class="signup--item">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Enter Your Name"
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </p>
              <p class="signup--item">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter Your Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className={error && error.username ? "error" : ""}
                />
                {error && error.username && (
                  <span className="error-message">
                    {error.username.join("  ")}
                  </span>
                )}
              </p>
              <p class="signup--item">
                <label htmlFor="">Password</label>
                <div className="password-input-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className={error && error.password ? "error" : ""}
                  />
                  <i onClick={togglePasswordVisibility}>
                    <img src={eye} alt="" />
                  </i>
                </div>
                {error && error.password && (
                  <span className="error-message">
                    {error.password.join("  ")}
                  </span>
                )}
              </p>
              <p class="signup--item">
                <label htmlFor="">Confirm Password</label>
                <div className="password-input-container">
                  <input
                    type={showPassword2 ? "text" : "password"}
                    name="password2"
                    id="password2"
                    placeholder="Enter Password again"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    required
                    className={error && error.password2 ? "error" : ""}
                  />
                  <i onClick={togglePassword2Visibility}>
                    <img src={eye} alt="" />
                  </i>
                </div>
                {error && error.password2 && (
                  <span className="error-message">
                    {error.password2.join("  ")}
                  </span>
                )}
              </p>
              <a href="" class="signup--policy">
                I agree with Terms of Use and Privacy Policy
              </a>
              <button type="submit" class="white p-12 rad-6 bg-orange-50">
                Sign Up
              </button>
            </form>
            <div class="signup--or">
              <p></p>
              <p>OR</p>
              <p></p>
            </div>
            <div class="to-login">
              <p>ALready have an account? </p>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Login
              </Link>
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
    </body>
  );
}

export default Register;
