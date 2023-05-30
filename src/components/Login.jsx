import { Avatar, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../slices/UserSlice";
import axios from "../axios";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    dispatch(login(user));
  };
  return (
    <div className="login-page">
      <Avatar
        sx={{ bgcolor: "#675d50", width: "80px", height: "80px" }}
        src="/broken-image.jpg"
      />
      <h1 className="login-title">Login</h1>
      <div className="input-fields">
        <form action="POST" className="login-form">
          <TextField
            required
            id="standard-required"
            label="Email"
            variant="standard"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <TextField
            required
            id="standard-required"
            label="Password"
            variant="standard"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </form>
        <Link to="/register">
          <p className="register-text">Not signed in?, Please register</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
