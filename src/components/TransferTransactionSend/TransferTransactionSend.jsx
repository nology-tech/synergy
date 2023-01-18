import React from "react";
import Button from "../Button/Button";
import TransferAccountForm from "../TransferAccountForm/TransferAccountForm";
// import currencies from "../../data/currency.js";
import infosign from "../../assets/images/infosign.png";
import "./TransferTransactionSend.scss";
import { FiSend } from "react-icons/fi";

const TransferTransactionSend = (props) => {
  const {
    currencyBaseCode,
    amountBase,
    fxRate,
    fee,
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
    currencyBaseSymbol,
    currencyToSymbol
  } = props;

  const buttonSend = <FiSend />;
  

  const totalToPay = Number(amountBase) + Number(fee);

  return (
    <>
      <div className="transfer-transaction-send">
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
          <h3 className="transfer-transaction-send__account-recipient__recusername">
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
            <p>
              {currencyBaseSymbol}
              {Number(fee).toFixed(2)}
            </p>
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
              {currencyBaseSymbol}
              {Number(totalToPay).toFixed(2)}
            </p>
          </div>
          <div className="transfer-transaction-send__total__funds-recipient">
            <h3>Recipient Receives:</h3>
            <p>
              {currencyToSymbol}
              {Number(amountReceived).toFixed(2)}
            </p>
          </div>
        </div>
        <div className="transfer-transaction-send__main__options">
          <a
            // className="transfer-transaction-send__main__options__cancel"
            onClick={handleCancel}
          >
            Cancel
          </a>
          <Button
            buttonStyle={"btn button-blue"}
            buttonText={"Send"}
            buttonImg={buttonSend}
            onClick={handleSend}
          />
          {/* </Link>          */}
        </div>
      </div>
    </>
  );
};

export default TransferTransactionSend;
