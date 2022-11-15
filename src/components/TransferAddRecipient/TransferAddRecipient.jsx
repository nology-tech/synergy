import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./TransferAddRecipient.scss";
import blackcross from "../../assets/images/black-cross.png"
import Button from "../Button/Button";

const TransferAddRecipient = (props) => {
  const{toggleRecipient} = props
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
      <div className="transfer-add-recipient"></div>
      <div className="transfer-add-recipient__main">
      <img
          src={blackcross}
          alt="Close menu"
          className="blackcross"
          onClick={toggleRecipient}
        />
        <h1>Add Recipient</h1>
        <div className="transfer-add-recipient__main__details">
          <h3>Recipient Name</h3>
          <input
            onChange={handleRecipientName}
            className="input"
            value={recipientName}
            type="text"
          />
          <h3>Account Type</h3>
          <input
            onInput={handleAccountType}
            className="input"
            value={accountType}
          />
          <h3>Account Number</h3>
          <input
            onInput={handleAccountNum}
            className="input"
            value={accountNum}
          />
          <h3>Sort Code</h3>
          <input onChange={handleSortCode} className="input" value={sortCode} />
        </div>
        <div className="transfer-add-recipient__main__options">
          <Link
            className="transfer-add-recipient__main__options__cancel"
            to="/chooserecipient"
          >
            Cancel
          </Link>
          <Link to="/transfer-confirm-recepient">
            <Button
              buttomImg={""}
              buttonStyle={"button-light-blue"}
              isDisabled={false}
              buttonType={""}
              buttonText={"Continue"}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TransferAddRecipient;
