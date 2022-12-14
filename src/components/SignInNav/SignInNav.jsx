import React from "react";
// import "./SignInNav.scss";
import logo from "../../assets/images/synergy_main_logo.png";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

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
              <Link to="/signup" className="signup" value="Sign Up">
                <Button buttonStyle={"btn button-blue"} buttonText={title} />
              </Link>
            
            )}
            {title === "Login" && (
              <Link to="/signin" className="signup">
              <Button buttonStyle={"btn button-blue"} buttonText={title} />
              </Link>
            
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInNav;
