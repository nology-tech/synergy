import React, { useEffect } from "react";
import { useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import FxTransaction from "../FxTransaction/FxTransaction";
import TransferAddRecipient from "../TransferAddRecipient/TransferAddRecipient";
import TransferChooseRecipient from "../TransferChooseRecipient/TransferChooseRecipient";
import TransferSendFrom from "../TransferSendFrom/TransferSendFrom";
import TransferConfirmRecipient from "../TransferConfirmRecipient/TransferConfirmRecipient";
import "./TransferMakeTransfer.scss";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import TransferTransactionSend from "../TransferTransactionSend/TransferTransactionSend";

const TransferMakeTransfer = (props) => {
  const {
    transferWorkflowStage,
    currencyBaseCode,
    currencyRecipientCode,
    amountBase,
    amountReceived,
    fxRate,
    fee,
    username,
    accountBalance,
    accountNum,
    sortCode,
    searchTerm,
    handleInput
  } = props;

  const [banks, setBanks] = useState(
      [
      {
        bankName: "",
        bankLogo: "",
      },
    ]
    );
  
    const getBanks = () => {
      
      //e.preventDefault();
      fetch("http://localhost:8080/banks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
       
      })
        .then((response) => response.json())
        .then((json) => setBanks(json))
        .catch((err) => console.log(err));

        
      //e.target.reset();
    };

    
  
   useEffect (() => getBanks(),[]);

  const accountFormTypes = true;

  // handle navigation
  const [workflowStage, setWorkflowStage] = useState("sendForm");
  console.log(workflowStage);

  //From Send Form Select Recipient
  const handleSelectRecipient = (event) => {
    setWorkflowStage("chooseContact");
  };

  //From Choose recipient to Confirmed
  const selectContact = (event) => {
    setWorkflowStage("selectContactConfirmed");
  };

  const handleGoBackToChooseContact = (event) => {
    setWorkflowStage("chooseContact");
  };

  //From Send Form Pay SomeOneNew
  const handlePaySomeOneNew = (event) => {
    setWorkflowStage("addRecipient");
    setRecipientName("");
    setAccountTypeRecipient("");
    setAccountNumRecipient("");
    setCurrencyRecipient("");
    setBankRecipient("");
    setSortCodeRecipient("");
  };

  //From Add recipient to Confirm Details
  const handleContinueButton = (event) => {
    setWorkflowStage("addRecipientConfirmed");
  };

  const handleGoBack = (event) => {
    setWorkflowStage("addRecipient");
  };

  // From Confirm Details to Send Transfer
  const handleSubmit = (event) => {
    setWorkflowStage("confirmTransferDetails");
  };

  const handleCancel = (event) => {
    setWorkflowStage("sendForm");
  };
  
  // The handleSend should go back to wallet. Currently its on send form
  const handleSend = (event) => {
    setWorkflowStage("sendForm");
    window.open('/wallet', '_blank')
  };

  //Handle black cross
  const handleCloseWindow = (event) => {
    setWorkflowStage("sendForm");
    setRecipientName("");
    setAccountTypeRecipient("");
    setAccountNumRecipient("");
    setCurrencyRecipient("");
    setBankRecipient("");
    setSortCodeRecipient("");
  };

  //Add Recipient
  const [recipientName, setRecipientName] = useState("");
  const [accountTypeRecipient, setAccountTypeRecipient] = useState();
  const [accountNumRecipient, setAccountNumRecipient] = useState();
  const [currencyRecipient, setCurrencyRecipient] = useState();
  const [bankRecipient, setBankRecipient] = useState();
  const [sortCodeRecipient, setSortCodeRecipient] = useState("");

  // Handling the recipient name input field change
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

  // Handling the account currency input field change
  const handleCurrencyRecipient = (e) => {
    e.preventDefault();
    setCurrencyRecipient(e.target.value);
  };
  
  // Handling the bank input field change
  const handleBankRecipient = (e) => {
    e.preventDefault();
    setBankRecipient(e.target.value);
  };

  // Handling the sort code input field change
  const handleSortCodeRecipient = (e) => {
    e.preventDefault();
    setSortCodeRecipient(e.target.value.toString());
  };

  const displayCurrentView = () => {
    if (workflowStage === "sendForm") {
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
    } else if (workflowStage === "addRecipient") {
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
            handleCurrencyRecipient={handleCurrencyRecipient}
            handleBankRecipient={handleBankRecipient}
            handleSortCodeRecipient={handleSortCodeRecipient}
            handleCloseWindow={handleCloseWindow}
            recipientName={recipientName}
            accountTypeRecipient={accountTypeRecipient}
            accountNumRecipient={accountNumRecipient}
            currencyRecipient={currencyRecipient}
            bankRecipient={bankRecipient}
            banks={banks}
            sortCodeRecipient={sortCodeRecipient}
          />
        </>
      );
    } else if (workflowStage === "addRecipientConfirmed") {
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
            recipientName={recipientName}
            accountTypeRecipient={accountTypeRecipient}
            accountNumRecipient={accountNumRecipient}
            currencyRecipient={currencyRecipient}
            bankRecipient={bankRecipient}
            sortCodeRecipient={sortCodeRecipient}
            handleGoBack={handleGoBack}
            handleCloseWindow={handleCloseWindow}
            handleSubmit= {handleSubmit}
            workflowStage={workflowStage}
          />
        </>
      );
    } else if (workflowStage === "chooseContact") {
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

          <TransferChooseRecipient
            handleCloseWindow={handleCloseWindow}
            selectContact={selectContact}
            workflowStage={workflowStage}
            searchTerm={searchTerm}
            handleInput={handleInput}
          />
        </>
      );
    } else if (workflowStage === "selectContactConfirmed") {
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
            handleGoBackToChooseContact={handleGoBackToChooseContact}
            handleCloseWindow={handleCloseWindow}
            handleSubmit= {handleSubmit}
          />
        </>
      );
    } else if (workflowStage === "confirmTransferDetails") {
      return (
        <>
          <div className="transfer-transaction-send">
            <TransferTransactionSend
              currencyBaseCode={currencyBaseCode}
              amountBase={amountBase}
              accountFormTypes={accountFormTypes}
              username={username}
              accountBalance={accountBalance}
              accountNum={accountNum}
              sortCode={sortCode}
              fee={fee}
              currencyRecipientCode={currencyRecipientCode}
              recipientName={recipientName}
              accountNumRecipient={accountNumRecipient}
              currencyRecipient={currencyRecipient}
              bankRecipient={bankRecipient}  
              sortCodeRecipient={sortCodeRecipient}
              amountReceived={amountReceived}
              handleCancel={handleCancel }
              handleSend= {handleSend}
            />
          </div>
        </>
      );
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
        {transferWorkflowStage === "fxTransaction" ? (
          <FxTransaction
            currencyBaseCode={currencyBaseCode}
            currencyRecipientCode={currencyRecipientCode}
            amountBase={amountBase}
            amountReceived={amountReceived}
            fxRate={fxRate}
            fee={fee}
          />
        ) : (
          <></>
        )}

        {/* Display the screen with Add recipient or Choose Recipient overlapping Send From transaction details */}
        {transferWorkflowStage === "transferSendFrom" ? (
         banks && displayCurrentView()
        ) : (
          <></>
        )}
      </main>
    </div>
  );
};

export default TransferMakeTransfer;
