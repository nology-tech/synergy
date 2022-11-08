import React from "react";
import SignInNav from "../../components/SignInNav/SignInNav";
import "../SignIn/SignIn.scss";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="signin__page">
      <SignInNav title="Sign Up" />
      <div className="signin__container">
        Sign In Section goes here...
        <Link to="/dashboard" className="login_link">
          <button className="login__button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
