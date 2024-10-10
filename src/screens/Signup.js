import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    referralId: "",
    emailId: "",
    mobileNumber: "",
    country: "IND",
    password: "",
  });
  const [error, setError] = useState("");

  const handleRegister = async () => {
    const { fullName, username, referralId, emailId, mobileNumber, password } =
      formData;

    if (!fullName || !username || !emailId || !mobileNumber || !password) {
      setError("Please fill all required fields");
      return;
    }

    try {
      const response = await fetch(
        "https://lobster-app-ddwng.ondigitalocean.app/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH",
          },
          body: JSON.stringify({
            full_name: fullName,
            username,
            referral_id: referralId,
            email_id: emailId,
            country_row_id:
              formData.country === "IND"
                ? "101"
                : formData.country === "UK"
                ? "102"
                : "103",
            mobile_number: mobileNumber,
            password,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        navigate("/");
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      setError("Something went wrong!");
    }
  };

  return (
    <div>
      <h1>Register Page</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>Full name</label>
        <input
          placeholder="Enter your name"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />
      </div>
      <div>
        <label>Username</label>
        <input
          placeholder="Enter username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
      </div>
      <div>
        <label>Referral id</label>
        <input
          placeholder="Enter your referral id"
          value={formData.referralId}
          onChange={(e) =>
            setFormData({ ...formData, referralId: e.target.value })
          }
        />
      </div>
      <div>
        <label>Email id</label>
        <input
          placeholder="Enter your email id"
          value={formData.emailId}
          onChange={(e) =>
            setFormData({ ...formData, emailId: e.target.value })
          }
        />
      </div>
      <div>
        <label>Mobile number</label>
        <input
          placeholder="Enter your mobile number"
          value={formData.mobileNumber}
          onChange={(e) =>
            setFormData({ ...formData, mobileNumber: e.target.value })
          }
        />
      </div>
      <div>
        <label>Select Country</label>
        <select
          value={formData.country}
          onChange={(e) =>
            setFormData({ ...formData, country: e.target.value })
          }
        >
          <option value="IND">IND</option>
          <option value="UK">UK</option>
          <option value="US">US</option>
        </select>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </div>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
