import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import axios from "axios";

const Profile = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

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
    </>
  );
};

export default Profile;
