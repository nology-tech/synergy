import React from "react";
import LoginFlow from "../LoginFlow/LoginFlow";


const ForgottenPassword = () => {
  return (
            <LoginFlow
              loginFlow_header="Forgotten your password"
              inputBox_email="Email Address"
              buttonText="Send"
            />
  );
};

export default ForgottenPassword;
