import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    if(password === confirmPassword){
        try {
            const result =await axios.post("http://localhost:5000/signup", { name, email, password });

            if (result.data === "Successful") {
                navigate("/login");
            }
            if(result.data === "Email already registered"){
                setError("Email already registered")
            }
              
        } catch (error) {
            console.log(error);
        }
    }
    else{
        setError("Password does not match");
    }
    
  }
  return (
    <div>
      <h2 className="title">Sign Up</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter the Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
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
        <label htmlFor="ConfirmPassword">Confirm Password</label>
        <input
          type="password"
          placeholder="Enter the Password again"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit" className="btn-s" >
          Sign Up
        </button>
        <a href="/login">Already have an account?</a>
      </form>
    </div>
  );
};

export default Signup;
