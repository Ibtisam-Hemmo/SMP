import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import swal from "sweetalert";

import { login, signUp } from "../../actions/index.js";
import "./auth.css";

const Auth = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPass: "",
  };

  const [isRegistered, setIsRegistered] = useState(false);
  const [data, setData] = useState(initialState);
  const [confirmPass, setConfirmPass] = useState(true);

  const loading = useSelector((state) => state.authReducer.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistered) {
      if (
        !!data.password &&
        !!data.username &&
        !!data.firstName &&
        !!data.lastName &&
        !!data.password &&
        !!data.confirmPass
      ) {
        data.password === data.confirmPass
          ? dispatch(signUp(data, navigate))
          : setConfirmPass(false);
      } else {
        swal("You need to fill all the required inputs");
      }
    } else {
      if (!!data.password && !!data.username) {
        dispatch(login(data, navigate));
      } else {
        swal("You need to fill all the required inputs");
      }
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
