import React, { useState } from "react";
import { registerUser } from "../api/Register";

const RegisterComponent = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await registerUser(formData);
      setMessage(result.message || "Registration successful!");
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <br />

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <br />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <br />

        <button type="submit">Register</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterComponent;
