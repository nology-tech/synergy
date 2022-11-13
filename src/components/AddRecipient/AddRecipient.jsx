import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./AddRecipient.scss";


const AddRecipient = () => {
  const [recipientName, setRecipientName] = useState("");
  const [accountType, setAccountType] = useState();
  const [accountNum, setAccountNum] = useState();
  const [sortCode, setSortCode] = useState("");

  // Handling the recipeint name input field change
  const handleRecipientName = (e) => {
    e.preventDefault();
    setRecipientName(e.target.value.toString());
  };

  // Handling the account type input field change
  const handleAccountType = (e) => {
    e.preventDefault();
    setAccountType(e.target.value);
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
     
        <div className="addRecipient">
        <div className="addRecipient-box">
          <h1>Add Recipient</h1>
          <form className="addRecipient-box___form">
            {/* Labels and inputs for form data */}
            <div className="addRecipient-box__form__div">
              <label>Recipient Name</label>
              <input
                onChange={handleRecipientName}
                className="input"
                value={recipientName}
                type="text"
              />
            </div>
            <div className="addRecipient-box__form__div">
              <label>Account Type</label>
              <input
                onInput={handleAccountType}
                className="input"
                value={accountType}
              />
            </div>
            <div className="addRecipient-box__form__div">
              <label>Account Number</label>
              <div></div>
              <input
                onInput={handleAccountNum}
                className="input"
                value={accountNum}
              />
            </div>
            <div className="addRecipient-box__form__div">
              <label>Sort Code</label>
              <input
                onChange={handleSortCode}
                className="input"
                value={sortCode}
              />
            </div>
            <div className="addRecipient-box__form__separator"></div>

            <div className="buttons-group">
              <Link to="/chooserecipient">
                <button className="addRecipient-box__form__goBackBtn" type="submit">
                  Cancel
                </button>
              </Link>
              <Link to="/confirmdetails">
                <button className="addRecipient-box__form__continueBtn" type="submit">
                  Continue &#9654;
                </button>
              </Link>
            </div>
          </form>
        </div>
        </div>
    </>
  );
};

export default AddRecipient;
