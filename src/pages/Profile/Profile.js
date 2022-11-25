import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import demo from "./logo192.png";
import style from "./Profile.module.css";
import { useEffect, useState } from "react";
import Edit from "../../pages/Edit/Edit";
import Post from "../../pages/Post/Post";
import EditIcon from "@mui/icons-material/Edit";
import Notification from "../Notification/Notification";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import { useNavigate } from "react-router-dom";
function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <Profile />;
    case 1:
      return <Edit />;
    case 2:
      return <Post />;
    case 3:
      return <Notification />;
    default:
      <div>Not Found</div>;
  }
}

const Profile = () => {
  const navigate = useNavigate();
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data = await res.json();
      console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };
  useEffect(() => {
    // callAboutPage();
  }, []);
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div className={style.profile}>
      {activeStep === 0 ? (
        <div className={style.profilecontainer}>
          <div className={style.infosection}>
            <div className={style.new}>
              <img className={style.imgsection} src={demo} alt="not found" />
              <p className={style.namesection}>Karun Mourya</p>
            </div>
          </div>
          <div className={style.karma}>
            <div className={style.karmagap}>
              <p>Karma Count</p>
              <p>3</p>
            </div>
            <div className={style.karmagap}>
              <p>Acc. Status</p>
              <p>Activated</p>
            </div>
          </div>
          <div className={style.linkcontainer}>
            <div className={style.setting}>
              <button className={style.join} onClick={() => setActiveStep(1)}>
                <SettingsApplicationsIcon style={{ fontSize: 24 }} />
                <p>Account Setting</p>
              </button>
            </div>
            <div className={style.notify}>
              <button className={style.join} onClick={() => setActiveStep(3)}>
                <NotificationsActiveIcon style={{ fontSize: 24 }} />
                <p>Notifications</p>
              </button>
            </div>
            <div className={style.post}>
              <div className={style.desci}>
                <h2>Create Your Post</h2>
              </div>
              <div className={style.btn}>
                <button
                  className={style.edit}
                  type="submit"
                  onClick={() => setActiveStep(2)}
                >
                  <EditIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.Back}>
          <div className={style.title}>
            <button onClick={() => setActiveStep(0)}>
              <ChevronLeftIcon />
            </button>
            {activeStep === 1 && <p>Account Settings</p>}
            {activeStep === 3 && <p>Notifications</p>}
            {activeStep === 2 && <p>Post</p>}
          </div>
          {_renderStepContent(activeStep)}
        </div>
      )}
    </div>
  );
};
export default Profile;
