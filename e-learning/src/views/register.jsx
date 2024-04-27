import { useEffect, useState } from "react";
import { register } from "../utils/auth";
import { useNavigate } from "react-router-dom/dist";
import { useAuthStore } from "../store/auth";
import Landing from "../components/Landing";
import {
  Container,
  Form,
  Row,
  Col,
  FormGroup,
  Card,
  CardTitle,
  Input,
  Label,
  Button,
} from "reactstrap";

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
      setUserType(2)
    } else {setUserType(3)};
    console.log(user_type)
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
      console.log(error)
    } else {
      navigate("/");
      resetForm();
    }
  };

  return (
    <Container fluid className="p-0 m-0">
      {/* <Landing> */}
      <Row
        style={{
          marginLeft: 0,
          marginRight: 0,
          padding: "5%",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Card
          style={{
            marginLeft: 0,
            marginRight: 0,
            padding: "3%",
            width: "100%",
          }}
          className="shadow-lg justify-content-center align-items-center"
        >
          <CardTitle
            style={{
              width: "100%",
            }}
          >
            {" "}
            <h4 className="form-title">
              Welcome to Property Inc <br />
              <br /> Please Register below{" "}
            </h4>{" "}
          </CardTitle>
          <Form
            style={{
              width: "80%",
              // textAlign: "center",
            }}
            className="justify-content-center"
            onSubmit={handleSubmit}
          >
            <hr />
            <Row
              className="row-cols-lg-auto align-items-center justify-content-between"
              style={{
                marginLeft: 0,
                marginRight: 0,
                padding: 0,
              }}
            >
              <Col sm={12} lg={6}>
                <FormGroup row style={{ paddingBottom: 20 }}>
                  <Label className="text-700" for="first_name">
                    First Name <span className="text-orange">*</span>
                  </Label>
                  <Input
                    id="first_name"
                    name="first_name"
                    placeholder="Enter First Name"
                    type="text"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </FormGroup>
              </Col>
              <Col sm={12} lg={6}>
                <FormGroup row style={{ paddingBottom: 20 }}>
                  <Label className="text-700" for="last_name">
                    Last Name <span className="text-orange">*</span>
                  </Label>
                  <Input
                    id="last_name"
                    name="last_name"
                    placeholder="Enter Last Name"
                    type="text"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row
              className="row-cols-lg-auto justify-content-between align-items-center"
              style={{
                marginLeft: 0,
                marginRight: 0,
                padding: 0,
              }}
            >
              <Col sm={12} lg={6}>
                <FormGroup row style={{ paddingBottom: 20 }}>
                  <Label className="text-700" for="email">
                    Email <span className="text-orange">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormGroup>
              </Col>
              <Col sm={12} lg={6}>
                <FormGroup row style={{ paddingBottom: 20 }}>
                  <Label className="text-700" for="username">
                    Username <span className="text-orange">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row
              className="row-cols-lg-auto align-items-center justify-content-between"
              style={{
                marginLeft: 0,
                marginRight: 0,
                padding: 0,
              }}
            >
              <Col sm={12} lg={6}>
                <FormGroup row style={{ paddingBottom: 20 }}>
                  <Label className="text-700" for="password">
                    Password <span className="text-orange">*</span>
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ width: "200%" }}
                  />
                </FormGroup>
              </Col>
              <Col sm={12} lg={6}>
                <FormGroup row style={{ paddingBottom: 20 }}>
                  <Label className="text-700" for="password2">
                    Confirm Password <span className="text-orange">*</span>
                  </Label>
                  <Input
                    id="password2"
                    name="password2"
                    placeholder="Confirm Password"
                    type="password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    required
                  />
                </FormGroup>
              </Col>
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                {password2 !== password ? "Passwords do not match" : null}
              </p>
            </Row>

            <Row
              className="row-cols-lg-auto align-items-center justify-content-between"
              style={{
                marginLeft: 0,
                marginRight: 0,
                padding: 0,
              }}
            >
              <Col sm={12} lg={6}>
                <FormGroup row style={{ paddingBottom: 20 }}>
                  <Label className="text-700" for="phone_number">
                    Phone Number <span className="text-orange">*</span>
                  </Label>
                  <Input
                    id="phone_number"
                    name="phone_number"
                    placeholder="Enter Phone Number"
                    type="text"
                    value={phone_number}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    style={{ width: "200%" }}
                  />
                </FormGroup>
              </Col>
              <Col sm={12} lg={6}>
                <FormGroup row style={{ paddingBottom: 20 }}>
                  <Label className="text-700" for="user_type">
                    User Type <span className="text-orange">*</span>
                  </Label>
                  <Input
                    id="user_type"
                    name="user_type"
                    placeholder="Select User Type"
                    type="select"
                    value={user_type}
                    onChange={(e) => setUserType(e.target.value)}
                    required
                  >
                    <option>Lister</option>
                    <option>User</option>
                  </Input>
                  {/* <p
                style={{
                  color: "red",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                {user_type}
              </p> */}
                </FormGroup>
              </Col>
            </Row>

            <Row
              sm={12}
              style={{
                marginLeft: 0,
                marginRight: 0,
                justifyContent: "center",
                paddingTop: "1%",
              }}
            >
              <Button
                style={{ paddingLeft: "2%", paddingRight: "2%" }}
                className="text-align-center btn-custom"
                type="submit"
              >
                Register
              </Button>
            </Row>
          </Form>
        </Card>
      </Row>
      {/* </Landing> */}
    </Container>
  );
}

export default Register;
