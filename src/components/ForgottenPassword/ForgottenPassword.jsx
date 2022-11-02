import React from "react";
import "./ForgottenPassword.scss";
import synergy from "../../assets/images/synergy.png";

const ForgottenPassword = () => {
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
              <h1>Forgotten your password</h1>
            </div>

            <div className="loginFlow__credentials">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <h2 className="loginFlow__credentials__header">Email</h2>
              <input className="loginFlow__inputbox" type="text" />
            </div>

            <div className="loginFlow__button">
              <button>Send</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ForgottenPassword;
