import React from "react";
import LoginFlow from "../LoginFlow/LoginFlow";

const LoginFlowWelcome = () => {
  return (
    <LoginFlow
      loginFlow_header="Welcome Back!"
      inputBox_psw="Password"
      inputBox_email="Email"
    />
  );
};

export default LoginFlowWelcome;
