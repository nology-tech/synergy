import React from 'react'
import './SignUpNav.scss'
import logo from "../../assets/images/Main_Logo.png"

const SignUpNav = (props) => {
    const {title, handleLogin, handleSelection}=props
    let mainLogo=logo;
  return (
    <div>
      <div className="nav">
        <div className="topnav">
          <div className="topnav__menu"> 
            <img className="topnav__appicon" src={mainLogo} alt="Synergy-icon"/>
          </div>
          <div className="topnav__signin">
            {/* <a href ="#" className="signup" onClick={handleLogin}>{title}</a> */}
            <a href ="#" className="signup" onClick={handleSelection} value="Sign Up">Login</a>
            {console.log (handleSelection)}
            {console.log (handleLogin)}
            {console.log (title)}
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default SignUpNav