import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import axios from "axios";
import { Button, Nav, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
    setName(data["name"]);
    setUsername(data["username"]);
    setEmail(data["email"]);
    setPassword(data["password"]);
    setID(data["id"]);
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
        "http://localhost:5000/delete-user",
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

      <div>User Profile</div>
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
      <Nav.Link href="/update-profile">
        <Button>Update</Button>
      </Nav.Link>
      <Button onClick={handleShow}>Delete Account</Button>

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
    </>
  );
};

export default Profile;
