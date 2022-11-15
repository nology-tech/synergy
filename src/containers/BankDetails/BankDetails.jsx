import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./BankDetails.scss";
import synergyLogo from "../../assets/images/synergy_logo.png";
import SignInNav from "../../components/SignInNav/SignInNav";
import Button from "../../components/Button/Button";

const BankDetails = () => {
  const [accountName, setAccountName] = useState("");
  const [accountNum, setAccountNum] = useState();
  const [sortCode, setSortCode] = useState("");

  // Handling the account name input field change
  const handleAccountName = (e) => {
    e.preventDefault();
    setAccountName(e.target.value.toString());
  };

  // Handling the account number input field change
  const handleAccountNum = (e) => {
    e.preventDefault();
    setAccountNum(e.target.value);
  };

  // Handling the sort code input field change
  const handleSortCode = (e) => {
    e.preventDefault();
    setSortCode(e.target.value.toString());
  };

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
                <label>Account Name</label>
                <input
                  onChange={handleAccountName}
                  className="input"
                  value={accountName}
                  type="text"
                />
              </div>
              <div className="bankDetailsForm__div">
                <label>Account Number</label>
                <input
                  onInput={handleAccountNum}
                  className="input"
                  value={accountNum}
                />
              </div>

              <div className="bankDetailsForm__div">
                <label>Sort Code</label>
                <input
                  onChange={handleSortCode}
                  className="input"
                  value={sortCode}
                />
              </div>
              <div className="billingAddressForm__separator"></div>

              <div className="buttons-group">
                <Link to="/signup">
                  <button className="bankDetailsForm__goBackBtn" type="submit">
                    Go Back
                  </button>
                </Link>
                <Link to="/billingaddress">
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
