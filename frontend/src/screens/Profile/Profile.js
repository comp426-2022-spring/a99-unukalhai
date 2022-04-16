import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import axios from "axios";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Profile = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // Retrieve data from localstorage
  const userInfo = () => {
    const jsonData = localStorage.getItem("userInfo");
    var data = JSON.parse(jsonData);
    setName(data["name"]);
    setUsername(data["username"]);
    setEmail(data["email"]);
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
    </>
  );
};

export default Profile;
