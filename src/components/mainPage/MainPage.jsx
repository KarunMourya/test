import Sidebar from '../Sidebar/Sidebar';
// import style from './mainPage.module.css';
import AuthPage from '../authPage/AuthPage';
import { BrowserRouter,Route } from 'react-router-dom';
function MainPage(){
    return(
        // <div className={style.mainPage}>
    <BrowserRouter>
      <Route
        render={(props) => (
          <div>
            <div>
              <Sidebar {...props} />
              <div >
                <div >
                  <BrowserRouter><AuthPage/></BrowserRouter>
                  
                </div>
              </div>
          </div>
          </div>
        )}
      />
    </BrowserRouter>
        // </div>
    )
}
export default MainPage;
/*
import React from "react";
import style from "./Layout.module.css";
import Sidebar from "../Sidebar/Sidebar";
import NavRoutes from "../NavRoutes";
import SideRoute from "../SideRoute";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "../../pages/Profile/Profile";
import CardProfile from "../../pages/Edit/Edit";
import Post from "../../pages/Post/Post";
const Layout = () => {
  // console.log(window.location.pathname)
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div>
            <div>
              <Sidebar {...props} />
              <div className={style.layoutContentMain}>
                <div className={style.centeralcontainer}>
                  <NavRoutes />
                </div>
              </div>
          </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;

*/