import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import TransferAccountForm from "../TransferAccountForm/TransferAccountForm";
import currencies from "../../data/currency.js";
import infosign from "../../assets/images/infosign.png";
import "./TransferTransactionSend.scss";

const TransferTransactionSend = (props) => {
  const {
    currencyBaseCode,
    amountBase,
    fxRate,
    accountFormTypes,
    username,
    accountBalance,
    accountNum,
    sortCode,
    currencyRecipientCode,
    recipientName,
    accountNumRecipient,
    sortCodeRecipient,
    amountReceived,
    handleCancel,
    handleSend,
  } = props;
  const currencyBase = currencies.filter((currency) => {
    return currency.code == currencyBaseCode;
  });

  const currencyRecipient = currencies.filter((currency) => {
    return currency.code == currencyRecipientCode;
  });

  return (
    <>
      <div clasName="transfer-transaction-send">
        <h2>Send From</h2>
        <TransferAccountForm
          currencyBaseCode={currencyBaseCode}
          accountBalance={accountBalance}
          amountBase={amountBase}
          accountFormTypes={accountFormTypes}
          username={username}
          accountNum={accountNum}
          sortCode={sortCode}
        />
        <h2>To</h2>
        <div className="transfer-transaction-send__account-recipient">
          <h3 className="transfer-transaction-send__account-recipient__username">
            {recipientName}
          </h3>
          <div className="transfer-transaction-send__account-recipient__details">
            <h3> Account Number: </h3>
            <p>{accountNumRecipient}</p>
          </div>
          <div className="transfer-transaction-send__account-recipient__details">
            <h3 className="transfer-transaction-send__account-recipient__details__sort-code">
              Sort Code:
            </h3>
            <p>{sortCodeRecipient}</p>
          </div>
        </div>
        <div className="transfer-transaction-send__fee">
        <div className="transfer-transaction-send__fee__details">
          <h3 className="transfer-transaction-send__fee__details__rate">
            Rate <img className="infosign" src={infosign} alt="more info" />
          </h3>
          <p>{fxRate}</p>
        </div>
        <div className="transfer-transaction-send__fee__details">
          <h3>Fee</h3>
          <p>{currencyBase[0].symbol}0.00</p>
        </div>
        <div className="transfer-transaction-send__fee__details">
          <h3>Delivery</h3>
          <p>Typically same day</p>
        </div>
        </div>

        <div className="transfer-transaction-send__total">
          <div className="transfer-transaction-send__total_pay-amount">
            <h3>Total to Pay</h3>
            <p>
              {currencyBase[0].symbol}
              {(amountBase).toFixed(2)}
            </p>
          </div>
          <div className="transfer-transaction-send__total__funds-recipient">
            <h3>Recipient Receives:</h3>
            <p>
              {currencyRecipient[0].symbol}
              {(amountReceived).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <div className="transfer-transaction-send__main__options">
      {/* <Link to="/transfer-fx-transaction"> */}
        <a
          className="transfer-transaction-send__main__options__cancel"
          onClick={handleCancel}
        >
          Cancel
        </a>
        {/* </Link>   */}
        <Link to="/dashboard/wallet">
        <Button
          buttomImg={""}
          buttonStyle={"button-light-blue"}
          isDisabled={false}
          buttonType={""}
          buttonText={"Send"}
          // onClick={handleSend}
        />
         </Link>         
      </div>
    </>
  );
};

export default TransferTransactionSend;
