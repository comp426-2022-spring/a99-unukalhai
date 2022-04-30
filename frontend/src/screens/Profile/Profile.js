import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import axios from "axios";
import { Button, Nav, Modal, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ID, setID] = useState("");
  const [error, setError] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Retrieve data from localstorage
  const userInfo = () => {
    const jsonData = localStorage.getItem("userInfo");
    var data = JSON.parse(jsonData);
    console.log(data);
    setName(data["name"]);
    setUsername(data["username"]);
    setEmail(data["email"]);
    setPassword(data["password"]);
    setID(data["_id"]);
  };

  const deleteUser = async (e) => {
    e.preventDefault();
    console.log("clicked");
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Calling the API
      const { data } = await axios.post(
        "http://localhost:5000/app/delete-user",
        { _id: ID },

        config
      );

      console.log("Data from request", data);
      // Successfully deleted user
      localStorage.removeItem("userInfo");
      navigate("/");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  useEffect(() => {
    userInfo();
  }, []);

  return (
    <>
      <Header />

      <Container>
        <div className="user-header">User Profile</div>
        <Card className="card-container" style={{ textAlign: "center" }}>
          <Card.Body>
            <Card.Title>
              <p className="user-name">{name}</p>
            </Card.Title>
            <Card.Text className="user-info">
              <strong>Username: </strong> {username}
            </Card.Text>
            <Card.Text className="user-info">
              <strong>Email: </strong> {email}
            </Card.Text>

            <Nav.Link className="user-update" href="/update-profile">
              <Button>Update</Button>
              <Button onClick={handleShow}>Delete Account</Button>
            </Nav.Link>
          </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Acount</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete your account?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={deleteUser}>
              Delete Account
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default Profile;
