import React from "react";
import "./Header.css"
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

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
      const { data } = await axios.get(
        "http://localhost:5000/app/logout",
        config
      );

      console.log(data);
      // Successful, so log in and has access to dashboard
      localStorage.removeItem("userInfo");
      navigate("/");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/dashboard">
            <img
              src = "https://identity2.sites.unc.edu/wp-content/uploads/sites/885/2019/01/centered_logo.png"
              width="60"
              height="50"
              className = "logo"
              alt="React Bootstrap logo"
            />
            Mental Health Resources
            </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/profile">User Profile</Nav.Link>
            <Nav.Link href = "/">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
    </>
  );
};

export default Header;
