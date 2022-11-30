import { useState } from "react";
import React from "react";

import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpMain from "./components/SignUp/SignUpMain";
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
import CurrencyConverterContainer from "./containers/CurrencyConverterContainer/CurrencyConverterContainer";
import currency from "./data/currency";
import TransferMakeTransfer from "./components/TransferMakeTransfer/TransferMakeTransfer";
import Button from "./components/Button/Button";
import ContactAdd from "./components/ContactAdd/ContactAdd";
import Search from "./components/Search/Search";
const App = () => {
  //user Information
  const [username, setUserName] = useState("Samantha Brooks"); //shall be replaced by a function on login
  const [accountNum, setAccountNum] = useState("123456789"); // shall be replaced by a function on login
  const [sortCode, setSortCode] = useState("012345"); // shall be replaced by a function on login

  //Details of the  transfer
  
  const [baseCurrency, setBaseCurrency] = useState(currency[0]);
  const [toCurrency, setToCurrency] = useState(currency[1]);
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  // fx should come from Live rates on Send button click, temporary setting to EUR rate from data file
  const [fxRate, setFxRate] = useState(currency[1].rate);
  // list below shall be replaced from API
  const fee = 0;

  //Details of the Wallet
  // list below shall be replaced from wallet
  const accountBalance = 15210;

  //Search function
  // Setting up the search box
  const [searchTerm, setSearchTerm] = useState("");

  // this handle reads the search text  
  const handleInput = (event) => {
    const cleanInput=event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };


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
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/contacts" element={<ContactAdd />} />
          <Route path="/liverates" element={<LiveRates />} />
          <Route path="/signin" element={<LoginFlowWelcome />} />
          <Route path="/userprofile" element={<Wallet />} />
          <Route path="/dashboard" element={<Wallet />} />
          <Route path="/home" element={<LandingMain />}></Route>
          <Route path="/features" element={<LandingMain />}></Route>
          <Route path="/about" element={<LandingMain />}></Route>
          <Route path="/contact" element={<LandingMain />}></Route>
          <Route path="/" element={<LandingMain />}></Route>
          <Route
            path="/currencyconverter"
            element={
              <CurrencyConverterContainer
                amount={amount}
                setAmount={setAmount}
                baseCurrency={baseCurrency}
                setBaseCurrency={setBaseCurrency}
                toCurrency={toCurrency}
                setToCurrency={setToCurrency}
                convertedAmount={convertedAmount}
                setConvertedAmount={setConvertedAmount}
                fxRate={fxRate}
                setFxRate={setFxRate}
              />
            }
          ></Route>

          <Route
            path="/currencyconverter"
            element={
              <CurrencyConverterContainer
                amount={amount}
                setAmount={setAmount}
                baseCurrency={baseCurrency}
                setBaseCurrency={setBaseCurrency}
                toCurrency={toCurrency}
                setToCurrency={setToCurrency}
                convertedAmount={convertedAmount}
                setConvertedAmount={setConvertedAmount}
                fxRate={fxRate}
                setFxRate={setFxRate}
              />
            }
          ></Route>

          <Route
            path="/transfer-fx-transaction"
            element={
              <TransferMakeTransfer
                transferWorkflowStage="fxTransaction"
                currencyBaseCode={baseCurrency.code}
                currencyRecipientCode={toCurrency.code}
                amountBase={amount}
                amountReceived={convertedAmount}
                fxRate={fxRate}
                fee={fee}
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
                transferWorkflowStage="transferSendFrom"
                currencyBaseCode={baseCurrency.code}
                currencyRecipientCode={toCurrency.code}
                amountBase={amount}
                amountReceived={convertedAmount}
                fxRate={fxRate}
                fee={fee}
                username={username}
                accountBalance={accountBalance}
                accountNum={accountNum}
                sortCode={sortCode}
                searchTerm={searchTerm}
                handleInput={handleInput}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
