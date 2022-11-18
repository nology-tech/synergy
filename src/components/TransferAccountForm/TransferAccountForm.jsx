import React from "react";
import currencies from "../../data/currency.js";
import Button from "../Button/Button";
import "./TransferAccountForm.scss";

const TransferAccountForm = (props) => {
  const {
    currencyBaseCode,
    amountBase,
    accountBalance,
    username,
    accountNum,
    sortCode,
  } = props;

  let fundsRemaining = accountBalance - amountBase;
  const currencyBase = currencies.filter((currency) => {
    return currency.code == currencyBaseCode;
  });

  return (
    <div className="account-form">
      <h3 className="account-form__username">{username}</h3>
      <div className="account-form__details">
        <h3> Account Number: </h3>
        <p>{accountNum}</p>
      </div>
      <div className="account-form__details">
        <h3 className="account-form__details__sort-code">Sort Code:</h3>
        <p>{sortCode}</p>
      </div>
      <div className="account-form__total">
        <div className="account-form__total__amount">
          <h3>Total </h3>
          <p>
            {currencyBase[0].symbol}
            {Number(amountBase).toFixed(2)}
          </p>
        </div>
        <div className="account-form__total__funds-rem">
          <h3>Funds Remaining:</h3>
          <p>
            {currencyBase[0].symbol}
            {Number(fundsRemaining).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransferAccountForm;
