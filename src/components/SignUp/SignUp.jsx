import React from 'react';
import { useState } from 'react';
import "./SignUp.scss"
import { faEye, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validConfirmedPassword, setValidConfirmedPassword] = useState(false);

    // Handling the email change
  const handleEmail = (e) => {
    e.preventDefault();
    const tempEmail = e.target.value;
    setEmail(tempEmail);
    console.log("Email: " + email);
    validateEmail(email)?setValidEmail(true):setValidEmail(false);      
  };

  // Handling the password change
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    validatePassword(password)?setValidPassword(true):setValidPassword(false);
    console.log(password);
    
  };

  // Handling the confirmed password change
  const handleConfirmedPassword = (e) => {
    e.preventDefault();
    setConfirmedPassword(e.target.value);
    validateConfirmedPassword(confirmedPassword)?setValidConfirmedPassword(true):setValidConfirmedPassword(false);      
    console.log("Confirmed passwords match: " + validConfirmedPassword);
  };

  const validateEmail = (email) => {
    return email.toString().includes("@");
    
  }

  const validatePassword = (password) => {
    const uppercaseRegExp   = /(?=.*?[A-Z])/
    console.log(uppercaseRegExp.test(password));
    return password.toString().length>=8 && uppercaseRegExp.test(password);      
  }

  const validateConfirmedPassword = (confirmedPassword) => {
    return confirmedPassword == password;      
  }

  const togglePassword = (e) => {
    passwordType =="password"?setPasswordType("text"):setPasswordType("password"); 
  }

  return (
    <div className='signup-form'>
      <div className='signup-header'>
        <h3>Synergy logo goes here</h3>
      </div>
      <div>
        <h1 className="createAccount">Create an Account</h1>
        <p className="ipsum">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form className="SignUpForm">
          {/* Labels and inputs for form data */}
          <div className="SignUpForm__email SignUpForm__div">
            <label className="label">Email</label>
            <input onInput={handleEmail} className="input" value={email} type="text" /> 
            {validEmail?<p>Successful email entered</p>:<p>Error - Your email must contain an @ symbol</p>}             
          </div>
          
          {/* {validEmail?<p>true</p>:<p>false</p>}   */}
          
          <div className="SignUpForm__password SignUpForm__div">
            <label className="label">Password</label>
            <div className="password">
                <input onInput={handlePassword} className="input" value={password} type={passwordType} />
                <FontAwesomeIcon icon={faEye} className="fontAwesome_icon" onClick = {togglePassword}/>
            </div>
            {validPassword?<p>Password meets requirements</p>:<p>Error - password must contain at least 8 characters & one uppercase letter</p>} 
          </div>
          
          <div className="SignUpForm__confirmedPassword SignUpForm__div">
            <label className="label">Confirm Password</label>
            <input onChange={handleConfirmedPassword} className="input" value={confirmedPassword} type="password" />
            <FontAwesomeIcon icon={faEye} className="fontAwesome_icon" onClick = {togglePassword}/>
            {validConfirmedPassword?<p>Passwords match</p>:<p>Error - passwords do not match!</p>}
          </div>  
          
          <div className='SignUpForm__hasAccount'>
            <p className="SignUpForm__hasAccount__question">Already have an account? 
            <span><a className="SignUpForm__hasAccount__login" href="#">Login</a></span>
            </p>
          </div>
          
          <button onSubmit={validateEmail} className="SignUpForm__btn" type="submit">
            Continue
          </button>
      </form>
      </div>
  
    </div>
  )
}

export default SignUp