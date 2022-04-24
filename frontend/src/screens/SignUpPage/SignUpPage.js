import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import ErrorMessage from "../../components/ErrorMessage";
// import { useNavigate } from "react-router-dom";
import "./SignUpPage.css";

function SignUpPage() {
  // USER PROFILE STATES
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  let navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email);

    if (password !== confirmpassword) {
      setMessage("Passwords Do Not Match");
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const { data } = await axios.post(
          "http://localhost:5000/app/signup",
          {
            name,
            username,
            email,
            password,
            password2: confirmpassword,
          },
          config
        );
        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        // Successful, so goes back to log in form has access to dashboard
        navigate("/");
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="main">
      <Container>
        <div className="sign-up-container">
          <h1 className="font-weight-bold">SIGN UP</h1>
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}

          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label className="pt-2">First and Last Name</Form.Label>
              <Form.Control
                type="name"
                value={name}
                placeholder="Enter First and Last Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="username">
              <Form.Label className="pt-2">Username</Form.Label>
              <Form.Control
                type="username"
                value={username}
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label className="pt-2">Email Address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
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

            <Form.Group controlId="confirmPassword">
              <Form.Label className="pt-2">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmpassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Register
            </Button>
          </Form>
          <Row className="py-3">
            <Col>
              Have an Account ? <Link to="/login">Login</Link>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default SignUpPage;
