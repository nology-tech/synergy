import React from "react";
import LandingNav from "../LandingNav/LandingNav";
import UserDashboard from "../UserDashboard/UserDashboard";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const Main = (props) => {
  const { signUp, logged, handleSelection, handleLogin, handleLogout } = props;

  return (
    <div>
      {signUp == "Home" && <LandingNav handleSelection={handleSelection} />}
      {!logged && signUp == "Sign In" && <SignIn handleLogin={handleLogin} />}
      {!logged && signUp == "Sign Up" && <SignUp handleLogin={handleLogin} />}
      {logged && <UserDashboard handleLogout={handleLogout} />}
    </div>
  );
};

export default Main;
