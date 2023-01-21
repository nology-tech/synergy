import { useState, useEffect } from "react";
import React from "react";

import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import SignUpMain from "./components/SignUp/SignUpMain";
import ForgottenPassword from "./components/ForgottenPassword/ForgottenPassword";
import LoginFlowChangePsw from "./components/LoginFlowChangePsw/LoginFlowChangePsw";
import LoginFlowWelcome from "./components/LoginFlowWelcome/LoginFlowWelcome";
import BankDetails from "./containers/BankDetails/BankDetails";
import BillingAddress from "./containers/BillingAddress/BillingAddress";
import LandingMain from "./containers/LandingMain/LandingMain";
import LiveRates from "./components/LiveRates/LiveRates";
import Wallet from "./containers/Wallet/Wallet";
import CurrencyConverterContainer from "./containers/CurrencyConverterContainer/CurrencyConverterContainer";
import TransferMakeTransfer from "./components/TransferMakeTransfer/TransferMakeTransfer";
import ContactAdd from "./components/ContactAdd/ContactAdd";
import apiurl from "./config/url";

const App = () => {
  //user Information
  const [userEmail, setEmail] = useState("");
  const [userID, setUserID] = useState("");
  const [accountName, setAccountName] = useState("");

  //  const [userEmail, setEmail] = useState("");
  //  const [accountLastName, setAccountLastName] = useState("");

  const [validEmail, setValidEmail] = useState(false);
  const [username, setUserName] = useState("Samantha Brooks"); //shall be replaced by a function on login
  const [accountNum, setAccountNum] = useState("123456789"); // shall be replaced by a function on login
  const [sortCode, setSortCode] = useState("012345"); // shall be replaced by a function on login
  const [accountBalance, setAccountBalance] = useState(4750000); // shall be replaced by a function on login
  
  //Details of the  transfer
  const [baseCurrency, setBaseCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  // fx should come from Live rates on Send button click, temporary setting to EUR rate from data file
  const [fxRate, setFxRate] = useState(1);
  const [amountCode, setAmountCode] = useState("");

  // Details for Live Rates
  const [currency, setCurrency] = useState([]);
  const getCurrencyLiveRates = async () => {
    fetch(`${apiurl}/currencyrates`)
      .then((res) => res.json())
      .then((json) => setBaseAndToCurrencies(json))
      .catch((err) => console.log(err));
  };

  const setBaseAndToCurrencies = (json) => {
    setCurrency(json);
    setBaseCurrency(json[0]);
    setToCurrency(json[97]);
    setFxRate(json[97].rate);
  };

  useEffect(() => {
    getCurrencyLiveRates();
  }, []);

  const [account, setAccount] = useState({
    userID: "",
    firstName: "",
    lastName: "",
    email: "",
    address_houseNum: "",
    address_streetName: "",
    address_city: "",
    address_state: "",
    address_postCode: "",
    contactFlag: 0,
  });

  const [houseNum, setHouseNum] = useState();
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");

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
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const handleCreateAccount = () => {
    postCreateAccount();
    setUserName(accountName);
  };

  const postCreateAccount = () => {
    fetch(`${apiurl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: "",
        firstName: accountName.split(" ", 2)[0],
        lastName: accountName.split(" ", 2)[1],
        email: userEmail,
        address_houseNum: houseNum,
        address_streetName: streetName,
        address_city: city,
        address_state: "NY",
        address_postCode: postcode,
        contactFlag: 0,
        sortCode: "02",
        accountType: "Checking",
        currencyID: "USD",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.userID);
        setUserID(data.userID);
      })
      .catch((err) => console.log(err));
  };

  // console.log ("Username: "+username);
  // const getUserByEmail = () => {
  //   fetch(`${apiurl}/users?email=${userEmail}`)
  //     .then(res => res.json())
  //     .then(json => setEmail(json))
  //     .then(data => setUserName(data.firstName))
  //     .then(json => { console.log(json) })
  //     .catch(err => console.log(err))
  // }

  // const handleLoginByEmail = () => {
  //   getUserByEmail();
  // };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <LandingMain username={username} setUserName={setUserName} />
            }
          />

          {/* <Route path="/signup" element={<SignUpMain />} /> */}
          <Route
            path="/signup"
            element={
              <SignUpMain
                email={userEmail}
                handleEmail={handleEmail}
                validEmail={validEmail}
              />
            }
          />
          {/* <Route path="/bankdetails" element={<BankDetails />} /> */}
          <Route
            path="/bankdetails"
            element={
              <BankDetails
                accountName={accountName}
                handleAccountName={handleAccountName}
              />
            }
          />
          {/* <Route path="/billingaddress" element={<BillingAddress />} /> */}

          <Route
            path="/billingaddress"
            element={
              <BillingAddress
                houseNum={houseNum}
                handleHouseNum={handleHouseNum}
                streetName={streetName}
                handleStreetName={handleStreetName}
                city={city}
                handleCity={handleCity}
                postcode={postcode}
                handlePostCode={handlePostCode}
                handleCreateAccount={handleCreateAccount}
              />
            }
          />
          <Route path="/forgotten-password" element={<ForgottenPassword />} />
          <Route path="/change-password" element={<LoginFlowChangePsw />} />
          <Route
            path="/wallet"
            element={<Wallet username={username} userID={userID} accountBalance={accountBalance}/>}
          />
          <Route
            path="/contacts"
            element={<ContactAdd username={username} userID={userID} />}
          />
          {currency[0] ? (
            <Route
              path="/liverates"
              element={<LiveRates currency={currency} username={username} />}
            />
          ) : (
            ""
          )}

          <Route
            path="/signin"
            element={
              <LoginFlowWelcome
                username={username}
                setUserName={setUserName}
                userID={userID}
                setUserID={setUserID}
                accountNum={accountNum}
                setAccountNum={setAccountNum}
                accountBalance={accountBalance}
                setAccountBalance={setAccountBalance}
              />
            }
          />
          <Route
            path="/userprofile"
            element={<Wallet username={username} userID={userID} accountBalance={accountBalance} />}
          />
          <Route
            path="/dashboard"
            element={<Wallet username={username} userID={userID} accountBalance={accountBalance}/>}
          />

          <Route
            path="/home"
            element={
              <LandingMain username={username} setUserName={setUserName} />
            }
          ></Route>
          <Route
            path="/features"
            element={
              <LandingMain username={username} setUserName={setUserName} />
            }
          ></Route>
          <Route
            path="/about"
            element={
              <LandingMain username={username} setUserName={setUserName} />
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <LandingMain username={username} setUserName={setUserName} />
            }
          ></Route>
          <Route
            path="/"
            element={
              <LandingMain username={username} setUserName={setUserName} />
            }
          ></Route>
          {baseCurrency ? (
            <Route
              path="/currencyconverter"
              element={
                <CurrencyConverterContainer
                  username={username}
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
                  accountNum={accountNum}
                  accountBalance={accountBalance}
                  setAccountBalance={setAccountBalance}
                />
              }
            ></Route>
          ) : (
            ""
          )}

          {baseCurrency ? (
            <Route
              path="/transfer-fx-transaction"
              element={
                <TransferMakeTransfer
                  transferWorkflowStage="fxTransaction"
                  currencyBase={baseCurrency}
                  currencyTo={toCurrency}
                  amountBase={
                    amountCode === baseCurrency.code
                      ? amount
                      : Number((amount * 1) / toCurrency.rate).toFixed(4)
                  }
                  amountReceived={
                    amountCode === baseCurrency.code ? convertedAmount : amount
                  }
                  fee={fee}
                  username={username}
                  accountBalance={accountBalance}
                  setAccountBalance={setAccountBalance}
                  accountNum={accountNum}
                  sortCode={sortCode}
                  searchTerm={searchTerm}
                  handleInput={handleInput}
                  userID={userID}
                />
              }
            />
          ) : (
            ""
          )}

          {baseCurrency ? (
            <Route
              path="/transfer-send-from"
              element={
                <TransferMakeTransfer
                  transferWorkflowStage="transferSendFrom"
                  currencyBase={baseCurrency}
                  currencyTo={toCurrency}
                  amountBase={
                    amountCode === baseCurrency.code
                      ? amount
                      : Number((amount * 1) / toCurrency.rate).toFixed(4)
                  }
                  amountReceived={
                    amountCode === baseCurrency.code ? convertedAmount : amount
                  }
                  fee={fee}
                  username={username}
                  accountBalance={accountBalance}
                  setAccountBalance={setAccountBalance}
                  accountNum={accountNum}
                  sortCode={sortCode}
                  searchTerm={searchTerm}
                  handleInput={handleInput}
                  userID={userID}
                />
              }
            />
          ) : (
            ""
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
