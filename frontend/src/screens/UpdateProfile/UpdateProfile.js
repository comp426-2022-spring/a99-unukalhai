import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateProfile = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ID, setID] = useState("");
  const [error, setError] = useState(false);

  // Retrieve data from localstorage
  const userInfo = () => {
    const jsonData = localStorage.getItem("userInfo");
    var data = JSON.parse(jsonData);
    console.log(data);
    setName(data["name"]);
    console.log(name);
    setUsername(data["username"]);
    setEmail(data["email"]);
    setPassword(data["password"]);
    setID(data["_id"]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("enters");
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      console.log("enters");
      // Calling the API
      const { data } = await axios.post(
        "http://localhost:5000/update-userInfo",
        {
          name,
          username,
          email,
          password,
          _id: ID,
        },
        config
      );

      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      // Successful, so log in and has access to dashboard
      navigate("/profile");
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  useEffect(() => {
    userInfo();
  }, []);
  return (
    <Container>
      <Header />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Update Name</Form.Label>
          <Form.Control
            type="name"
            defaultValue={name}
            placeholder="Enter Name"
            // Sets email to value from control
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Update Username</Form.Label>
          <Form.Control
            type="username"
            defaultValue={username}
            placeholder="Enter username"
            // Sets email to value from control
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Update Email</Form.Label>
          <Form.Control
            type="email"
            defaultValue={email}
            placeholder="Enter email"
            // Sets email to value from control
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter a new password"
            // Sets password to value from control
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default UpdateProfile;
