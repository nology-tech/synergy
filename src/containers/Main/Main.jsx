import { useState } from "react";
import React from 'react';
import LandingNav from "../LandingNav/LandingNav";
import UserDashboard from "../UserDashboard/UserDashboard";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';


const Main = () => {
    const[signUp, setSignUp]= useState("Home");
    const [logged, setLogin] = useState(false);

    const toggleLogin = () => {
        setLogin(!logged);
    };

    const updateSignIn=(event)=> {
      setSignUp(event.target.getAttribute("value"));
      console.log(signUp);
    };
    
    const logOut=()=>{
      setSignUp("Home");
      toggleLogin();
    }
  
  return (
    <div>
        {signUp=="Home"  && <LandingNav  handleSelection={updateSignIn}/>}
        {(!logged && signUp=="Sign In") && <SignIn handleLogin={toggleLogin}/>}
        {(!logged && signUp=="Sign Up") && <SignUp handleLogin={toggleLogin}/>}
        {/* {signUp=="Login"  && <LandingNav  handleSelection={updateSignIn}/>} */}

        {logged && <UserDashboard handleLogout={logOut}/>}
    </div>
  )
}

export default Main