import React from "react";
import "./TransferConfirmRecipient.scss"
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import blackcross from "../../assets/images/black-cross.png"

const TransferConfirmRecepient = (props) => {
  const {linkToCloseTheWindow, 
    linkToGoBack, 
    linkToProceed, 
    recipientName,
    accountType,
    accountNum,
    sortCode,
   } = props;

  return (
    <>
      <div className="transfer-confirm-recepient"></div>
      <div className="transfer-confirm-recepient__main">
      <Link to={linkToCloseTheWindow}>
      <img
          src={blackcross}
          alt="Close menu"
          className="blackcross"
        />
        </Link>
        <h1>Confirm Details</h1>
        <div className="transfer-confirm-recepient__main__details">
          <h3>Recipient Name</h3>
          <p>{recipientName} </p>
          <h3>Account Type</h3>
          <p>{accountType}</p>
          <h3>Account Number</h3>
          <p>{accountNum}</p>
          <h3>Sort Code</h3>
          <p>{sortCode}</p>
        </div>
        <div className="transfer-confirm-recepient__main__options">
          <Link
            className="transfer-confirm-recepient__main__options__cancel"
            to={linkToGoBack}
          >
            Go Back
          </Link>
          <Link to={linkToProceed}>
            <button>Submit</button>
            {/* <Button
              buttomImg={""}
              buttonStyle={"button-light-blue"}
              isDisabled={false}
              buttonType={""}
              buttonText={"Submit"}
            /> */}
          </Link>
        </div>
      </div>
    </>
  );
};

export default TransferConfirmRecepient;
