import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./BankDetails.scss";
import synergyLogo from "../../assets/images/synergy_main_logo.png";
import SignInNav from "../../components/SignInNav/SignInNav";
import Button from "../../components/Button/Button";
import currency from "../../data/currency.js";

const BankDetails = (props) => {
  const {accountName, handleAccountName}=props;
  const [accountNum, setAccountNum] = useState();
  const [accountCurr, setAccountCurr] = useState();
  const [sortCode, setSortCode] = useState("");

  
  
  // Handling the account number input field change
  const handleAccountNum = (e) => {
    e.preventDefault();
    setAccountNum(e.target.value);
  };

  const handleAccountCurr = (e) => {
    e.preventDefault();
    setAccountCurr(e.target.value);
  };

  // Handling the sort code input field change
  const handleSortCode = (e) => {
    e.preventDefault();
    setSortCode(e.target.value.toString());
  };

  const currencyJSX = currency.map((currency) => (
    <option name={currency.code}> {currency.code} - {currency.name}</option>
  ));

  return (
    <>
      <SignInNav title="Login" />
      <div className="BankDetails">
        <div className="bank-form-box">
          <div className="bank-details-header">
            <img src={synergyLogo} />
          </div>
          <div>
            <h1>Add Bank Details</h1>
            <p className="ipsum">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <form className="bankDetailsForm">
              {/* Labels and inputs for form data */}
              <div className="bankDetailsForm__div">
                <label>Account First and Last Name(s)</label>
                <input
                  onChange={handleAccountName}
                  className="input"
                  value={accountName}
                  type="text"
                />
              </div>
               {/* Labels and inputs for form data */}
               {/* <div className="bankDetailsForm__div">
                <label>Account Last Name</label>
                <input
                  onChange={handleAccountLastName}
                  className="input"
                  value={accountLastName}
                  type="text"
                />
              </div> */}
              <div className="bankDetailsForm__div">
                <label>Account Number</label>
                <input
                  onInput={handleAccountNum}
                  className="input"
                  value={accountNum}
                />
              </div>
              <div className="bankDetailsForm__div">
                <label>Account Currency</label>
                <select
                  onChange={handleAccountCurr}
                  className="input"
                  value={accountCurr}
                >
                  {currencyJSX}
                </select>
              </div>
              <div className="bankDetailsForm__div">
                <label>Sort Code</label>
                <input
                  onChange={handleSortCode}
                  className="input"
                  value={sortCode}
                />
              </div>
              <div className="bankDetailsForm__separator"></div>

              <div className="buttons-group">
                <Link to="/signup">
                  <button className="bankDetailsForm__goBackBtn" type="submit">
                    Go Back
                  </button>
                </Link>
                <Link to="/billingaddress">
                {console.log(accountName)}
                  <Button 
                    buttonStyle={"btn button-blue"}
                    buttonType={"submit"} 
                    buttonText={`Continue ▶`} 
                  />
                  {/* <button
                    className="bankDetailsForm__continueBtn"
                    type="submit"
                  >
                    Continue &#9654;
                  </button> */}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankDetails;
