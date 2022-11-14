import { useState } from "react";
import React from "react";

import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUpMain from "./components/SignUp/SignUpMain";
import UserDashboard from "./containers/UserDashboard/UserDashboard";
import ForgottenPassword from "./components/ForgottenPassword/ForgottenPassword";
import LoginFlowChangePsw from "./components/LoginFlowChangePsw/LoginFlowChangePsw";
import LoginFlowWelcome from "./components/LoginFlowWelcome/LoginFlowWelcome";
import BankDetails from "./containers/BankDetails/BankDetails";
import BillingAddress from "./containers/BillingAddress/BillingAddress";
import LandingMain from "./containers/LandingMain/LandingMain";
import ContactListPage from "./components/ContactListPage/ContactListPage";
import LiveRates from "./components/LiveRates/LiveRates";
import Wallet from "./containers/Wallet/Wallet";

// import Button from "./components/Button/Button"; // to be removed
// import {SlRefresh} from 'react-icons/sl';  // to be removed

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };


  // const buttonImg = <SlRefresh />;  // to be removed
  // const buttonText = "Convert";  // to be removed


  return (
    <Router>
      <div>
                    {/* ===================================================================================================== */}
                              {/* <div className="button-test" text = "FOR BUTTON TESTING ONLY - TO BE REMOVED AFTER TESTING" >
                                  <Button
                                    buttonStyle={"button-light-blue"}
                                    isDisabled={false}
                                    buttonType={""}
                                    buttonText={"Find out more"}
                                  />

                                  <Button buttonStyle={"button-blue"} 
                                  isDisabled={false} buttonType={""} buttonText={buttonText} buttonImg={buttonImg}/>

                                  <Button buttonStyle={"button-blue-disabled"} 
                                  isDisabled={false} buttonType={"submit"} buttonText={`Continue ▶`} />

                                  <Button
                                    buttonStyle={"button-blue-white-border"}
                                    isDisabled={false}
                                    buttonType={""}
                                    buttonText={"Edit"}
                                  />

                                  <Button
                                    buttonStyle={"button-dashed"}
                                    isDisabled={false}
                                    buttonType={""}
                                    buttonText={"Add Currency"}
                                  />

                                  <Button
                                    buttonStyle={"button-white"}
                                    isDisabled={false}
                                    buttonType={""}
                                    buttonText={"Manage"}
                                  />
                              </div> */}
                    {/* ===================================================================================================== */}


        <Routes>
          <Route path="/" element={<LandingMain />} />
          <Route path="/signup" element={<SignUpMain />} />
          <Route path="/bankdetails" element={<BankDetails />} />
          <Route path="/billingaddress" element={<BillingAddress />} />
          <Route path="/forgotten-password" element={<ForgottenPassword />} />
          <Route path="/change-password" element={<LoginFlowChangePsw />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/contacts" element={<ContactListPage searchTerm={searchTerm} handleInput={handleInput}/>} />
          <Route path="/liverates" element={<LiveRates searchTerm={searchTerm} handleInput={handleInput}/>} />
          <Route path="/signin" element={<LoginFlowWelcome />} />
          <Route
            path="/userprofile"
            element={
              <UserDashboard
                handleInput={handleInput}
                value={searchTerm}
                navigateTo="Wallet"
              />
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <UserDashboard
                handleInput={handleInput}
                value={searchTerm}
                navigateTo="Wallet"
              />
            }
          ></Route>
          <Route
            path="/dashboard/wallet"
            element={
              <UserDashboard
                handleInput={handleInput}
                value={searchTerm}
                navigateTo="Wallet"
              />
            }
          ></Route>
            <Route
            path="/dashboard/convert"
            element={
              <UserDashboard
                handleInput={handleInput}
                value={searchTerm}
                navigateTo="Convert"
              />
            }
          ></Route>
          <Route
            path="/dashboard/transfer"
            element={
              <UserDashboard
                handleInput={handleInput}
                value={searchTerm}
                navigateTo="Transfer"
              />
            }
          ></Route>
          <Route path="/home" element={<LandingMain />}></Route>
          <Route path="/features" element={<LandingMain />}></Route>
          <Route path="/about" element={<LandingMain />}></Route>
          <Route path="/contact" element={<LandingMain />}></Route>
          <Route path="/" element={<LandingMain />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;





