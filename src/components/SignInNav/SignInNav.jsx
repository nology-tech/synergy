import React from "react";
import "./SignInNav.scss";
import logo from "../../assets/images/Main_Logo.png";

const SignInNav = (props) => {
  const { title, handleLogin} = props;
  let mainLogo = logo;
  return (
    <div>
      <div className="nav">
        <div className="topnav">
          <div className="topnav__menu">
            <img
              className="topnav__appicon"
              src={mainLogo}
              alt="Synergy-icon"
            />
          </div>
          <div className="topnav__signin">
            <a href="#" className="signup" onClick={handleLogin}>
              {title}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInNav;
