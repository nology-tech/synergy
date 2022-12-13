import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/sass/_dashboard.scss";
import NavMenu from "../NavMenu/NavMenu";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import ContactContainer from "../../containers/ContactContainer/ContactContainer";
import Button from "../Button/Button";
import "./ContactDetails.scss";

const ContactDetails = (props) => {
  const {
    username,
  //   recipientName,
  //   sortCodeRecipient,
  //   accountNumRecipient,
  //   accountIBANRecipient,
  } = props;

  const recipientName= "Ollies Worth";
  const sortCodeRecipient= "10035745";
  const accountNumRecipient= "1000002";
  const accountIBANRecipient= "GB10HLFX1100011000005";

  
  const [walletOn, setWalletOn] = useState(true);
   

  return (
    <div className="contact-details">
      <NavMenu />
      <div className="dashboardPage__right">
        <DashboardHeader username={username} />
        <div className="contact-details__contactName">
          <h2>{"Contacts / " + recipientName}</h2>
        </div>
        <div className="contactDetals__main">
          <h1>Accout Details</h1>
          <div className="contact-details__account-recipient">
            <h3 className="contact-details__account-recipient__recusername">
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
              <p>{accountNumRecipient}</p>
            </div>
          </div>
        </div>
        <div className="contact-details__buttons">
          <h2>{"Want to make transfer?"}</h2>
          <Link to="/currencyconverter">
            <Button
              buttonStyle={"btn button-blue"}
              buttonText={"Transfer"}
            />
          </Link>
        </div>
        <div className="contact-details_contacts">
          {" "}
          <ContactContainer walletOn = {walletOn} />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
