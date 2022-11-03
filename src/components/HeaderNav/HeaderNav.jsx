import React from "react";
import "./HeaderNav.scss";
import logo from "../../assets/images/Main_Logo.png";

const HeaderNav = (props) => {
  const { title, handleLogin, handleSelection } = props;
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
          <a
            href="#"
            className="signin"
            onClick={handleSelection}
            value="Sign In"
          >
            Sign In
          </a>
          <a
            href="#"
            className="signup"
            onClick={handleSelection}
            value="Sign Up"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;