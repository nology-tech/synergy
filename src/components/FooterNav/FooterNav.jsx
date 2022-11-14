import React from "react";
import "./FooterNav.scss";
import logo from "../../assets/images/synergy_main_logo.png";
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
          <Link to="/home" className="footernav__link navHome">
            Home
          </Link>
          <Link to="/features" className="footernav__link navFeatures">
            Features
          </Link>
          <Link to="/about" className="footernav__link navAbout">
            About
          </Link>
          <Link to="/contact" className="footernav__link navContact">
            Contact Us
          </Link>
        </div>
        <div className="footernav__signin">
          <Link to="/signup" className="signup" value="Sign Up">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
