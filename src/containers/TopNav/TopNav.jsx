import { useState } from "react";
import React from "react";
import "./TopNav.scss";
import NavMenu from "../../components/NavMenu/NavMenu";

const TopNav = () => {
  const [showNav, setShowNav] = useState(true);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="nav">
      <div className="topnav">
        <div className="topnav__menu"> 
          <img className="topnav__appicon" src="" alt="Synergy-icon" onClick={toggleNav} />
          <a href="#" onClick={toggleNav}>Synergy</a>
        </div>
        <div className="topnav__centerlinks">
          <p>Home</p>
          <p>Features</p>
          <p>About</p>
          <p>Contact Us</p>
        </div>
        <div className="topnav__signin">
          <p>Sign In</p>
          <p>SignUp</p>
        </div>
      </div>
      {showNav && <NavMenu title="Synergy"/>}
    </div>
  );
};

export default TopNav;
