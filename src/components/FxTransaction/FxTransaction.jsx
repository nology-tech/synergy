import React from "react";
import { Link } from "react-router-dom";
import "./FxTransaction.scss";
import Button from "../Button/Button";
import currencies from "../../data/currency.js";
import infosign from "../../assets/images/infosign.png";

const FxTransaction = (props) => {
  const {
    currencyBaseCode,
    currencyRecipientCode,
    amountBase,
    amountReceived,
    fxRate,
    fee,
  } = props;

  const currencyBase = currencies.filter((currency) => {
    return currency.code === currencyBaseCode;
  });

  const currencyRecipient = currencies.filter((currency) => {
    return currency.code === currencyRecipientCode;
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
            {Number(amountBase).toFixed(2)}
          </div>
        </div>
      </div>
      <div className="fx-transaction__amount">
        <h2>Recipient gets</h2>
        <div className="fx-transaction__amount__details">
          <div className="fx-transaction__amount__details__currency">
            <img
              className="fx-transaction__amount__img"
              src={currencyRecipient[0].img}
              alt="US currency"
            />
            <div className="fx-transaction__amount__name">
              {currencyRecipient[0].code} - {currencyRecipient[0].name}
            </div>
          </div>
          <div className="fx-transaction__amount__amount">
            {currencyRecipient[0].symbol}
            {Number(amountReceived).toFixed(2)}
          </div>
        </div>
      </div>
      <div className="fx-transaction__fee">
        <div className="fx-transaction__fee__details">
          <h3 className="fx-transaction__fee__details__rate">
            Rate <img className="infosign" src={infosign} alt="more info" />
          </h3>
          <p>{Number(fxRate).toFixed(4)}</p>
        </div>
        <div className="fx-transaction__fee__details">
          <h3>Fee</h3>
          <p>{currencyBase[0].symbol}{Number(fee).toFixed(2)}</p>
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
            {Number(amountBase).toFixed(2)}
          </p>
        </div>
        <div>
          <Link to="/transfer-send-from">
          <Button buttonText="Continue" />
          </Link>
          </div>
      </div>
    </div>
  );
};

export default FxTransaction;
