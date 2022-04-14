import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import "./LoginPage.css";

const LoginPage = () => {
  // Stores username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // errors
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setLoading(true);
      // Calling the API
      const { data } = await axios.post(
        "/login",
        {
          username,
          password,
        },
        config
      );

      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <MainScreen title="LOGIN">
      <div className="loginContainer">
        {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />} */}
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
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer ? <Link to="/register">Register Here</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default LoginPage;
