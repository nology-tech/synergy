import React from "react";
import LoginFlow from "../../containers/LoginFlow/LoginFlow";

const LoginFlowChangePsw = () => {
  return (
    <LoginFlow
      loginFlow_header="Change Password"
      inputBox_psw="New Password"
      inputBox_email="Email"
      inputBox_confirmpsw="Confirm Password"
      buttonText="Reset"
    />
  );
};

export default LoginFlowChangePsw;
