import React from 'react'
import './SignInNav.scss'
import logo from "../../assets/images/Main_Logo.png"

const SignInNav = (props) => {
    const {title, handleLogin}=props
    let mainLogo=logo;
  return (
    <div>
       <img className="topnav__appicon" src={mainLogo} alt="Synergy-icon"/>
       <a href ="#" className="signin" onClick={handleLogin} >{title}</a>
    </div>
  )
}

export default SignInNav