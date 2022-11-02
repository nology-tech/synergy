import { useState } from "react";
import React from 'react';
import LandingNav from "../LandingNav/LandingNav";
import UserDashboard from "../UserDashboard/UserDashboard";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";


const Main = () => {
    const[signUp, setSignUp]= useState("Home");
    const [logged, setLogin] = useState(false);

    const toggleLogin = () => {
        setLogin(!logged);
    };

    const updateSignIn=(event)=> {
      setSignUp(event.target.getAttribute("value"));
    };
    
    const logOut=()=>{
      setSignUp("Home");
      toggleLogin();
    }
  
  return (
    <div>
        {signUp=="Home"  && <LandingNav  handleSelection={updateSignIn}/>}
        {(!logged && signUp=="Sign In") && <SignIn handleLogin={toggleLogin}/>}
        {(!logged && signUp=="SignUp") && <SignUp handleLogin={toggleLogin}/>}
        {logged && <UserDashboard handleLogout={logOut}/>}
    </div>
  )
}

export default Main