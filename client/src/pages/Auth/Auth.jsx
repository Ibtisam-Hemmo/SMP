import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { login, signUp } from "../../actions/index.js";
import "./auth.css";

const Auth = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const initialState = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPass: "",
  };
  const [data, setData] = useState(initialState);
  const [confirmPass, setConfirmPass] = useState(true);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistered) {
      data.password === data.confirmPass
        ? dispatch(signUp(data, navigate))
        : setConfirmPass(false);
    } else {
      dispatch(login(data, navigate));
    }
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData(initialState);
  };

  return (
    <div className="auth">
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isRegistered ? "Sign up" : "Login"}</h3>
          {isRegistered && (
            <div>
              <input
                required
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstName"
                onChange={handleChange}
              />
              <input
                required
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastName"
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            <input
              required
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              required
              type="text"
              placeholder="email"
              className="infoInput"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              required
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            {isRegistered && (
              <input
                required
                type="password"
                className="infoInput"
                name="confirmPass"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            )}
          </div>

          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            *Passwords are not the same! try again
          </span>
          <div>
            <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                setIsRegistered(!isRegistered);
                resetForm();
              }}
            >
              {isRegistered
                ? "Already have an account? Login"
                : "Don't have an account? Sign up"}
            </span>
            <button
              className="button infoButton"
              type="Submit"
              disabled={loading}
            >
              {loading ? "Loading ..." : isRegistered ? "SignUp" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
