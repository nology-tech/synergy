import { useState } from "react";
import React from "react";
import "./FooterNav.scss";
import NavMenu from "../NavMenu/NavMenu";
import logo from "../../assets/images/Main_Logo.png"

const FooterNav = (props) => {
  const {title,handleLogin, handleSelection} = props;
  let mainLogo= logo;

  return (
    <div className="nav">
      <div className="footernav">
        <div className="footernav__menu"> 
          <img className="footernav__appicon" src={mainLogo} alt="Synergy-icon"/>
  
        </div>
        <div className="footernav__centerlinks">
          <a href="#" className="footernav__link navHome">Home</a>
          <a href="#" className="footernav__link navFeatures">Features</a>
          <a href="#" className="footernav__link navAbout">About</a>
          <a href="#" className="footernav__link navContact">Contact Us</a>
        </div>
        <div className="footernav__signin">
          {/* <a href ="#" className="signup">SignUp</a> */}
          <a href ="#" className="signup" onClick={handleSelection} value="Sign Up">Sign Up</a>
          

        </div>
      </div>
    </div>
  );
};

export default FooterNav;
