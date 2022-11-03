import React from "react";
import "./HeaderNav.scss";
import logo from "../../assets/images/Main_Logo.png";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  let mainLogo = logo;
  return (
    <div className="nav">
      <div className="topnav">
        <div className="topnav__menu">
          <img className="topnav__appicon" src={mainLogo} alt="Synergy-icon" />
        </div>
        <div className="topnav__centerlinks">
          <a href="#" className="topnav__link navHome">
            Home
          </a>
          <a href="#" className="topnav__link navFeatures">
            Features
          </a>
          <a href="#" className="topnav__link navAbout">
            About
          </a>
          <a href="#" className="topnav__link navContact">
            Contact Us
          </a>
        </div>
        <div className="topnav__signin">
          <Link to="/signin" className="signin" value="Sign In">
            Sign In
          </Link>
          <Link to="/signup" className="signup" value="Sign Up">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
