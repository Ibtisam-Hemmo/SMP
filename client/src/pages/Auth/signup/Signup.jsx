import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

import { signUp } from "../../../actions/authActions";
import styles from "./Signup.module.css";

const Signup = () => {
  const [data, setData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const loading = useSelector((state) => state.authReducer.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setData({
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPass: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !!data.username &&
      !!data.email &&
      !!data.password &&
      !!data.firstName &&
      !!data.lastName
    ) {
      if (data.password === data.confirmPass) {
        dispatch(signUp(data, navigate));
      } else {
        swal("Passwords don't match");
      }
    } else {
      swal("You need to fill all the required inputs");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className={styles.group}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              className={styles.input}
              value={data.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              className={styles.input}
              value={data.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className={styles.input}
              value={data.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              className={styles.input}
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className={styles.input}
              value={data.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPass"
              className={styles.input}
              value={data.confirmPass}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <Link to="/login">
          <span
            style={{
              fontSize: "12px",
              cursor: "pointer",
              color: "purple",
              textDecoration: "underline",
            }}
            onClick={() => {
              resetForm();
            }}
          >
            Already have an account? Login
          </span>
        </Link>
        <button className={styles.button} type="submit" disabled={loading}>
          {loading ? "Loading ..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
