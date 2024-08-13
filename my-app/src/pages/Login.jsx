import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    try {
      const result = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if (result.data === "Successfull") {
        navigate("/");
      }
      if (
        result.data === "Incorrect password" ||
        result.data === "User not found"
      ) {
        setError("Invalid credentials.");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h2 className="title">Login</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter the Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          placeholder="Enter the Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />

        <button type="submit" className="btn-s">
          Login
        </button>
        <a href="/signup">Don't you have an account?</a>
      </form>
    </div>
  );
};

export default Login;
