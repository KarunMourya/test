import Profile from "../../pages/Profile/Profile";
import style from "./Layout.module.css";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate } from "react-router-dom";
const MainPage = (props) => {
  const isLog = true;
  console.log(isLog);
  return isLog ? (
    <div className={style.back}>
      <div className={style.sidebar}>
        <Sidebar />
      </div>
      <div className={style.layoutContentMain}>
        <div className={style.centeralcontainer}>{props.children}</div>
        <div className={style.profilecontainer}>
          <Profile />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
};
export default MainPage;
