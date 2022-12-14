import React, { useState } from "react";
import "./LoginFlow.scss";
import emojihand from "../../assets/images/Emojihand.png";
import synergy from "../../assets/images/synergy.png";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import SignInNav from "../../components/SignInNav/SignInNav";
import apiurl from "../../config/url";

const LoginFlow = (props) => {
  const {
    loginFlow_header,
    inputBox_email,
    inputBox_psw,
    inputBox_confirmpsw,
    buttonText,
    username,
    setUserName
  } = props;

  const [passwordType, setPasswordType] = useState("password"); //displays stars or text on a input field
  const [confirmedPasswordType, setConfirmedPasswordType] =
    useState("password"); //displays stars or text on a input field

  const [password, setPassword] = useState(""); //used to display validation msg for psw
  const [confirmedPassword, setConfirmedPassword] = useState(""); //used to display validation msg for confirmed psw

  const [validPassword, setValidPassword] = useState(false); //validation of psw length and uppercase
  const [validConfirmedPassword, setValidConfirmedPassword] = useState(false); //validation of confirmed psw length and uppercase

  const [resetToggle, setResetToggle] = useState(true); //disabling of Reset button for Change password when password is not entered

  // displays stars or text for the passwords on eye toggle
  const togglePassword = (e) => {
    if (passwordType === "password") {
      setPasswordType("text");
      setConfirmedPasswordType("text");
    } else {
      setPasswordType("password");
      setConfirmedPasswordType("password");
    }
  };

  // Handling the password change
  const handlePassword = (e) => {
    e.preventDefault();
    const pass = e.target.value.toString();
    setPassword(pass);
    validatePassword(pass) ? setValidPassword(true) : setValidPassword(false);
  };

  const validatePassword = (password) => {
    const uppercaseRegExp = /(?=.*?[A-Z])/;
    return password.length >= 8 && uppercaseRegExp.test(password);
  };

  // Handling the confirmed password change
  const handleConfirmedPassword = (e) => {
    e.preventDefault();
    const confPass = e.target.value.toString();
    setConfirmedPassword(confPass);
    if (validateConfirmedPassword(confPass)) {
      setValidConfirmedPassword(true);
      setResetToggle(false);
    } else {
      setValidConfirmedPassword(false);
    }
  };

  const validateConfirmedPassword = (pass) => {
    return pass === password;
  };

  const [userEmail, setEmail] = useState("");

  const getUserByEmail = () => {
    console.log (userEmail);
    fetch(`${apiurl}/userbyemail?email=${userEmail}`)
    .then(res => {return res.json()})
    .then(data => {
      setUserName(data.firstName+" "+data.lastName)
      console.log(data.userID)
    })
    .catch(err => console.log(err))
  }

  const handleLoginByEmail = () => {
    getUserByEmail();
  };

  const handleEmail = (e) => {
    e.preventDefault();
    const tempEmail = e.target.value.toString();
    setEmail(tempEmail);
  };

  return (
    <>
      <SignInNav title="Sign Up" />
      <main className="loginFlow__background">
        <div className="loginFlow">
          <div className="loginFlow__synergyIcon">
            <img
              src={synergy}
              alt="Synergy icon"
              className="loginFlow__synergyImg"
            />
            <h1>Synergy</h1>
          </div>
          <div className="loginFlow__main">
            <div className="loginFlow__main__header">
              <h1>{loginFlow_header}</h1>
              {/* Show HandWave emoji only for Welcome screen  */}
              {loginFlow_header === "Welcome Back!" ? (
                <img
                  src={emojihand}
                  alt="Handwave"
                  className="loginFlow__main__img"
                />
              ) : (
                <></>
              )}
            </div>

            <div className="loginFlow__credentials">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                leo urna.
              </p>

              {/* Displaying email field - Welcome Back and Forgotten your password */}
              {loginFlow_header === "Welcome Back!" ||
              loginFlow_header === "Forgotten your password" ? (
                <>
                  <h2 className="loginFlow__credentials__header">
                    {inputBox_email}
                  </h2>
                  <input className="loginFlow__inputbox" type="text" onChange={handleEmail}></input>
                </>
              ) : (
                <></>
              )}

              {/* Displaying Password Field  for Welcome Back and Change Password */}

              {loginFlow_header === "Forgotten your password" ? (
                <></>
              ) : (
                <div>
                  <h2 className="loginFlow__credentials__header">
                    {inputBox_psw}
                  </h2>
                  <input
                    onInput={handlePassword}
                    className="loginFlow__inputbox"
                    value={password}
                    type={passwordType}
                  />

                  {/* Displaying eye when stars are displayed and slashed eye when text is displayed  */}
                  {passwordType === "password" ? (
                    <FontAwesomeIcon
                      icon={faEye}
                      className="fontAwesome_icon"
                      onClick={togglePassword}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      className="fontAwesome_icon"
                      onClick={togglePassword}
                    />
                  )}
                  {/* Validation is not performed on Welcome Back and done for Change Password*/}
                  {loginFlow_header === "Welcome Back!" || password === "" ? (
                    <p></p>
                  ) : validPassword ? (
                    <p className="valid">Password meets requirements</p>
                  ) : (
                    <p className="invalid">
                      &#128712; Error - password must contain at least 8
                      characters & one uppercase letter
                    </p>
                  )}
                </div>
              )}

              {/* Displaying Confirm Password Field  for Change Password */}
              {loginFlow_header === "Change Password" ? (
                <div>
                  <h2 className="loginFlow__credentials__header">
                    {inputBox_confirmpsw}
                  </h2>
                  <input
                    onChange={handleConfirmedPassword}
                    className="loginFlow__inputbox"
                    type={confirmedPasswordType}
                  />
                  {confirmedPassword === "" ? (
                    <p></p>
                  ) : validConfirmedPassword ? (
                    <p className="valid">Passwords match</p>
                  ) : (
                    <p className="invalid">
                      &#128712; Error - passwords do not match!
                    </p>
                  )}
                </div>
              ) : (
                <></>
              )}

              {/* Displaying additional links only for Welcome Back */}
            </div>
            {loginFlow_header === "Welcome Back!" ? (
              <div className="loginFlow__links">
                <p className="grey">
                  Don't have an account?{" "}
                  <Link to="/signup" className="blue">
                    Sign Up
                  </Link>
                </p>
                <p>
                  <Link to="/forgotten-password" className="blue">
                    Forgotten Password?
                  </Link>
                </p>
              </div>
            ) : (
              <></>
            )}

            <div className="loginFlow__button">
              {loginFlow_header === "Change Password" ? (
                <Button buttonStyle={"btn button-blue-disabled button-blue"} buttonText={buttonText} disabled={resetToggle} />
              ) : (
                <Link to="/dashboard">
                  <Button buttonStyle={"btn button-blue"} buttonText={buttonText} disabled={false} onClick={handleLoginByEmail}  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginFlow;
