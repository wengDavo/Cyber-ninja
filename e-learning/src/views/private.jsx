import { useEffect, useState } from "react";
import useAxios from "../utils/useAxios";
import { useAuthStore } from "../store/auth";
// import { LoggedOutView } from "../components/Navbar";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom/dist";

const Private = () => {
  const [res, setRes] = useState("");
  const [posRes, setPostRes] = useState("");
  const api = useAxios();
  const [isLoggedIn, isLister, user] = useAuthStore((state) => [
    state.isLoggedIn,
    state.isLister,
    state.user,
  ]);
  console.log(isLister());

  useEffect(() => {
    const fetchData = async (user) => {
      try {
        const response = await api.get("/test/", {
          user,
        });
        setRes(response.data.response);
      } catch (error) {
        setPostRes(error.response.data);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/test/", {
        text: e.target[0].value,
      });
      setPostRes(response.data.response);
    } catch (error) {
      setPostRes(error.response.data);
    }
  };

  return (
    <Container
      fluid
      style={{ paddingLeft: "2%", paddingRight: "2%", margin: 0 }}
    >
      {/* {isLoggedIn() ? <ProfileView user={user()} /> : <LoggedOutView />} */}
    </Container>
  );
};

const ProfileView = ({ user }) => {
  console.log(user)
  return (
    <section>
      <h1>Private</h1>
      <p>{user.username}</p>
      <p>{user.user_type}</p>
      <p>{user.email}</p>
      <p>{user.user_id}</p>
      <p>{user.username}</p>
    </section>
  );
};

export default Private;
