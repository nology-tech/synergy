import React from "react";
import LoginFlow from "../../containers/LoginFlow/LoginFlow";


const LoginFlowWelcome = (props) => {
  const {handleLoginByEmail, username, setUserName, userID, setUserID,accountNum, setAccountNum, setAccountBalance, accountBalance} = props;
  return (
    
    <LoginFlow
      loginFlow_header="Welcome Back!"
      inputBox_email="Email"
      inputBox_psw="Password"
      buttonText="Login"
      //handleLoginByEmail={handleLoginByEmail}
      username={username} 
      setUserName={setUserName}
      userID={userID}
      setUserID={setUserID}
      accountNum={accountNum} 
      setAccountNum={setAccountNum}
      accountBalance={accountBalance} 
      setAccountBalance={setAccountBalance}
    />
  );
};

export default LoginFlowWelcome;
