import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUserData }) {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!loginId || !password) {
      setError("Please fill all the fields");
      return;
    }

    try {
      const response = await fetch(
        "https://lobster-app-ddwng.ondigitalocean.app/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH",
          },
          body: JSON.stringify({ login_id: loginId, password }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setUserData(data); // Save user data for Dashboard
        navigate("/dashboard");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong!");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>Username or Email</label>
        <input
          placeholder="Enter your username or email"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={handleLogin}>Login</button>
      <button onClick={() => navigate("/register")}>Register</button>
    </div>
  );
}
