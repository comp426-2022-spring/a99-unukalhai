import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import axios from "axios";

const Profile = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <Header />

      <div>User Profile</div>
    </>
  );
};

export default Profile;
