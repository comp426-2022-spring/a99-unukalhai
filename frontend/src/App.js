import { useState } from "react";
import "./App.css";
import "./bootstrap.min.css";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./screens/LoginPage/LoginPage";
import SignUpPage from "./screens/SignUpPage/SignUpPage";
import Dashboard from "./screens/Dashboard/Dashboard";
import Profile from "./screens/Profile/Profile";
import UpdateProfile from "./screens/UpdateProfile/UpdateProfile";


function App() {


  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/update-profile" element={<UpdateProfile />} />
    </Routes>
  );
}

export default App;
