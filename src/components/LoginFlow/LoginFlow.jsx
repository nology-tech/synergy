import React, { useState } from "react";
import "./LoginFlow.scss";
import emojihand from "../../assets/images/Emojihand.png";
import synergy from "../../assets/images/synergy.png";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginFlow = (props) => {
  const {
    loginFlow_header,
    inputBox_email,
    inputBox_psw,
    inputBox_confirmpsw,
    buttonText,
  } = props;

  const [passwordType, setPasswordType] = useState("password"); //displays stars or text on a input field
  const [confirmedPasswordType, setConfirmedPasswordType] =
    useState("password"); //displays stars or text on a input field

  const [password, setPassword] = useState(""); //used to display validation msg for psw
  const [confirmedPassword, setConfirmedPassword] = useState(""); //used to display validation msg for confirmed psw

  const [validPassword, setValidPassword] = useState(false); //validation of psw length and uppercase
  const [validConfirmedPassword, setValidConfirmedPassword] = useState(false); //validation of confirmed psw length and uppercase

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
    validateConfirmedPassword(confPass)
      ? setValidConfirmedPassword(true)
      : setValidConfirmedPassword(false);
  };

  const validateConfirmedPassword = (pass) => {
    return pass === password;
  };

  return (
    <>
      <nav>Navbar placeholder</nav>
      <main className="background">
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
                  <input className="loginFlow__inputbox" type="text"></input>
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
                  <FontAwesomeIcon
                    icon={faEye}
                    className="fontAwesome_icon"
                    onClick={togglePassword}
                  />
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
                  <a href="#sugnup" className="blue">
                    Sign Up
                  </a>
                </p>
                <p>
                  <a href="#forgottenpsw" className="blue">
                    Forgotten Password?
                  </a>
                </p>
              </div>
            ) : (
              <></>
            )}

            <div className="loginFlow__button">
              <button>{buttonText}</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginFlow;
