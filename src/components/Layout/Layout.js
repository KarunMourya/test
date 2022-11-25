import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthPage from "../Auth/AuthPage";
const Layout = () => {
  const isLogin = false;
  console.log(isLogin);
  return (
    <BrowserRouter>
      <AuthPage />
    </BrowserRouter>
  );
};

export default Layout;
