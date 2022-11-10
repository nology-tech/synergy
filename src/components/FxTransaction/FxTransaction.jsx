import React from "react";
import "./FxTransaction.scss";
import Button from "../Button/Button";
import currencies from "../../data/currency.js";
import infosign from "../../assets/images/infosign.png";

const FxTransaction = (props) => {
  const {
    currencyBaseCode,
    currencyRecepientCode,
    amountBase,
    amountReceived,
    fxRate,
  } = props;

  const currencyBase = currencies.filter((currency) => {
    return currency.code == currencyBaseCode;
  });

  console.log(currencyBase[0].img);
  console.log(currencyBase[0].code);
  console.log(currencyBase[0].name);
  console.log(currencyBase[0].symbol);
  console.log(amountBase);

  const currencyRecepient = currencies.filter((currency) => {
    return currency.code == currencyRecepientCode;
  });

  return (
    <div className="fx-transaction">
      <div className="fx-transaction__amount">
        <h2>You send</h2>
        <div className="fx-transaction__amount__details">
          <div className="fx-transaction__amount__details__currency">
            <img
              className="fx-transaction__amount__img"
              src={currencyBase[0].img}
              alt="US currency"
            />
            <div className="fx-transaction__amount__name">
              {currencyBase[0].code} - {currencyBase[0].name}
            </div>
          </div>
          <div className="fx-transaction__amount__amount">
            {currencyBase[0].symbol}
            {amountBase}
          </div>
        </div>
      </div>
      <div className="fx-transaction__amount">
        <h2>Recepient gets</h2>
        <div className="fx-transaction__amount__details">
          <div className="fx-transaction__amount__details__currency">
            <img
              className="fx-transaction__amount__img"
              src={currencyRecepient[0].img}
              alt="US currency"
            />
            <div className="fx-transaction__amount__name">
              {currencyRecepient[0].code} - {currencyRecepient[0].name}
            </div>
          </div>
          <div className="fx-transaction__amount__amount">
            {currencyRecepient[0].symbol}
            {amountReceived}
          </div>
        </div>
      </div>
      <div className="fx-transaction__fee">
        <div className="fx-transaction__fee__details">
          <h3 className="fx-transaction__fee__details__rate">
            Rate <img className="infosign" src={infosign} alt="more info" />
          </h3>
          <p>{fxRate}</p>
        </div>
        <div className="fx-transaction__fee__details">
          <h3>Fee</h3>
          <p>{currencyBase[0].symbol}0.00</p>
        </div>
        <div className="fx-transaction__fee__details">
          <h3>Delivery</h3>
          <p>Typically same day</p>
        </div>
      </div>
      <div className="fx-transaction__total">
        <div className="fx-transaction__total-amount">
          <h3>Total</h3>
          <p>
            {currencyBase[0].symbol}
            {amountBase}
          </p>
        </div>
        <div><Button buttonText="Continue" /></div>
      </div>
    </div>
  );
};

export default FxTransaction;
