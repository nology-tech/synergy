import React from "react";
import { useState } from "react";
import HeaderNav from "../HeaderNav/HeaderNav";
import NavMenu from "../NavMenu/NavMenu";
import FxTransaction from "../FxTransaction/FxTransaction";
import TransferAddRecipient from "../TransferAddRecipient/TransferAddRecipient";
import TransferChooseRecipient from "../TransferChooseRecipient/TransferChooseRecipient";
import TransferSendFrom from "../TransferSendFrom/TransferSendFrom";
import TransferConfirmRecipient from "../TransferConfirmRecipient/TransferConfirmRecipient"
import "./TransferMakeTransfer.scss";
import DashboardHeader from "../DashboardHeader/DashboardHeader";


const TransferMakeTransfer = (props) => {
  const {
    transferWorkflowStage,
    currencyBaseCode,
    currencyRecipientCode,
    amountBase,
    amountReceived,
    fxRate,
    username,
    accountBalance,
    accountNum,
    sortCode,
  } = props;

  const accountFormTypes = true;

  const [workflowStage, setWorkflowStage] = useState("addRecipient");  

  const handlePaySomeOneNew = (event) => {
    setWorkflowStage("addRecipientConfirmed");
  }
  console.log(workflowStage);

  
  const handleGoBack = (event) => {
    setWorkflowStage("addRecipient");
  }

  return (
      <div className="transfer-currency">
        <div className="transfer-currency__navMenu">
          <NavMenu />
        </div>
        <main className="transfer-currency__main">
        <DashboardHeader />
          <div className="transfer-currency__main__header">
            <h2>Transfer</h2>
            <h1>Make Transfer</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tincidunt tincidunt justo sed vestibulum. Sed mollis, magna sit
              amet finibus finibus, eros ligula aliquet dolor, at mollis risus
              magna in lacus.
            </p>
          </div>

          {/* Display the screen with FX transaction details */}
          {transferWorkflowStage == "fxTransaction" ? (
            <FxTransaction
              currencyBaseCode={currencyBaseCode}
              currencyRecipientCode={currencyRecipientCode}
              amountBase={amountBase}
              amountReceived={amountReceived}
              fxRate={fxRate}
            />
          ) : (
            <></>
          )}

          {/* Display the screen with Send From details */}
          {transferWorkflowStage == "transferSendFrom" ? (
            <TransferSendFrom
              currencyBaseCode={currencyBaseCode}
              accountBalance={accountBalance}
              amountBase={amountBase}
              accountFormTypes={accountFormTypes}
              username={username}
              accountNum={accountNum}
              sortCode={sortCode}
            />
          ) : (
            <></>
          )}

           {/* Display the screen with Choose recipient overlapping Send From transaction details */}

           {transferWorkflowStage == "transferChooseRecipient" ? (
            <>
              <TransferSendFrom
                currencyBaseCode={currencyBaseCode}
                accountBalance={accountBalance}
                amountBase={amountBase}
                accountFormTypes={accountFormTypes}
                username={username}
                accountNum={accountNum}
                sortCode={sortCode}
              />
              
              <TransferChooseRecipient
              linkToCloseTheWindow = "/transfer-send-from"
              linkToProceed = "/transfer-confirm-recipient"
              />
              <TransferConfirmRecipient/>

            </>
          ) : (
            <></>
          )}

          {/* Display the screen with Add recipient overlapping Send From transaction details */}
          {transferWorkflowStage == "transferAddRecipient" ? (
            <>
              <TransferSendFrom
                currencyBaseCode={currencyBaseCode}
                accountBalance={accountBalance}
                amountBase={amountBase}
                accountFormTypes={accountFormTypes}
                username={username}
                accountNum={accountNum}
                sortCode={sortCode}
              />
              {workflowStage=="addRecipient"?
              (<TransferAddRecipient
                linkToCloseTheWindow = "/transfer-send-from"
                linkToGoBack = "/transfer-send-from"
                linkToProceed = "/transfer-confirm-recipient"
                handlePaySomeOneNew ={handlePaySomeOneNew}
                handleGoBack={handleGoBack}
              />):(<TransferConfirmRecipient/>)}
            </>
          ) : (
            <></>
          )}

          {/* Display the screen with Confirm recipient overlapping Send From transaction details */}
          {transferWorkflowStage == "transferConfirmRecipient" ? (
            <>
              <TransferSendFrom
                currencyBaseCode={currencyBaseCode}
                accountBalance={accountBalance}
                amountBase={amountBase}
                accountFormTypes={accountFormTypes}
                username={username}
                accountNum={accountNum}
                sortCode={sortCode}
              />
              <TransferConfirmRecipient
                linkToCloseTheWindow = "/transfer-send-from"
                linkToGoBack = "/transfer-add-recipient"
                linkToProceed = "/transfer-completed"
                recipientName="Sarah Bernar"
                accountType="some type"
                accountNum="12345678"
                sortCode="101010"
                
              />
            </>
          ) : (
            <></>
          )}
        
      </main>
    </div>
  );
};

export default TransferMakeTransfer;
