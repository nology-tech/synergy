import React, {useState} from "react";
import "./TransferAddRecipient.scss";
import blackcross from "../../assets/images/black-cross.png";
import Button from "../Button/Button";
import currency from "../../data/currency.js";
import banks from "../../data/banks.js";

const TransferAddRecipient = (props) => {
  const {
    recipientName,
    accountTypeRecipient,
    accountNumRecipient,
    currencyRecipient,
    bankRecipient,
    sortCodeRecipient,
    handleContinueButton,
    handleCloseWindow,
    handleRecipientName,
    handleAccountTypeRecipient,
    handleAccountNumRecipient,
    handleCurrencyRecipient,
    handleBankRecipient,
    handleSortCodeRecipient,
  } = props;

  const [contact, setContact] = useState({
    firstName: recipientName,
    lastName: "",
    email:"",
    address_houseNum:"",
    address_streetName:"",
    address_city:"",
    address_postCode:"",
    contactFlag:1
  })

  const currencyJSX = currency.map((currency) => (
    <option name={currency.code}>
      {" "}
      {currency.code} - {currency.name}
    </option>
  ));

  const bankJSX = banks.map((bank) => (
    <option name={bank.bankName}>{bank.bankName}</option>
  ));

  return (
    <>
      <div className="transfer-add-recipient"></div>
      <div className="transfer-add-recipient__main">
        <img
          src={blackcross}
          alt="Close menu"
          className="blackcross"
          onClick={handleCloseWindow}
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
            onInput={handleAccountTypeRecipient}
            className="input"
            value={accountTypeRecipient}
          />
          <h3>Account Number</h3>
          <input
            onInput={handleAccountNumRecipient}
            className="input"
            value={accountNumRecipient}
          />
          <h3>Account Currency</h3>
          {/* <input onChange={handleCurrencyRecipient} className="input" 
          value={currencyRecipient}
           /> */}
          {currencyRecipient ? (
            <p>{currencyRecipient}</p>
          ) : (
            <select
              onChange={handleCurrencyRecipient}
              className="input"
              value={currencyRecipient}
            >
              {currencyJSX}
            </select>
          )}

          <h3>Bank</h3>
          {/* <input onChange={handleBankRecipient} className="input" 
          value={bankRecipient}
           /> */}
          <select
            onChange={handleBankRecipient}
            className="input"
            value={bankRecipient}
          >
            {bankJSX}
          </select>
          <h3>Sort Code</h3>
          <input
            onChange={handleSortCodeRecipient}
            className="input"
            value={sortCodeRecipient}
          />
        </div>
        <div className="transfer-add-recipient__main__options">
          <a
            className="transfer-add-recipient__main__options__cancel"
            onClick={handleCloseWindow}
          >
            Cancel
          </a>
          <Button
            buttonStyle={"btn button-blue"}
            buttonText={`Continue ▶`}
            onClick={handleContinueButton}
          />
        </div>
      </div>
    </>
  );
};

export default TransferAddRecipient;
