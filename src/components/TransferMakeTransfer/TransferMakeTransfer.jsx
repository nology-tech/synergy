import React from "react";
import HeaderNav from "../HeaderNav/HeaderNav";
import NavMenu from "../NavMenu/NavMenu";
import FxTransaction from "../FxTransaction/FxTransaction";
import TransferAddRecipient from "../TransferAddRecipient/TransferAddRecipient";
import TransferSendFrom from "../TransferSendFrom/TransferSendFrom";
import TransferConfirmRecepient from "../TransferConfirmRecepient/TransferConfirmRecepient";
import "./TransferMakeTransfer.scss";

const TransferMakeTransfer = (props) => {
  const {
    transferWorkflowStage,
    currencyBaseCode,
    currencyRecepientCode,
    amountBase,
    amountReceived,
    fxRate,
    username,
    accountBalance,
    accountNum,
    sortCode,
  } = props;

  const accountFormTypes = true;

  return (
    <div>
      <HeaderNav />
      <main className="transfer-currency">
        <div className="transfer-currency__navMenu">
          <NavMenu />
        </div>
        <div className="transfer-currency__main">
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
              currencyRecepientCode={currencyRecepientCode}
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

          {/* Display the screen with Add Recepient overlapping Send From transaction details */}
          {transferWorkflowStage == "transferAddRecepient" ? (
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
              <TransferAddRecipient />
            </>
          ) : (
            <></>
          )}

          {/* Display the screen with Confirm Recepient overlapping Send From transaction details */}
          {transferWorkflowStage == "transferConfirmRecepient" ? (
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
              <TransferConfirmRecepient
                recipientName="Sarah Bernar"
                accountType="some type"
                accountNum="12345678"
                sortCode="101010"
              />
            </>
          ) : (
            <></>
          )}
        </div>
      </main>
    </div>
  );
};

export default TransferMakeTransfer;
