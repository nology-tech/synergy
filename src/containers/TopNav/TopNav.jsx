import { useState } from "react";
import React from "react";
import "./TopNav.scss";
import NavMenu from "../NavMenu/NavMenu";

const TopNav = () => {
  const [showNav, setShowNav] = useState(true);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="topnav">
      {showNav && <NavMenu title="Synergy" toggleNav={toggleNav} />}

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
  );
};

export default TopNav;
