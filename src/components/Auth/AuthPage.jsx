import React from "react";
import { Routes, Route } from "react-router-dom";
import SideImage from "../sideImage/SideImage";
import Login from "./Login";
import style from "./AuthPageStyle.module.css";
import Forgot from "../Forget/Forgot";
import EmailSent from "../emailSent/EmailSent";
import MainPage from "../Layout/MainPage";
import Signup from "./Signup";
import Error404 from "../error404/Error404";
import Support from "../../pages/Support/Support";
import History from "../../pages/History/History";
import Profile from "../../pages/Profile/Profile";
import View from "../../pages/View/View";
import { isMobile } from "react-device-detect";
import Dashboard from "../../pages/Dashboard/Dashboard";
function AuthPage() {
  return (
    <div className={style.mainpage}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Login />} />
        <Route
          path="/dashboard"
          element={<MainPage children={<Dashboard />} />}
        />
        <Route path="/history" element={<MainPage children={<History />} />} />
        <Route path="/Support" element={<MainPage children={<Support />} />} />
        <Route path="/view" element={<MainPage children={<View />} />} />
        {isMobile && (
          <Route
            path="/profile"
            element={<MainPage children={<Profile />} />}
          />
        )}
        <Route path="/forgotpassword" element={<Forgot />} />
        <Route path="/emailsent" element={<EmailSent />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default AuthPage;
