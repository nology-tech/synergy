import { useState } from "react";
import React from 'react';
import LandingNav from "../LandingNav/LandingNav";
import UserDashboard from "../UserDashboard/UserDashboard";


const Main = () => {
    const [logged, setLogin] = useState(false);

    const toggleLogin = () => {
        setLogin(!logged);
    };
  return (
    <div>
        {!logged && <LandingNav handleLogin={toggleLogin} />}
        {logged && <UserDashboard handleLogin={toggleLogin}/>}
    </div>
  )
}

export default Main