import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

import "./CreateAccount.scss";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import synergyLogo from "../../assets/images/synergy_logo.png";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [ConfirmedPasswordType, setConfirmedPasswordType] = useState("password");

  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validConfirmedPassword, setValidConfirmedPassword] = useState(false);

  // Handling the email input field change
  const handleEmail = (e) => {
    e.preventDefault();
    const tempEmail = e.target.value.toString();
    setEmail(tempEmail);
    // calls the validateEmail function and sets the boolean flag
    validateEmail(tempEmail) ? setValidEmail(true) : setValidEmail(false);
  };

  // Handling the password input field change
  const handlePassword = (e) => {
    e.preventDefault();
    const pass = e.target.value.toString();
    setPassword(pass);
    // calls the validatePassword function and sets the boolean flag
    validatePassword(pass) ? setValidPassword(true) : setValidPassword(false);
  };

  // Handling the confirmed password input field change
  const handleConfirmedPassword = (e) => {
    e.preventDefault();
    const confPass = e.target.value.toString();
    setConfirmedPassword(confPass);
    validateConfirmedPassword(confPass)
      ? setValidConfirmedPassword(true)
      : setValidConfirmedPassword(false);
  };

  // validates whether the email address contains @
  const validateEmail = (email) => {
    return email.toString().includes("@");
  };

  // validates whether the password contains 8 chars and 1 uppercase letter
  const validatePassword = (password) => {
    const uppercaseRegExp = /(?=.*?[A-Z])/;
    // .test tests to see if the regex is in the password
    return password.length >= 8 && uppercaseRegExp.test(password);
  };

  // validates the confirmed password field is equal to the previous password
  const validateConfirmedPassword = (pass) => {
    return pass === password;
  };

  // toggles whether or not the password is hidden (password) or visible (text)
  const togglePassword = (e) => {
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };

  // toggles whether or not the password is hidden (password) or visible (text)
  const toggleConfirmedPassword = (e) => {
    ConfirmedPasswordType === "password"
      ? setConfirmedPasswordType("text")
      : setConfirmedPasswordType("password");
  };

  return (
    <div className="CreateAccount">
      <div className="form">
        <div className="CreateAccount-header">
          <img src={synergyLogo} />
        </div>
        <div>
          <h1>Create an Account</h1>
          <p className="ipsum">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <form className="CreateAccountForm">
            {/* Labels and inputs for form data */}
            <div className="CreateAccountForm__div">
              <label>Email</label>
              <input
                onChange={handleEmail}
                className="input"
                value={email}
                type="text"
              />
             {email === ""?<p></p>:validEmail ? (
                <p className="valid"> &#x1F5F9; Successful email entered</p>
              ) : (
                <p className="invalid"> &#128712; Error - Your email must contain an @ symbol
                </p>
              )}
            </div>

            <div className="CreateAccountForm__div">
              <label>Password</label>
              <div>
                <input
                  onInput={handlePassword}
                  className="input"
                  value={password}
                  type={passwordType}
                />
                <FontAwesomeIcon
                  icon={faEye}
                  className="fontAwesome_icon"
                  onClick={togglePassword}
                />
              </div>
              {password === ""?<p></p>:validPassword ? (
                <p className="valid">&#x1F5F9; Password meets requirements</p>
              ) : (
                <p className="invalid">
                  &#128712; Error - password must contain at least 8 characters & one
                  uppercase letter
                </p>
              )}
            </div>

            <div className="CreateAccountForm__div">
              <label>Confirm Password</label>
              <div>
                <input
                  onChange={handleConfirmedPassword}
                  className="input"
                  value={confirmedPassword}
                  type={ConfirmedPasswordType}
                />
                <FontAwesomeIcon
                  icon={faEye}
                  className="fontAwesome_icon"
                  onClick={toggleConfirmedPassword}
                />
              </div>
              {/* #128712 is Unicode for the circle with exclamation mark */}
              {confirmedPassword===""?<p></p>:validConfirmedPassword ? (
                <p className="valid">&#x1F5F9; Passwords match</p>
              ) : (
                <p className="invalid">&#128712; Error - passwords do not match!</p>
              )}
            </div>

            <div className="CreateAccountForm__hasAccount">
              {/* nbsp is Unicode for a space */}
              <p className="CreateAccountForm__hasAccount__question">
                Already have an account?&nbsp;
                <span>
                  <Link className="CreateAccountForm__hasAccount__login" to="/signin">
                    Login
                  </Link>
                </span>
              </p>
            </div>

            <div className="CreateAccountForm__separator">
            </div>

            <Link to="/bankdetails">
              <Button 
                buttonStyle={"btn button-blue-disabled button-blue"}
                buttonType={"submit"} 
                disabled={
                  !(validEmail && validPassword && validConfirmedPassword)
                }
                buttonText={`Continue ▶`} 
              />
              {/* <button
                className="CreateAccountForm__btn"
                type="submit"
                disabled={
                  !(validEmail && validPassword && validConfirmedPassword)
                }
              >
                  Continue &#9654;
              </button> */}
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
