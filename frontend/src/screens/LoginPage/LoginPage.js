import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import ErrorMessage from "../../components/ErrorMessage";
import "./LoginPage.css";

const LoginPage = ({ history }) => {
  // Stores username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  // errors
  const [error, setError] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("userinfo");
    if (userInfo) {
      navigate("/dashboard");
    }
  }, []);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Calling the API
      const { data } = await axios.post(
        "http://localhost:5000/login",
        {
          username,
          password,
        },
        config
      );

      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      // Successful, so log in and has access to dashboard
      navigate("/dashboard");
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <div className="main">
      <Container>
        <div className="login-container">
          {/* Will display error message */}
          <h1 className="font-weight-bold">LOG IN</h1>
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="formBasicusername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                value={username}
                placeholder="Enter username"
                // Sets username to value from control
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="pt-2">Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          <Link to ="/dashboard">
            <Button variant="primary" type="submit" className="mt-3">
              Log In
            </Button>
          </Link>
          </Form>
          <Row className="py-3">
            <Col>
              New Customer ? <Link to="/signup">Register Here</Link>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
