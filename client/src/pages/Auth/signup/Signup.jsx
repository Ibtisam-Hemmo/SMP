import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

import signup from "../../../actions/auth/signup";
import styles from "./Signup.module.css";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
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
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!!data.name && !!data.email && !!data.password) {
      if (data.password === data.confirmPassword) {
        dispatch(signup(data, navigate));
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
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className={styles.input}
            value={data.name}
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
            name="confirmPassword"
            className={styles.input}
            value={data.confirmPassword}
            onChange={handleChange}
            required
          />
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
