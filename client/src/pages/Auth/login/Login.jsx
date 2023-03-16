import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

import { login } from "../../../actions/authActions";
import styles from "./Login.module.css";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const loading = useSelector((state) => state.authReducer.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!!data.password && !!data.username) {
      dispatch(login(data, navigate));
    } else {
      swal("You need to fill all the required inputs");
    }
  };

  useEffect(() => {
    const rememberMeData = localStorage.getItem("rememberMeData");
    if (rememberMeData) {
      setData(JSON.parse(rememberMeData));
    }
  }, []);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3>Login</h3>
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
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className={styles.input}
            value={data.password}
            onChange={handleChange}
            required
          />
          <Link to="/signup">
            <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                color: "purple",
                textDecoration: "underline",
              }}
            >
              Don't have an account? Sign up
            </span>
          </Link>
        </div>

        <div className={styles.rememberMe}>
          <input
            type="checkbox"
            name="rememberMe"
            checked={data.rememberMe}
            onChange={handleChange}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <button className={styles.button} type="submit" disabled={loading}>
          {loading ? "Loading ..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
