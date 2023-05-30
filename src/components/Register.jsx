import { Avatar, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../slices/UserSlice";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [registerState, setRegisterState] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    if (password === confirmPassword) {
      dispatch(login(user));
      axios.post("/addUsers", user).then((res) => setRegisterState(true));
    } else {
      alert("Passwords not matching!");
    }

    if (registerState) {
      navigate("/Home");
    }
  };
  return (
    <div className="login-page">
      <Avatar
        sx={{ bgcolor: "#675d50", width: "80px", height: "80px" }}
        src="/broken-image.jpg"
      />
      <h1 className="login-title">Login</h1>
      <div className="register-input-fields">
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
          <TextField
            required
            id="standard-required"
            label="confirmPassword"
            defaultValue="confirmPassword"
            variant="standard"
            value={confirmPassword}
            onChange={(e) => {
              setconfirmPassword(e.target.value);
            }}
          />
          <button className="register-button" onClick={handleRegister}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
