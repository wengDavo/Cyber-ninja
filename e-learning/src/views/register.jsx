import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../utils/auth";
import { useNavigate } from "react-router-dom/dist";
import { useAuthStore } from "../store/auth";
// import "../components/styles/css/signup.css";
import eye from "../components/assets/icons/eye.svg";
import northE from "../components/assets/icons/north-e.svg";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

import NavBar from "../components/Navbar";

function Register() {
  const [full_name, setFullName] = useState("");
  // const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  // const [phone_number, setPhoneNumber] = useState("");
  // const [user_type, setUserType] = useState("");
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/");
    }
  }, []);

  const resetForm = () => {
    setFullName("");
    // setLastName("");
    setEmail("");
    // setUsername("");
    setPassword("");
    setPassword2("");
    // setPhoneNumber("");
    // setUserType("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (user_type === "Lister") {
    //   setUserType(2);
    // } else {
    //   setUserType(3);
    // }
    // console.log(user_type);
    const { error } = await register(
      full_name,
      // last_name,
      email,
      // username,
      password,
      password2
      // phone_number,
      // user_type
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
    <body >
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
            <form action="" class="signup--form flex flex-col gap-4">
              <p class="flex flex-col gap-2 relative">
                <label for="" className="text-sm leading-6">
                  Email
                </label>
                <input
                  className="p-5 border border-white-95 placeholder:leading-6 placeholder:text-sm placeholder:capitalize"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                />
              </p>
              <p class="flex flex-col gap-2 relative">
                <label for="" className="text-sm leading-6">
                  Full Name
                </label>
                <input
                  className="p-5 border border-white-95 placeholder:leading-6 placeholder:text-sm placeholder:capitalize"
                  type="text"
                  name="full_name"
                  id="full_name"
                  placeholder="Enter Your Name"
                />
              </p>
              <p class="flex flex-col gap-2 relative">
                <label for="" className="text-sm leading-6">
                  Password
                </label>
                <input
                  className="p-5 border border-white-95 placeholder:leading-6 placeholder:text-sm placeholder:capitalize"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                />
                <i className="absolute right-0">
                  <img src={eye} alt="" />
                </i>
              </p>
              <a href="" className="text-grey-40">
                I agree with Terms of Use and Privacy Policy
              </a>
              <button
                type="submit"
                class="text-abs-white p-3 rounded-regular bg-orange-50"
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
              <Link to="/login">Login</Link>
              <i>
                <img src={northE} alt="" class="" />
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
