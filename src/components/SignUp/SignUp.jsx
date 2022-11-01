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

    // Handling the email change
  const handleEmail = (e) => {
    e.preventDefault();
    const tempEmail = e.target.value;
    setEmail(tempEmail);
    console.log(email);    
  };

  // Handling the password change
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    console.log(password);
    
  };

  // Handling the confirmed password change
  const handleConfirmedPassword = (e) => {
    e.preventDefault();
    setConfirmedPassword(e.target.value);
    console.log(confirmedPassword);
  };

  const validateEmail = (email) => {
    email.includes("@");
    console.log(email);
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
            <input onChange={handleEmail} className="input" value={email} type="text" />
          </div>
          
          {/* {!validateEmail?<p>true</p>:<p>false</p>}   */}
          <div className="SignUpForm__password SignUpForm__div">
            <label className="label">Password</label>
            <div className="password">
                <input onChange={handlePassword} className="input" value={password} type={passwordType} />
                <FontAwesomeIcon icon={faEye} className="fontAwesome_icon" onClick = {togglePassword}/>
            </div>
            
          </div>
          
          <div className="SignUpForm__confirmedPassword SignUpForm__div">
            <label className="label">Confirm Password</label>
            <input onChange={handleConfirmedPassword} className="input" value={confirmedPassword} type="password" />
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