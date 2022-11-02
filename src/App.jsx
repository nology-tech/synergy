import React from 'react';
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/CreateAccount/CreateAccount"
import "./components/SignUp/SignUp"
import SignUp from './components/SignUp/SignUp';
import BankDetails from './components/BankDetails/BankDetails';
import BillingAddress from './components/BillingAddress/BillingAddress';

const App = () => {

  return (
    <Router>
      <div className='app'>
      <Routes>
        <Route
          path="/"
          element={
            <SignUp />
          }
        />
        <Route
          path="/bankdetails"
          element={
            <BankDetails />
          }
        />
        <Route
          path="/billingaddress"
          element={
            <BillingAddress />
          }
        />
      </Routes>
      </div>
    </Router>
  
  )
}

export default App