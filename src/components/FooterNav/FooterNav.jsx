import React from "react";
import "./FooterNav.scss";
import logo from "../../assets/images/Main_Logo.png";
import { Link } from "react-router-dom";

const FooterNav = () => {
  let mainLogo = logo;

  return (
    <div className="nav">
      <div className="footernav">
        <div className="footernav__menu">
          <img
            className="footernav__appicon"
            src={mainLogo}
            alt="Synergy-icon"
          />
        </div>
        <div className="footernav__centerlinks">
          <a href="#" className="footernav__link navHome">
            Home
          </a>
          <a href="#" className="footernav__link navFeatures">
            Features
          </a>
          <a href="#" className="footernav__link navAbout">
            About
          </a>
          <a href="#" className="footernav__link navContact">
            Contact Us
          </a>
        </div>
        <div className="footernav__signin">
          {/* <a href ="#" className="signup">SignUp</a> */}
          <Link to="/signup" className="signup" value="Sign Up">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
