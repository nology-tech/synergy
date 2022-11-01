import { useState } from "react";
import React from "react";
import "./TopNav.scss";
import NavMenu from "../../components/NavMenu/NavMenu";
import logo from "../../assets/images/Main_Logo.png"

const TopNav = () => {
  const [showNav, setShowNav] = useState(true);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  let mainLogo= logo;

  return (
    <div className="nav">
      <div className="topnav">
        <div className="topnav__menu"> 
          <img className="topnav__appicon" src={mainLogo} alt="Synergy-icon" onClick={toggleNav} />
  
        </div>
        <div className="topnav__centerlinks">
          <a href="#" className="topnav__link navHome">Home</a>
          <a href="#" className="topnav__link navFeatures">Features</a>
          <a href="#" className="topnav__link navAbout">About</a>
          <a href="#" className="topnav__link navContact">Contact Us</a>
        </div>
        <div className="topnav__signin">
          <a href ="#" className="signin">Sign In</a>
          <a href ="#" className="signup">SignUp</a>
        </div>
      </div>
      {showNav && <NavMenu title="Synergy"/>}
    </div>
  );
};

export default TopNav;
