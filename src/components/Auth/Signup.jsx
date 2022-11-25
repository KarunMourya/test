import SideImage from "../sideImage/SideImage";
import React, { useState } from "react";
import Radiobtn from "../radiobtn/Radiobtn";
import Logo from "../logo/Logo";
import style from "./signupStyle.module.css";
import FormFooter from "../formFooter/FormFooter";
import { Link } from "react-router-dom";
import UserSignup from "../userSignup/UserSignup";
import NgoSignup from "../ngoSignup/NgoSignup";
function Signup() {
  const [user, setUser] = useState("user");
  const submitSignupForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className={style.signupContainer}>
        <p className={style.signupHeader}>Sign Up to</p>
        <Logo />
        <form className={style.signupForm} onSubmit={submitSignupForm}>
          <div className={style.rbtns}>
            <Radiobtn
              name="role-select"
              role="User"
              value={user}
              onClick={() => setUser("user")}
            />
            <Radiobtn
              name="role-select"
              role="NGO"
              value={user}
              onClick={() => setUser("ngo")}
            />
          </div>
        </form>
        {user === "user" && <UserSignup />}
        {user === "ngo" && <NgoSignup />}
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <FormFooter statement="Already have an account ? " link="Log in" />
        </Link>
        {/* <Outlet /> */}
      </div>
      <SideImage />
    </>
  );
}

export default Signup;
