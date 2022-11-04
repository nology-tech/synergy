import React from "react";
import "./UserDashboard.scss";
import logo from "../../assets/images/Main_Logo.png";
import NavMenu from "../../components/NavMenu/NavMenu";
import clarity from "../../assets/images/clarity_search-line.png";
import profile from "../../assets/images/Ellipse.png";
import chevron from "../../assets/images/charm_chevron-down.png";

const UserDashboard = () => {
  let mainLogo = logo;
  const searchImg = clarity;
  let profileImg = profile;
  let profileName = "Samantha Brooks";
  const downImg = chevron;

  return (
    <div className="userdashboard">
      <div className="userdashboard_menu">
        <img src={mainLogo} alt="Synergy-icon" />
        <NavMenu />
      </div>
      <div className="userdashboard_main">
        <div className="userdashboard_main_top">
          <div className = "searchbox"><img src={searchImg} alt="Search" />
            <input type="text" name="test"  id="search" value="Search..." />
          </div>
          <div className="user">
            <a href="#" className="signin">
              {profileName}
            </a>
            <img src={profileImg} alt="profile-icon" />
            <img src={downImg} alt="Drop-down Image" />
          </div>
        </div>
        <div className="signin__container">Main Contents go here based on menu selection...</div>
      </div>
    </div>
  );
};

export default UserDashboard;
