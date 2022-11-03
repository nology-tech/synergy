import React from "react";
import LoginFlow from "../LoginFlow/LoginFlow";

const LoginFlowWelcome = () => {
  return (
    <LoginFlow
      loginFlow_header="Welcome Back!"
      inputBox_email="Email"
      inputBox_psw="Password"
          buttonText="Login"
    />

    // <LoginFlow
    //   loginFlow_header="Change your password"
    //   inputBox_psw="New Password "
    //   inputBox_confirmpsw="Confirm Password"
    //   buttonText="Reset"
    //  />
  );
};

export default LoginFlowWelcome;
