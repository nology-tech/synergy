import { useState, useEffect } from "react";
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

import CurrencyConverterContainer from "./containers/CurrencyConverterContainer/CurrencyConverterContainer";
// import currency from "./data/currency";
import TransferMakeTransfer from "./components/TransferMakeTransfer/TransferMakeTransfer";
import ContactAdd from "./components/ContactAdd/ContactAdd";
import Search from "./components/Search/Search";

const App = () => {
  //user Information
  const [username, setUserName] = useState("Samantha Brooks"); //shall be replaced by a function on login
  const [accountNum, setAccountNum] = useState("123456789"); // shall be replaced by a function on login
  const [sortCode, setSortCode] = useState("012345"); // shall be replaced by a function on login


  // Details for Live Rates
  const [currency, setCurrency] = useState([]);
  const getCurrencyLiveRates = async() => {
    fetch("http://localhost:8080/currencyrates")
      .then(res => res.json())
      .then(json => setBaseAndToCurrencies(json))
      .catch(err => console.log(err))
  }

const setBaseAndToCurrencies = (json) => {
    setCurrency(json)
    setBaseCurrency(json[0]);
    setToCurrency(json[1]);
    setFxRate(json[1].rate)
}


  useEffect(() => {getCurrencyLiveRates();}, []);


  //Details of the  transfer

  const [baseCurrency, setBaseCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");

  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  // fx should come from Live rates on Send button click, temporary setting to EUR rate from data file
  // const [fxRate, setFxRate] = useState(currency[1].rate);
  const [fxRate, setFxRate] = useState(1);
  const [amountCode, setAmountCode] = useState("");
  // list below shall be replaced from API
  const fee = 0;

   // useStates for Choose Recipient
   const [contactRecipientName, setContactRecipientName] = useState("");
   const [accountTypeContactRecipient, setAccountTypeContactRecipient] = useState();
   const [accountNumContactRecipient, setAccountNumContactRecipient] = useState();
   const [sortCodeContactRecipient, setSortCodeContactRecipient] = useState("");

   const onContactClick = (event) => {
    setContactRecipientName(contactRecipientName);
    setAccountTypeContactRecipient(accountTypeContactRecipient);
    setAccountNumContactRecipient(accountNumContactRecipient);
    setSortCodeContactRecipient(sortCodeContactRecipient);
    // console.log("Contact clicked for " + accountId);
  };
 
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
        <Routes>
          <Route path="/" element={<LandingMain />} />
          <Route path="/signup" element={<SignUpMain />} />
          <Route path="/bankdetails" element={<BankDetails />} />
          <Route path="/billingaddress" element={<BillingAddress />} />
          <Route path="/forgotten-password" element={<ForgottenPassword />} />
          <Route path="/change-password" element={<LoginFlowChangePsw />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/contacts" element={<ContactAdd />} />
          {currency[0]?
            <Route path="/liverates" element={<LiveRates currency={currency}/>} />:""}
          <Route path="/signin" element={<LoginFlowWelcome />} />
          <Route path="/userprofile" element={<Wallet />} />
          <Route path="/dashboard" element={<Wallet />} />
          <Route path="/home" element={<LandingMain />}></Route>
          <Route path="/features" element={<LandingMain />}></Route>
          <Route path="/about" element={<LandingMain />}></Route>
          <Route path="/contact" element={<LandingMain />}></Route>
          <Route path="/" element={<LandingMain />}></Route>
          {baseCurrency ? 
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
                  fxRate={toCurrency.rate}
                  setFxRate={setFxRate}
                  currency={currency}
                  amountCode={amountCode}
                  setAmountCode={setAmountCode}
                />
              }
            ></Route>    :""}

          {baseCurrency ? 
            <Route
              path="/transfer-fx-transaction"
              element={
                <TransferMakeTransfer
                  transferWorkflowStage="fxTransaction"
                  currencyBase={baseCurrency}
                  currencyTo={toCurrency}
                  amountBase={amountCode===baseCurrency.code?amount:Number(amount * 1/fxRate).toFixed(4)}
                  amountReceived={amountCode===baseCurrency.code?convertedAmount:amount}
                  fee={fee}
                  username={username}
                  accountBalance={accountBalance}
                  accountNum={accountNum}
                  sortCode={sortCode}
                />
              }
              ></Route> :""}
          {baseCurrency ?               
            <Route
              path="/transfer-send-from"
              element={
                <TransferMakeTransfer
                  transferWorkflowStage="transferSendFrom"
                  currencyBase={baseCurrency}
                  currencyTo={toCurrency}
                  amountBase={amountCode===baseCurrency.code?amount:Number(amount * 1/fxRate).toFixed(4)}
                  amountReceived={amountCode===baseCurrency.code?convertedAmount:amount}
                  fee={fee}
                  username={username}
                  accountBalance={accountBalance}
                  accountNum={accountNum}
                  sortCode={sortCode}
                  searchTerm={searchTerm}
                  handleInput={handleInput}
                />
              }
              ></Route> 
             :""}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
