import React from 'react'
import "./DashboardHeader.scss"
import profile from "../../assets/images/Ellipse.png";
import chevron from "../../assets/images/charm_chevron-down.png";
import { Link } from "react-router-dom";


const DashboardHeader = (props) => {
  const {username}=props;
    
    let profileImg = profile;
    let profileName = username;
    const downImg = chevron;
    // console.log (profileName);

  return (
    <div className="dashboardheader">
    <div className="user">
      <Link to="/userprofile" className="signin">
        {profileName}
      </Link>
      <img src={profileImg} alt="profile-icon" />
      <img src={downImg} alt="Drop-down Image" />
    </div>
  </div>
  )
}

export default DashboardHeader