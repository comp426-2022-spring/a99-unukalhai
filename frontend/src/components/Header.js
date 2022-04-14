import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  const LogoutUser = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Calling the API
      const { data } = await axios.get("http://localhost:5000/logout", config);

      console.log(data);
      // Successful, so log in and has access to dashboard
      navigate("/");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">COVID-19 Resources</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">User Profile</Nav.Link>
            <Nav.Link onClick={LogoutUser}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
    </>
  );
};

export default Header;
