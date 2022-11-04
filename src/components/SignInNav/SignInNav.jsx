import React from "react";
import "./SignInNav.scss";
import logo from "../../assets/images/Main_Logo.png";
import { Link } from "react-router-dom";

const SignInNav = (props) => {
  const { title } = props;
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
            {title === "Sign Up" && (
              <Link to="/signup" className="signup">
                {title}
              </Link>
            )}
            {title === "Login" && (
              <Link to="/signin" className="signup">
                {title}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInNav;
