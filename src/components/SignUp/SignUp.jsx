import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'

import "./SignUp.scss"
import { faEye} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [ConfirmedPasswordType, setConfirmedPasswordType] = useState("password");

  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validConfirmedPassword, setValidConfirmedPassword] = useState(false);

    // Handling the email change
  const handleEmail = (e) => {
    e.preventDefault();
    const tempEmail = e.target.value.toString();
    console.log(tempEmail);
    setEmail(tempEmail);
    validateEmail(tempEmail)?setValidEmail(true):setValidEmail(false);      
  };

  // Handling the password change
  const handlePassword = (e) => {
    e.preventDefault();
    const pass = e.target.value.toString();
    setPassword(pass);
    validatePassword(pass)?setValidPassword(true):setValidPassword(false);
    console.log(pass);
    
  };

  // Handling the confirmed password change
  const handleConfirmedPassword = (e) => {
    e.preventDefault();
    const confPass = e.target.value.toString();
    setConfirmedPassword(confPass);
    validateConfirmedPassword(confPass)?setValidConfirmedPassword(true):setValidConfirmedPassword(false);
    console.log(confPass);
  };

  const validateEmail = (email) => {
    return email.toString().includes("@");
    
  }
  const validatePassword = (password) => {
    const uppercaseRegExp   = /(?=.*?[A-Z])/
    console.log(uppercaseRegExp.test(password));
    return password.length>=8 && uppercaseRegExp.test(password);      
  }

  const validateConfirmedPassword = (pass) => {
    return pass === password;      
  }

  const togglePassword = (e) => {
    passwordType ==="password"?setPasswordType("text"):setPasswordType("password"); 
  }

  const toggleConfirmedPassword = (e) => {
    ConfirmedPasswordType ==="password"?setConfirmedPasswordType("text"):setConfirmedPasswordType("password"); 
  }

  return (
    <div className='form-container'>
    <div className='form'>
      <div className='signup-header'>
        <h3>Synergy logo goes here</h3>
      </div>
      <div>
        <h1 className="createAccount">Create an Account</h1>
        <p className="ipsum">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form className="SignUpForm">
          {/* Labels and inputs for form data */}
          <div className="SignUpForm__div">
            <label className="label">Email</label>
            <input onChange={handleEmail} className="input" value={email} type="text" /> 
            {validEmail?<p className='valid'>Successful email entered</p>:<p className='invalid'>Error - Your email must contain an @ symbol</p>}             
          </div>
          
             
          <div className="SignUpForm__password SignUpForm__div">
            <label className="label">Password</label>
            <div className="password">
                <input onInput={handlePassword} className="input" value={password} type={passwordType} />
                <FontAwesomeIcon icon={faEye} className="fontAwesome_icon" onClick = {togglePassword}/>
            </div>
            {validPassword?<p className='valid'>Password meets requirements</p>:<p className='invalid'>Error - password must contain at least 8 characters & one uppercase letter</p>} 
          </div>
          
          <div className="SignUpForm__confirmedPassword SignUpForm__div">
            <label className="label">Confirm Password</label>
            <div className="password">
                <input onChange={handleConfirmedPassword} className="input" value={confirmedPassword} type={ConfirmedPasswordType} />
                <FontAwesomeIcon icon={faEye} className="fontAwesome_icon" onClick = {toggleConfirmedPassword}/>
            </div>            
            {validConfirmedPassword?<p className='valid'>Passwords match</p>:<p className='invalid'>Error - passwords do not match!</p>} 
          </div>  
          
          <div className='SignUpForm__hasAccount'>
            <p className="SignUpForm__hasAccount__question">Already have an account? 
            <span><a className="SignUpForm__hasAccount__login" href="#">Login</a></span>
            </p>
          </div>
          
          
        <Link to="/bankdetails">
          <button className="SignUpForm__btn" type="submit" disabled={!(validEmail && validPassword && validConfirmedPassword)}>
            Continue
          </button>
        </Link>
      </form>
      </div>
  
    </div>
    </div>
  )
}

export default SignUp