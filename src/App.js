import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Dashboard from "./screens/Dashbord";

export default function App() {
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUserData={setUserData} />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard userData={userData} />} />
      </Routes>
    </Router>
  );
}
