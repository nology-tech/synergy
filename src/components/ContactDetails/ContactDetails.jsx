import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/sass/_dashboard.scss";
import Button from "../Button/Button";
import TransactionList from "../TransactionList/TransactionList";
import "./ContactDetails.scss";

const ContactDetails = (props) => {
  const {
    transactionsArray,
    //   recipientName,
    //   sortCodeRecipient,
    //   accountNumRecipient,
    //   accountIBANRecipient,
  } = props;

  const recipientName = "Ollies Worth";
  const sortCodeRecipient = "10035745";
  const accountNumRecipient = "1000002";
  const accountIBANRecipient = "GB10HLFX1100011000005";

  return (
    <div className="contact-details-transactions">
      <div className="contact-details-transactions__header">
        <h2>{"Contacts / " + recipientName}</h2>
        <h1>Account Details</h1>
      </div>
      <div className="contact-details-transactions__main">
        <div className="contact-details">
          <div className="contact-details__account-recipient">
            <h3 className="contact-details__account-recipient__details">
              {recipientName}
            </h3>
            <div className="contact-details__account-recipient__details">
              <h3>Sort Code:</h3>
              <p>{sortCodeRecipient}</p>
            </div>
            <div className="contact-details__account-recipient__details">
              <h3> Account Number: </h3>
              <p>{accountNumRecipient}</p>
            </div>
            <div className="contact-details__account-recipient__details">
              <h3> IBAN: </h3>
              <p>{accountIBANRecipient}</p>
            </div>
          </div>
          <div className="contact-details__blankSpace"></div>
          <div className="contact-details__buttons">
            <h2>{"Want to make transfer?"}</h2>
            <Link to="/currencyconverter">
              <Button buttonStyle={"btn button-blue"} buttonText={"Transfer"} />
            </Link>
          </div>
        </div>
        <div className="contact-details__blankSpace"></div>
        <div className="transaction-details">
          <TransactionList transactionsArray={transactionsArray} />
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="contact-details">
  //     <div className="contact-details__header">
  //       <h2>{"Contacts / " + recipientName}</h2>
  //       <h1>Account Details</h1>
  //     </div>
  //     <div className="transaction-details_main">
  //       <div className="contact-details__main">
  //         <div className="contact-details__account-recipient">
  //           <h3 className="contact-details__account-recipient__recusername">
  //             {recipientName}
  //           </h3>
  //           <div className="contact-details__account-recipient__details">
  //             <h3>Sort Code:</h3>
  //             <p>{sortCodeRecipient}</p>
  //           </div>
  //           <div className="contact-details__account-recipient__details">
  //             <h3> Account Number: </h3>
  //             <p>{accountNumRecipient}</p>
  //           </div>
  //           <div className="contact-details__account-recipient__details">
  //             <h3> IBAN: </h3>
  //             <p>{accountIBANRecipient}</p>
  //           </div>
  //         </div>
  //         <div className="contact-details__buttons">
  //           <h2>{"Want to make transfer?"}</h2>
  //           <Link to="/currencyconverter">
  //             <Button buttonStyle={"btn button-blue"} buttonText={"Transfer"} />
  //           </Link>
  //         </div>
  //       </div>
  //       <div className="transaction-details">
  //         <TransactionList transactionsArray={transactionsArray} />
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default ContactDetails;
