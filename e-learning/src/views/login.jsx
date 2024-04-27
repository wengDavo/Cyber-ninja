import { useEffect, useState } from "react";
import { login } from "../utils/auth";
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
    <Container fluid className="p-0 m-0">
        <Row
          style={{
            marginLeft: 0,
            marginRight: 0,
            padding: "5%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            style={{
              marginLeft: 0,
              marginRight: 0,
              padding: "3%",
              width: "600px",
            }}
            className="shadow-lg justify-content-center align-items-center"
          >
            <CardTitle>
              {" "}
              <h4 className="form-title">Login </h4>{" "}
            </CardTitle>
            <Form className="align-items-center" onSubmit={handleLogin}>
              <Row
                className="row-cols-lg-auto align-items-center"
                style={{
                  marginLeft: 0,
                  marginRight: 0,
                  padding: 0,
                }}
              >
                <Col sm={12}>
                  <FormGroup style={{ paddingBottom: 20 }}>
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
              </Row>

              <Row
                className="row-cols-lg-auto align-items-center"
                style={{ marginLeft: 0, marginRight: 0, padding: 0 }}
              >
                <Col sm={12}>
                  <Label className="text-700" for="password">
                    Password <span className="text-orange">*</span>
                  </Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Col>
              </Row>

              <Row
                sm={12}
                style={{
                  marginLeft: 0,
                  marginRight: 0,
                  justifyContent: "center",
                  paddingTop: "10%",
                }}
              >
                <Button
                  style={{ paddingLeft: "2%", paddingRight: "2%" }}
                  className="text-align-center btn-custom"
                  type="submit"
                >
                  Login
                </Button>
              </Row>
            </Form>
          </Card>
        </Row>
    </Container>
  );
};

export default Login;
