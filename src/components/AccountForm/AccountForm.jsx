import React from "react";
import currencies from "../../data/currency.js";
import Button from "../Button/Button";
import "./AccountForm.scss";

const AccountForm = (props) => {
  const { currencyBaseCode, amountBase, accountBalance, accountFormTypes } =
    props;

  const currencyBase = currencies.filter((currency) => {
    return currency.code == currencyBaseCode;
  });

  console.log(currencyBase[0].symbol);
  console.log(amountBase);

  return (
    <div className="account-form">
      <h2 className="account-form__username">Samantha Brooks</h2>
      <div className="account-form__details">
        <h3>Account Number </h3>
        <p>10840366</p>
      </div>
      <div className ="account-form__details">
        <h3>Sort Code </h3>
        <p>110053</p>
      </div>
      <div>
        <div>
          <h3>Total </h3>
          <p>
            {currencyBase[0].symbol}
            {amountBase}
          </p>
        </div>
        <div>
          <h4>Funds Remaining</h4>
          <p>
            {currencyBase[0].symbol}
            {accountBalance}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
