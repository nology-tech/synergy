import React from 'react'
import "./DashboardHeader.scss"
import clarity from "../../assets/images/clarity_search-line.png";
import profile from "../../assets/images/Ellipse.png";
import chevron from "../../assets/images/charm_chevron-down.png";
import { Link } from "react-router-dom";


const DashboardHeader = (props) => {
    const {searchTerm, handleInput} = props;


    const searchImg = clarity;
    let profileImg = profile;
    let profileName = "Samantha Brooks";
    const downImg = chevron;

  return (
    <div className="dashboardheader">
    <div className="searchbox">
      <img src={searchImg} alt="Search" />
      <input
        type="text"
        name="test"
        id="search"
        value={searchTerm}
        onInput={handleInput}
        placeHolder="Search..."
      />
    </div>
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