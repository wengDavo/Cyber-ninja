import { useEffect, useState } from "react";
import { register } from "../utils/auth";
import { useNavigate } from "react-router-dom/dist";
import { useAuthStore } from "../store/auth";
import "../components/styles/css/signup.css";
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
  const [phone_number, setPhoneNumber] = useState("");
  const [user_type, setUserType] = useState("");
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/");
    }
  }, []);

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setUsername("");
    setPassword("");
    setPassword2("");
    setPhoneNumber("");
    setUserType("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user_type === "Lister") {
      setUserType(2);
    } else {
      setUserType(3);
    }
    console.log(user_type);
    const { error } = await register(
      first_name,
      last_name,
      email,
      username,
      password,
      password2,
      phone_number,
      user_type
    );
    if (error) {
      alert(JSON.stringify(error));
      console.log(error);
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
            <form action="" class="signup--form">
              <p class="signup--item">
                <label for="">Email</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your Email"
                />
              </p>
              <p class="signup--item">
                <label for="">Full Name</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Your Name"
                />
              </p>
              <p class="signup--item">
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
              <a href="">Login</a>
              <i>
                <img src="/assets/icons/north-e.svg" alt="" class="icon" />
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
