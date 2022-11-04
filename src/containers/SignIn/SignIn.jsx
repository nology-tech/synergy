import React from "react";
import SignInNav from "../../components/SignInNav/SignInNav";
import "../SignIn/SignIn.scss";

const SignIn = () => {
  return (
    <div className="signin__page">
      <SignInNav title="Sign Up" />
      <div className="signin__container">Sign In Section</div>
    </div>
  );
};

export default SignIn;
