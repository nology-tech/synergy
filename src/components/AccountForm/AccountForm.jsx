import React from "react";
import currencies from "../../data/currency.js";
import Button from "../Button/Button";
import "./AccountForm.scss";

const AccountForm = (props) => {
  const { currencyBaseCode, amountBase, accountBalance, username, accountNum,sortCode } =
    props;
let fundsRemaining = accountBalance - amountBase

console.log (fundsRemaining)
  const currencyBase = currencies.filter((currency) => {
    return currency.code == currencyBaseCode;
  });

// const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
// const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });
// const egp = new Intl.NumberFormat('ar-EG', { style: 'currency', currency: 'EGP' });
// const eur = new Intl.NumberFormat('de-DE',{ style: 'currency', currency: 'EUR' });


  console.log(currencyBase[0].symbol);
  console.log(accountBalance);

  return (
    <div className="account-form">
      <h3 className="account-form__username">{username}</h3>
      <div className="account-form__details">
        <h3> Account Number: </h3>
        <p>{accountNum}</p>
      </div>
      <div className ="account-form__details">
        <h3 className ="account-form__details__sort-code" >Sort Code:</h3>
        <p>{sortCode}</p>
       
      </div>
      <div className="account-form__total">
        <div className="account-form__total__amount">
          <h3>Total </h3>
          <p>
            {currencyBase[0].symbol}
            {(amountBase).toLocaleString(undefined, {maximumFractionDigits: 2})}
          </p>
          
        </div>
        <div className="account-form__total__funds-rem">
          <h3>Funds Remaining:</h3>
          <p>
            {currencyBase[0].symbol}
            {(fundsRemaining).toLocaleString(undefined, {maximumFractionDigits: 2})}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
