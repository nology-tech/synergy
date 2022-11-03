import React from "react";
import "./UserDashboard.scss";
import logo from "../../assets/images/Main_Logo.png";
import NavMenu from "../../components/NavMenu/NavMenu";

const UserDashboard = (props) => {
  const { handleLogout } = props;
  let mainLogo = logo;
  return (
    <div className="userdashboard">
      <div className="userdashboard_menu">
        <img src={mainLogo} alt="Synergy-icon" />
        <NavMenu handleLogout={handleLogout} />
      </div>
      <div className="userdashboard_main">
        <div className="userdashboard_main_top">
          <input type="text" name="test" id="" value="Search" />
          <a href="#" className="signin">
            Samanth Brooks
          </a>
        </div>
        <div>Main Section</div>
      </div>
    </div>
  );
};

export default UserDashboard;
