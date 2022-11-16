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
import TransferMakeTransfer from "./components/TransferMakeTransfer/TransferMakeTransfer";
import Button from "./components/Button/Button";

// import {SlRefresh} from 'react-icons/sl';
// import {IoExitOutline} from "react-icons/io5";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

   // hardcoded values for transfer:
  // list below shall be replaced from currency converter
  const currencyBaseCode = "USD";
  const currencyRecipientCode = "GBP";
  const amountBase = 1000;
  const amountReceived = 1359.5;
  const fxRate = 1.3595;
  // list below shall be replaced from create account database
  const username = "Smantha Brooks";
  const accountNum = "10840366";
  const sortCode = "110053";
  // list below shall be replaced from wallet
  const accountBalance = 15210;
  //---------------------------------
  
  // const buttonImg = <SlRefresh />;  // to be removed
  // const buttonText = "Convert";  // to be removed


  return (
    <Router>
      <div>
        {/* Button Test */}
        {/* <div className="button-test">
          <Button
            buttonStyle={"btn button-transparent"}
            buttonText={"Find Out More"}
          />
          <Button 
            buttonStyle={"btn button-blue"}
            buttonText={"Sign Up"} 
          />
          <Button 
            buttonStyle={"btn button-blue"}
            buttonText={"Sign Out"} 
            buttonImg={buttonSignOut}
          />
          <Button 
            buttonStyle={"btn button-blue"}
            buttonText={"Convert"}
            buttonImg={buttonConvert}
          />
          <Button 
            buttonStyle={"btn button-blue"}
            buttonType={"submit"} 
            buttonText={`Continue ▶`} 
          />
          <Button 
            buttonStyle={"btn button-blue-disabled"}
            buttonType={"submit"} 
            buttonText={`Continue ▶`} 
          />
          <Button
            buttonStyle={"btn button-blue-white-border"}
            buttonText={"Edit"}
          />
          <Button
            buttonStyle={"btn button-dashed"}
            isDisabled={false}
            buttonText={"Add Currency"}
          />
          <Button
            buttonStyle={"btn button-white"}
            isDisabled={false}
            buttonText={"Manage"}
          />
        </div> */}

        <Routes>
          <Route path="/" element={<LandingMain />} />
          <Route path="/signup" element={<SignUpMain />} />
          <Route path="/bankdetails" element={<BankDetails />} />
          <Route path="/billingaddress" element={<BillingAddress />} />
          <Route path="/forgotten-password" element={<ForgottenPassword />} />
          <Route path="/change-password" element={<LoginFlowChangePsw />} />
          <Route
            path="/contacts"
            element={
              <ContactListPage
                searchTerm={searchTerm}
                handleInput={handleInput}
              />
            }
          />
          <Route
            path="/liverates"
            element={
              <LiveRates searchTerm={searchTerm} handleInput={handleInput} />
            }
          />
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
          />
          <Route
            path="/dashboard"
            element={
              <UserDashboard
                handleInput={handleInput}
                value={searchTerm}
                navigateTo="Wallet"
              />
            }
          />
          <Route
            path="/dashboard/wallet"
            element={
              <UserDashboard
                handleInput={handleInput}
                value={searchTerm}
                navigateTo="Wallet"
              />
            }
          />
          <Route
            path="/dashboard/convert"
            element={
              <UserDashboard
                handleInput={handleInput}
                value={searchTerm}
                navigateTo="Convert"
              />
            }
          />
          <Route path="/home" element={<LandingMain />}></Route>
          <Route path="/features" element={<LandingMain />}></Route>
          <Route path="/about" element={<LandingMain />}></Route>
          <Route path="/contact" element={<LandingMain />}></Route>
          <Route path="/" element={<LandingMain />}></Route>
          <Route
            path="/transfer-fx-transaction"
            element={
              <TransferMakeTransfer
              transferWorkflowStage = "fxTransaction"
                currencyBaseCode={currencyBaseCode}
                currencyRecipientCode={currencyRecipientCode}
                amountBase={amountBase}
                amountReceived={amountReceived}
                fxRate={fxRate}
                username={username}
                accountBalance={accountBalance}
                accountNum={accountNum}
                sortCode={sortCode}
              />
            }
          />
          <Route
            path="/transfer-send-from"
            element={
              <TransferMakeTransfer
              transferWorkflowStage = "transferSendFrom"
                currencyBaseCode={currencyBaseCode}
                currencyRecipientCode={currencyRecipientCode}
                amountBase={amountBase}
                amountReceived={amountReceived}
                fxRate={fxRate}
                username={username}
                accountBalance={accountBalance}
                accountNum={accountNum}
                sortCode={sortCode}
              />
            }
          />
          <Route
            path="/transfer-choose-recipient"
            element={
              <TransferMakeTransfer
              transferWorkflowStage = "transferChooseRecipient" 
                currencyBaseCode={currencyBaseCode}
                currencyRecipientCode={currencyRecipientCode}
                amountBase={amountBase}
                amountReceived={amountReceived}
                fxRate={fxRate}
                username={username}
                accountBalance={accountBalance}
                accountNum={accountNum}
                sortCode={sortCode}
              />
            }
          />
          <Route
            path="/transfer-add-recipient"
            element={
              <TransferMakeTransfer
              transferWorkflowStage = "transferAddRecipient" 
                currencyBaseCode={currencyBaseCode}
                currencyRecipientCode={currencyRecipientCode}
                amountBase={amountBase}
                amountReceived={amountReceived}
                fxRate={fxRate}
                username={username}
                accountBalance={accountBalance}
                accountNum={accountNum}
                sortCode={sortCode}
              />
            }
          />
          {/* <Route
            path="/transfer-confirm-recipient"
            element={
              <TransferMakeTransfer
              transferWorkflowStage = "transferConfirmRecipient" 
                currencyBaseCode={currencyBaseCode}
                currencyRecipientCode={currencyRecipientCode}
                amountBase={amountBase}
                amountReceived={amountReceived}
                fxRate={fxRate}
                username={username}
                accountBalance={accountBalance}
                accountNum={accountNum}
                sortCode={sortCode}
              />
            }
          /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
