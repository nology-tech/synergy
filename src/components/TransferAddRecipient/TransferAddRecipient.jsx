import React from "react";
import Select from "react-select";
import "./TransferAddRecipient.scss";
import blackcross from "../../assets/images/black-cross.png";
import Button from "../Button/Button";
import currency from "../../data/currency.js";


const TransferAddRecipient = (props) => {
  const {
    recipientName,
    accountTypeRecipient,
    accountIbanRecipient,
    currencyRecipient,
    bankRecipient,
    bankDefaultRecipient,
    sortCodeRecipient,
    banks,
    handleContinueButton,
    handleCloseWindow,
    handleRecipientName,
    handleAccountTypeRecipient,
    handleAccountIbanRecipient,
    handleCurrencyRecipient,
    handleBankRecipient
  } = props;

  const currencyJSX = currency.map((currency) => (
    <option name={currency.code}>
      {" "}
      {currency.code} - {currency.name}
    </option>

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
            defaultValue={recipientName}
            type="text"
          />
          <h3>Account Type</h3>
          <input
            onInput={handleAccountTypeRecipient}
            className="input"
            defaultValue={accountTypeRecipient}
          />
          <h3>Account Number (IBAN)</h3>
          <input
            onInput={handleAccountIbanRecipient}
            className="input"
            defaultValue={accountIbanRecipient}
          />
          <h3>Account Currency</h3>
          

          {currencyRecipient ? (
            <p>{currencyRecipient}</p>
          ) : (
            <select
              onChange={handleCurrencyRecipient}
              className="input"
              defaultValue={currencyRecipient}
            >
              {currencyJSX}
            </select>
          )}

          <h3>Bank</h3>

          
          <Select
            className="input"
            onChange={(value,action) => handleBankRecipient(value) }
            defaultValue={bankDefaultRecipient}
            options={banks}
            formatOptionLabel={(bank) => (
              <div className="bank-input">                                  
                <img className="bank-input__image" src={bank.bankLogo} alt="bank-logo" />
                <span className="bank-input__name">{bank.bankName}</span>
              </div>
            )}
          />

          <h3>Sort Code</h3>
          <input
            className="input"
            defaultValue={bankRecipient ? sortCodeRecipient: ""}
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
