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
  );
};

export default LoginFlowWelcome;
