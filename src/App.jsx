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
import Button from "./components/Button/Button";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };
  let buttonText =
    "<i class='fa-solid fa-arrows-rotate'></i> Convert";

  return (
    <Router>
      <div>
        <Button
          buttonStyle={"button-light-blue"}
          buttonInitialStyle={""}
          isDisabled={false}
          buttonType={""}
          buttonText={"Find out more"}
        />

        <Button buttonStyle={"button-blue"} buttonInitialStyle={""} isDisabled={false} buttonType={""} buttonText={buttonText} />

        <Button buttonStyle={"button-blue-disabled"} buttonInitialStyle={""} isDisabled={false} buttonType={"submit"} buttonText={"Continue &#9654"} />

        <Button
          buttonStyle={"button-blue-white-border"}
          buttonInitialStyle={""}
          isDisabled={false}
          buttonType={""}
          buttonText={"Edit"}
        />

        <Routes>
          <Route path="/" element={<LandingMain />} />
          <Route path="/signup" element={<SignUpMain />} />
          <Route path="/bankdetails" element={<BankDetails />} />
          <Route path="/billingaddress" element={<BillingAddress />} />
          <Route path="/welcome" element={<LoginFlowWelcome />} />
          <Route path="/forgotten-password" element={<ForgottenPassword />} />
          <Route path="/change-password" element={<LoginFlowChangePsw />} />
          <Route path="/contacts" element={<ContactListPage />} />
          <Route path="/liverates" element={<LiveRates />} />
          <Route path="/signin" element={<SignIn />} />
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
            path="/dashboard/liveRates"
            element={
              <UserDashboard
                handleInput={handleInput}
                value={searchTerm}
                navigateTo="LiveRates"
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
          <Route
            path="/dashboard/contacts"
            element={
              <UserDashboard
                handleInput={handleInput}
                value={searchTerm}
                navigateTo="Contacts"
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
