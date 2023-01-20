import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";
import FxTransaction from "../FxTransaction/FxTransaction";
import TransferAddRecipient from "../TransferAddRecipient/TransferAddRecipient";
import TransferChooseRecipient from "../TransferChooseRecipient/TransferChooseRecipient";
import TransferSendFrom from "../TransferSendFrom/TransferSendFrom";
import TransferConfirmRecipient from "../TransferConfirmRecipient/TransferConfirmRecipient";
import "./TransferMakeTransfer.scss";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import TransferTransactionSend from "../TransferTransactionSend/TransferTransactionSend";
import apiurl from "../../config/url";

const TransferMakeTransfer = (props) => {
  const {
    transferWorkflowStage,
    currencyBase,
    currencyTo,
    amountBase,
    amountReceived,
    fee,
    username,
    accountBalance,
    accountNum,
    sortCode,
    userID
  } = props;

// fetch all the banks
  const [banks, setBanks] = useState(
      [
      {
        bankName: "",
        bankLogo: "",
        sortCode: ""
            },
    ]
    );

    const navigate = useNavigate();

//accessing API to get the list of banks

    const getBanks = () => {
      fetch(`${apiurl}/banks`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
       
      })
        .then((response) => response.json())
        .then((json) => setBanks(json))
        .catch((err) => console.log(err));
    };

   useEffect (() => getBanks(),[]);


  //set variables for previous code when passing transfer currencies on an array format
  // (CurrencyBase & CurrencyTo)
  const currencyBaseCode = currencyBase.code;
  const currencyBaseSymbol = currencyBase.symbol;
  const currencyRecipientCode = currencyTo.code;
  const fxRate = currencyTo.rate;
  const currencyToSymbol = currencyTo.symbol;
  const currencyRecipient = currencyTo.code + " - "+ currencyTo.symbol;
  

  const accountFormTypes = true;

  // handle navigation
  const [workflowStage, setWorkflowStage] = useState("sendForm");

  //From Send Form Select Recipient
  const handleSelectRecipient = (event) => {
    setWorkflowStage("chooseContact");
  };

  //From Choose recipient to Confirmed
  const selectContact = (contactTo) => {
    setContactTo(contactTo);
    setRecipientName(contactTo.firstName+" "+contactTo.lastName);
    setAccountTypeRecipient(contactTo.accountType);
    setAccountNumRecipient(contactTo.account);
    setBankRecipient(contactTo.bankName);
    setSortCodeRecipient(contactTo.sortCode);
    setWorkflowStage("selectContactConfirmed");
  };

  const handleGoBackToChooseContact = (event) => {
    setWorkflowStage("chooseContact");
  };

  // From Choose Recipient from existing contact
  const [contactTo, setContactTo] = useState({account:"", firstName:"", lastName:"", accountType:"", sortCode:"", bankName:"", accountCurrency:""});

  //From Send Form Pay SomeOneNew
  const handlePaySomeOneNew = (event) => {
    setWorkflowStage("addRecipient");
    setRecipientName("");
    setAccountTypeRecipient("");
    setAccountNumRecipient("");
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
       if (workflowStage === "addRecipientConfirmed") postCreateAccount();
      setWorkflowStage("confirmTransferDetails");
    
  };

  const handleCancel = (event) => {
    setWorkflowStage("sendForm");
  };

  const postCreateAccount=()=>{

    fetch(`${apiurl}/users/${userID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userID: "",
        firstName:recipientName.split(" ",2)[0],
        lastName:recipientName.split(" ",2)[1],
        contactFlag: 1,
        email: "unknown@test.com",
        sortCode: bankRecipient.sortCode,
        accountType: accountTypeRecipient,
        currencyID:currencyRecipient
      })
    })
    .then((res) => {return res.json()})
    .then((data => {
      console.log(data.userID)
    }))
    .catch(err => console.log(err))
}


  const postTransaction=()=>{
    fetch(`${apiurl}/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        payeeAccountId:parseInt(accountNum),
        recipientAccountId:parseInt(accountNumRecipient),
        txnExchangeRate:parseFloat(fxRate),
        payeeAmount:parseFloat(amountBase),
        recipientAmount:parseFloat(amountReceived),
        payeeFees:parseFloat(fee),
        payeeTotalAmountCharged:parseFloat(amountBase + fee)

      })
    })
    .then((res) => {return res.json()})
    .then(console.log("account num" + accountNum))
    .catch(err => console.log(err))

  }
  
  // The handleSend should go back to wallet. Currently its on send form
  const handleSend = (event) => {
    setWorkflowStage("sendForm");
    postTransaction();
    navigate("/wallet");
    // window.open('/wallet', '_blank')
  };

  //Handle black cross
  const handleCloseWindow = (event) => {
    setWorkflowStage("sendForm");
    setRecipientName("");
    setAccountTypeRecipient("");
    setAccountNumRecipient("");
    setBankRecipient("");
    setBankDefaultRecipient("");
    setSortCodeRecipient("");
  };

  //Add Recipient
  const [recipientName, setRecipientName] = useState("");
  const [accountTypeRecipient, setAccountTypeRecipient] = useState();
  const [accountNumRecipient, setAccountNumRecipient] = useState();
  const [bankRecipient, setBankRecipient] = useState("");
  const [bankDefaultRecipient, setBankDefaultRecipient] = useState();
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
  
  // Handling the bank input field change
  const handleBankRecipient = (value) => {
    setBankRecipient(value.bankName);
    setSortCodeRecipient(value.sortCode);
    setBankDefaultRecipient(value);
  };

  // // Handling the sort code input field change
  // const handleSortCodeRecipient = (e) => {
  //   e.preventDefault();
  //   setSortCodeRecipient(e.target.value.toString());
  // };

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
            currencyBaseSymbol={currencyBaseSymbol}
            />
          <TransferAddRecipient
            handleContinueButton={handleContinueButton}
            handleGoBack={handleGoBack}
            handleRecipientName={handleRecipientName}
            handleAccountTypeRecipient={handleAccountTypeRecipient}
            handleAccountNumRecipient={handleAccountNumRecipient}
            handleBankRecipient={handleBankRecipient}
            handleCloseWindow={handleCloseWindow}
            recipientName={recipientName}
            accountTypeRecipient={accountTypeRecipient}
            accountNumRecipient={accountNumRecipient}
            currencyRecipient={currencyRecipient}
            bankRecipient={bankRecipient}
            bankDefaultRecipient={bankDefaultRecipient}
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
            currencyBaseSymbol={currencyBaseSymbol}
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
            currencyRecipientCode={currencyRecipientCode}
            contactTo={contactTo}
            setContactTo={setContactTo}
            userID={userID}
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
            recipientName={recipientName}
            accountTypeRecipient={accountTypeRecipient}
            accountNumRecipient={accountNumRecipient}
            currencyRecipient={currencyRecipient}
            bankRecipient={bankRecipient}
            sortCodeRecipient={sortCodeRecipient}       
            handleGoBackToChooseContact={handleGoBackToChooseContact}
            handleCloseWindow={handleCloseWindow}
            handleSubmit= {handleSubmit}
          />
        </>
      );
    } else if (workflowStage === "confirmTransferDetails") {
      return (
        <>
            <TransferTransactionSend
              currencyBaseCode={currencyBaseCode}
              fxRate={fxRate}
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
              currencyBaseSymbol={currencyBaseSymbol}
              currencyToSymbol={currencyToSymbol}
            />
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
        <DashboardHeader username={username} />
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
            currencyBase={currencyBase}
            currencyRecipient={currencyTo}
            amountBase={amountBase}
            amountReceived={amountReceived}
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
