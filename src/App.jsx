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

import CurrencyConverterContainer from "./containers/CurrencyConverterContainer/CurrencyConverterContainer";
import currency from "./data/currency";
import TransferMakeTransfer from "./components/TransferMakeTransfer/TransferMakeTransfer";
import ContactAdd from "./components/ContactAdd/ContactAdd";
import Search from "./components/Search/Search";

const App = () => {
  //user Information
  const [email, setEmail] = useState("");
  const [accountName, setAccountName] = useState("");
  const [validEmail, setValidEmail] = useState(false);
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

  const [houseNum, setHouseNum] = useState();
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");

  const [account, setAccount]=useState({userID:"",
  firstName:"",
  lastName:"",
  email:"",
  address_houseNum:"",
  address_streetName:"",
  address_city:"",
  address_state:"",
  address_postCode:"",
  contactFlag: 0
}
)

  // Handling the street name input field change
  const handleStreetName = (e) => {
    e.preventDefault();
    setStreetName(e.target.value.toString());
  };

  // Handling the house number input field change
  const handleHouseNum = (e) => {
    e.preventDefault();
    setHouseNum(e.target.value);
  };

  // Handling the city input field change
  const handleCity = (e) => {
    e.preventDefault();
    setCity(e.target.value.toString());
  };

  // Handling the postcode input field change
  const handlePostCode = (e) => {
    e.preventDefault();
    setPostcode(e.target.value.toString());
  };

  // list below shall be replaced from API
  const fee = 0;

  //Details of the Wallet
  // list below shall be replaced from wallet
  const accountBalance = 15210;

  //Search function
  // Setting up the search box
  const [searchTerm, setSearchTerm] = useState("");

    // Handling the email input field change
    const handleEmail = (e) => {
      e.preventDefault();
      const tempEmail = e.target.value.toString();
      setEmail(tempEmail);
      // calls the validateEmail function and sets the boolean flag
      validateEmail(tempEmail) ? setValidEmail(true) : setValidEmail(false);
    };

      // validates whether the email address contains @
  const validateEmail = (email) => {
    return email.toString().includes("@");
  };
  
// Handling the account name input field change
const handleAccountName = (e) => {
  e.preventDefault();
  setAccountName(e.target.value.toString());
};

  // this handle reads the search text  
  const handleInput = (event) => {
    const cleanInput=event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const handleCreateAccount = () => {
    setAccount({
      firstName:accountName,
      lastName:"",
      email:email,
      address_houseNum:houseNum,
      address_streetName:streetName,
      address_city:city,
      address_state:"NY",
      address_postCode:postcode,
      contactFlag: 0
    });
    postCreateAccount()
 
  };

  const postCreateAccount=()=>{
    fetch('http://localhost:8080/createContact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(account)
    })
    .then((response) => response.json())
    .then((json => console.log(json)))
    .catch(err => console.log(err))
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingMain />} />
          <Route path="/signup" element={<SignUpMain 
          email={email}
          handleEmail={handleEmail}
          validEmail={validEmail}
          />} />
          <Route path="/bankdetails" element={<BankDetails 
            accountName={accountName}
            handleAccountName={handleAccountName}
          />} />
          <Route path="/billingaddress" element={<BillingAddress 
            houseNum={houseNum}
            handleHouseNum={handleHouseNum}
            streetName={streetName}
            handleStreetName={handleStreetName}
            city={city}
            handleCity={handleCity}
            postcode={postcode}
            handlePostCode={handlePostCode}
            handleCreateAccount={handleCreateAccount}
          />} />
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
