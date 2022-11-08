import React from 'react';
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgottenPassword from "./components/ForgottenPassword/ForgottenPassword";
import LoginFlowChangePsw from "./components/LoginFlowChangePsw/LoginFlowChangePsw";
import LoginFlowWelcome from "./components/LoginFlowWelcome/LoginFlowWelcome";
import SignUp from './components/SignUp/SignUp';
import BankDetails from './components/BankDetails/BankDetails';
import BillingAddress from './components/BillingAddress/BillingAddress';
import LandingMain from './containers/LandingMain/LandingMain'

const App = () => {

  return (
      <div className='app'>
          <Router>
      <Routes>
        <Route path="/"element={<LandingMain />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/bankdetails" element={<BankDetails />}/>
        <Route path="/billingaddress" element={<BillingAddress />}/>
        <Route path="/welcome" element={<LoginFlowWelcome />} />
        <Route path="/forgotten-password" element={<ForgottenPassword />} />
        <Route path="/change-password" element={<LoginFlowChangePsw />} />
      </Routes>
      </Router>
      </div>
  )
}

export default App
