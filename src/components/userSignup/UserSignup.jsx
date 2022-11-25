import React, { useState } from "react";
import style from "./userSignupStyle.module.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
function UserSignup() {
  const [formVal, dispatch] = useState({
    userType: "user",
    fullName: "",
    email: "",
    phone: "",
    password: "",
    cfpassword: ""
  });
  const onValChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    dispatch({ ...formVal, [name]: value });
  };
  async function postData() {
    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "COntent-Type": "application/json"
      },
      body: JSON.stringify({
        userType: formVal.userType,
        fullName: fullName,
        email: email,
        phone: phone,
        password: password,
        cfpassword: cfpassword
      })
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      alert("INvalid Registration");
    } else {
      alert("REgistration Successfull");
    }
  }
  const submitSignupForm = (e) => {
    e.preventDefault();
    postData();
  };
  const { fullName, email, phone, password, cfpassword } = formVal;
  return (
    <form
      action="/signup"
      method="POST"
      className={style.signupForm}
      onSubmit={submitSignupForm}
    >
      <div className={style.mainSignup}>
        <div className={style.inputRow}>
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            className={style.inputField}
            value={fullName}
            onChange={onValChange}
            spellCheck="false"
            autoComplete="true"
            required
          />
        </div>
        <div className={style.inputRow}>
          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            className={style.inputField}
            value={phone}
            onChange={onValChange}
            spellCheck="false"
            autoComplete="true"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className={style.inputField}
            value={email}
            onChange={onValChange}
            spellCheck="false"
            autoComplete="true"
            required
          />
        </div>
        <div className={style.inputRow}>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className={style.inputField}
            value={password}
            onChange={onValChange}
            spellCheck="false"
            autoComplete="true"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="cfpassword"
            className={style.inputField}
            value={cfpassword}
            onChange={onValChange}
            spellCheck="false"
            autoComplete="true"
            required
          />
        </div>
      </div>
      <div>
        <Button type="submit" value="Sign Up" />
      </div>
    </form>
  );
}

export default UserSignup;
