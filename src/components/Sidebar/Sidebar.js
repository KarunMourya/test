import React from "react";
import { Link } from "react-router-dom";
import style from  "./Sidebar.module.css";
import LogoutIcon from '@mui/icons-material/Logout';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HistoryIcon from '@mui/icons-material/History';
import DashboardIcon from '@mui/icons-material/Dashboard';
import logo from '../logo/Img/logo.svg';
const SidebarItems = [
  {
    "displayName": "Dashboard",
    "route": "/dashboard",
    "icons": <DashboardIcon className={style.ico}/>
  },
  {
    "displayName": "History",
    "route": "/history",
    "icons": <HistoryIcon className={style.ico}/>
  },
  {
    "displayName": "Support",
    "route": "/Support",
    "icons": <SupportAgentIcon className={style.ico}/>
  }
]

const SidebarItem = (props) => {
  const active = props.active ? "active" : "";
  return (
      <div className={`${style.SidebarItemInner} ${active}`}>
        <div>
        <span>{props.icons}</span>
        </div>
        <div>
        <span className={style.title}>{props.title}</span>
        </div>
      </div>
  );
};

const Sidebar = () => { 
  const activeItem = SidebarItems.findIndex(
    (item) => item.route === window.location.pathname
  );

  return (
    <div className={style.sidebar}>
      <div className={style.logoArea}>
      <div>
      <img src={logo} alt="logo" className={style.img}/>
      </div>
        <div className={style.sidebarTitle}>
            <h2>FORAGE</h2>
        </div>
      </div>
      <div className={style.sidebarItem}>
      {SidebarItems.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItem
            title={item.displayName}
            icons={item.icons}
            active={index === activeItem}
          />
        </Link>
      ))}
      {<>
        <Link to="/profile" className={style.visible}>
        <div className={`${style.SidebarItemInner}`}>
        <div>
        <span><SupportAgentIcon className={style.ico}/></span>
        </div>
        <div>
        <span className={style.title}>Profile</span>
        </div>
      </div>
        </Link>
        <Link to="/logout">
        <div className={`${style.SidebarItemInner}`}>
        <div>
        <span><LogoutIcon className={style.ico}/></span>
        </div>
        <div>
        <span className={style.title}>Logout</span>
        </div>
      </div>
        </Link>
      </>

      }
      </div>
    </div>
  );
};

export default Sidebar;
