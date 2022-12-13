import React from "react";
import LoginFlow from "../../containers/LoginFlow/LoginFlow";


const LoginFlowWelcome = (props) => {
  const {handleLoginByEmail, username, setUserName} = props;
  return (
    
    <LoginFlow
      loginFlow_header="Welcome Back!"
      inputBox_email="Email"
      inputBox_psw="Password"
      buttonText="Login"
      handleLoginByEmail={handleLoginByEmail}
      username={username} 
      setUserName={setUserName}
    />
  );
};

export default LoginFlowWelcome;
