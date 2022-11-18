import React from "react";
import { useState } from "react";
import HeaderNav from "../HeaderNav/HeaderNav";
import NavMenu from "../NavMenu/NavMenu";
import FxTransaction from "../FxTransaction/FxTransaction";
import TransferAddRecipient from "../TransferAddRecipient/TransferAddRecipient";
import TransferChooseRecipient from "../TransferChooseRecipient/TransferChooseRecipient";
import TransferSendFrom from "../TransferSendFrom/TransferSendFrom";
import TransferConfirmRecipient from "../TransferConfirmRecipient/TransferConfirmRecipient";
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

  // handle navigation
  const [workflowStage, setWorkflowStage] = useState("sendForm");
  console.log(workflowStage);

  //From Send Form Select Recipient

  const handleSelectRecipient = (event) => {
    setWorkflowStage("chooseContact")
  }

  //From Send Form Pay SomeOneNew
  const handlePaySomeOneNew = (event) => {
    setWorkflowStage("addRecipient");
    setRecipientName("");
    setAccountTypeRecipient("");
    setAccountNumRecipient("");
    setSortCodeRecipient("");
  };


  //From Add recipient to Confirmed
  const handleContinueButton = (event) => {
    setWorkflowStage("addRecipientConfirmed");
  };
 
  const handleGoBack = (event) => {
    setWorkflowStage("addRecipient");
  };


  //From Choose recipient to Confirmed

  const selectContact = (event) => {
    setWorkflowStage("selectContactConfirmed");
  };
 
  const handleGoBackToChooseContact = (event) => {
    setWorkflowStage("chooseContact");
  };

//Handle black cross

const handleCloseWindow = (event) => {
  setWorkflowStage("sendForm");
  setRecipientName("");
  setAccountTypeRecipient("");
  setAccountNumRecipient("");
  setSortCodeRecipient("");
}

  //Add Recepient

  const [recipientName, setRecipientName] = useState("");
  const [accountTypeRecipient, setAccountTypeRecipient] = useState();
  const [accountNumRecipient, setAccountNumRecipient] = useState();
  const [sortCodeRecipient, setSortCodeRecipient] = useState("");

  // Handling the recipeint name input field change
  const handleRecipientName = (e) => {
    e.preventDefault();
    setRecipientName(e.target.value.toString());
  };

  // Handling the account type input field change
  const handleAccountTypeRecipient = (e) => {
    e.preventDefault();
    setAccountTypeRecipient(e.target.value);
  };

  // Handling the account number input field change
  const handleAccountNumRecipient = (e) => {
    e.preventDefault();
    setAccountNumRecipient(e.target.value);
  };

  // Handling the sort code input field change
  const handleSortCodeRecipient = (e) => {
    e.preventDefault();
    setSortCodeRecipient(e.target.value.toString());
  };

  const displayCurrentView = () => {
    if (workflowStage == "sendForm") {
      return (
        <TransferSendFrom
          currencyBaseCode={currencyBaseCode}
          accountBalance={accountBalance}
          amountBase={amountBase}
          accountFormTypes={accountFormTypes}
          username={username}
          accountNum={accountNum}
          sortCode={sortCode}
          handlePaySomeOneNew={handlePaySomeOneNew}
          onClick={handleSelectRecipient}
        />
      );
    } else if (workflowStage == "addRecipient") {
      return (
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
          <TransferAddRecipient
            handleContinueButton={handleContinueButton}
            handleGoBack={handleGoBack}
            handleRecipientName={handleRecipientName}
            handleAccountTypeRecipient={handleAccountTypeRecipient}
            handleAccountNumRecipient={handleAccountNumRecipient}
            handleSortCodeRecipient={handleSortCodeRecipient}
            handleCloseWindow={handleCloseWindow}
            recipientName={recipientName}
            accountTypeRecipient={accountTypeRecipient}
            accountNumRecipient={accountNumRecipient}
            sortCodeRecipient={sortCodeRecipient}
          />
        </>
      );
    } else if (workflowStage == "addRecipientConfirmed") {
      return (
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
            linkToProceed="needToAdd"
            recipientName={recipientName}
            accountTypeRecipient={accountTypeRecipient}
            accountNumRecipient={accountNumRecipient}
            sortCodeRecipient={sortCodeRecipient}
            handleGoBack={handleGoBack}
            handleCloseWindow={handleCloseWindow}
            workflowStage={workflowStage}
          />
        </>
      );
    }
    else if (workflowStage == "chooseContact"){
      return (<>
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
              handleCloseWindow={handleCloseWindow}
              selectContact={selectContact}
              workflowStage={workflowStage}
            />
      
      </>)
    }

    else if(workflowStage == "selectContactConfirmed") {
      return (<>
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
              handleGoBackToChooseContact={handleGoBackToChooseContact}
              handleCloseWindow={handleCloseWindow}
            />
      </>)
    }
  };

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
            tincidunt tincidunt justo sed vestibulum. Sed mollis, magna sit amet
            finibus finibus, eros ligula aliquet dolor, at mollis risus magna in
            lacus.
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

        {/* Display the screen with Add recipient or Choose Recipient overlapping Send From transaction details */}
        {transferWorkflowStage == "transferSendFrom" ? (
          displayCurrentView()
        ) : (
          <></>
        )}

      </main>
    </div>
  );
};

export default TransferMakeTransfer;
