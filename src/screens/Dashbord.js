import React from "react";

export default function Dashboard({ userData }) {
  if (!userData) return <div>No user data available</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <p>
          <strong>Full Name:</strong> {userData.full_name}
        </p>
        <p>
          <strong>Username:</strong> {userData.username}
        </p>
        <p>
          <strong>Country:</strong> {userData.country}
        </p>
        <p>
          <strong>Email ID:</strong> {userData.email_id}
        </p>
        <p>
          <strong>Mobile Number:</strong> {userData.mobile_number}
        </p>
        <p>
          <strong>Referral ID:</strong> {userData.referral_id}
        </p>
      </div>
    </div>
  );
}
