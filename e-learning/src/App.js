// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faFax, faPhone, faLocationPin } from '@fortawesome/free-solid-svg-icons'

import { Route, Routes, BrowserRouter } from "react-router-dom/dist";
import Home from "./views/home";
import MainWrapper from "./layouts/Mainwrapper";
import Login from "./views/login";
import PrivateRoute from "./layouts/PrivateRoute";
import Logout from "./views/logout";
import Private from "./views/private";
import Register from "./views/register";
import Courses from "./views/courses";
import Course from "./views/course";
import About from "./views/about";
import Contact from "./views/contact";
import Pricing from "./views/pricing";
import { CourseProvider } from "./layouts/CourseContext";
import Dashboard from "./views/dashboard";

// library.add(fab, faFax, faPhone, faLocationPin)
// console.log(library)

function App() {
  return (
    <BrowserRouter>
      <CourseProvider>
        <MainWrapper>
          <Routes>
            <Route
              path="/private"
              element={
                <PrivateRoute>
                  <Private />
                </PrivateRoute>
              }
            />
            <Route
              path="/courses"
              element={
                // <PrivateRoute>
                <Courses />
                // </PrivateRoute>
              }
            />
            <Route
              path="/course/:id"
              element={
                // <PrivateRoute>
                <Course />
                // </PrivateRoute>
              }
            />
            <Route
              path="/about"
              element={
                // <PrivateRoute>
                <About />
                // </PrivateRoute>
              }
            />
            <Route
              path="/contact"
              element={
                // <PrivateRoute>
                <Contact />
                // </PrivateRoute>
              }
            />
            <Route
              path="/pricing"
              element={
                // <PrivateRoute>
                <Pricing />
                // </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />

          </Routes>
        </MainWrapper>
      </CourseProvider>
    </BrowserRouter>
  );
}

export default App;
