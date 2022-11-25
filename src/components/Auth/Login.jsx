import SideImage from "../sideImage/SideImage";
import React, { useState } from "react";
import style from "./loginStyle.module.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../button/Button";
import FormFooter from "../formFooter/FormFooter";
import Logo from "../logo/Logo";
function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const onValChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const submitLoginForm = (e) => {
    e.preventDefault();
    postData();
    console.log(user);
  };
  const navigate = useNavigate();
  const postData = async (e) => {
    const { email, password } = user;
    const res = await fetch("/", {
      method: "POST",
      headers: {
        "COntent-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const data = await res.json();
    if (data.status === 400 || !data) {
      alert("Invalid");
    } else {
      alert("Login Successfull");
      navigate("/dashboard");
    }
  };
  const { email, password } = user;
  return (
    <>
      <div className={style.formContainer}>
        {/* FORM HEADER */}
        <div className={style.formHeader}>
          <p className={style.loginGreet}>Welcome to</p>
          <Logo />
          <p className={style.formSlogan}>Login to make the difference</p>
        </div>
        {/* FORM HEADER */}

        {/* LOGIN FORM */}
        <form
          action="/signin"
          method="post"
          className={style.loginForm}
          onSubmit={submitLoginForm}
        >
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            className={style.inputField}
            onChange={onValChange}
            spellCheck="false"
            autoComplete="true"
            required
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={password}
            className={style.inputField}
            onChange={onValChange}
            spellCheck="false"
            autoComplete="true"
            required
          />
          <div className={style.forgot}>
            <Link
              to="/forgotpassword"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <p>Forgot Password ?</p>
            </Link>
          </div>
          <div>
            <Button type="submit" value="LOG IN" />
          </div>
        </form>
        {/* LOGIN FORM */}

        <Link
          to="/signup"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <FormFooter statement="Don't have an account ? " link="Sign Up Now" />
        </Link>
      </div>
      <SideImage />
    </>
  );
}

export default Login;
