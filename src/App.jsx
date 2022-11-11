import { useState } from "react";
import React from "react";

import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./containers/SignIn/SignIn";
import SignUpMain from "./containers/SignUp/SignUpMain";
import UserDashboard from "./containers/UserDashboard/UserDashboard";
import ForgottenPassword from "./components/ForgottenPassword/ForgottenPassword";
import LoginFlowChangePsw from "./components/LoginFlowChangePsw/LoginFlowChangePsw";
import LoginFlowWelcome from "./components/LoginFlowWelcome/LoginFlowWelcome";
import BankDetails from "./components/BankDetails/BankDetails";
import BillingAddress from "./components/BillingAddress/BillingAddress";
import LandingMain from "./containers/LandingMain/LandingMain";
import ContactListPage from "./components/ContactListPage/ContactListPage";
import LiveRates from "./components/LiveRates/LiveRates";
import CurrencyConverterContainer from "./containers/CurrencyConverterContainer/CurrencyConverterContainer";
import currency from './data/currency';


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState();
  // fx should come from Live rates on Send button click, temporary setting to EUR rate from data file
  const [fxRate, setFxRate] = useState(currency[1].rate);
      
  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const handleAmount = (e) => {
    e.preventDefault();
    const amount = e.target.value.toLowerCase();
    setAmount(amount);    
  };

  const convertAmount = () => {
    setConvertedAmount(amount*fxRate);  
  }

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
          <Route path="/currencyconverter" 
                 element={
                  <CurrencyConverterContainer 
                  amount={amount} 
                  handleAmount={handleAmount} 
                  convertedAmount={convertedAmount}
                  convertAmount={convertAmount}/>}></Route>
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;





