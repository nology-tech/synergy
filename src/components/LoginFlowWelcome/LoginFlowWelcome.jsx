import React from "react";
import LoginFlow from "../LoginFlow/LoginFlow";

const LoginFlowWelcome = () => {
  return (
    // <LoginFlow
    //   loginFlow_header="Welcome Back!"
    //   inputBox_email="Email"
    //   inputBox_psw="Password"
    // />

    <LoginFlow
      loginFlow_header="Change your password"
      inputBox_email="New Password "
      inputBox_psw="Confirm Password"
     />
  );
};

export default LoginFlowWelcome;
