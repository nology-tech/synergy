import React from "react";
import UserDashboard from "../../containers/UserDashboard/UserDashboard";
import HeaderNav from "../HeaderNav/HeaderNav";
import NavMenu from "../NavMenu/NavMenu";
import FxTransaction from "../FxTransaction/FxTransaction";
import AccountForm from "../AccountForm/AccountForm";
import Button from "../Button/Button";
import "./TransferSelectCurrency.scss";

const TransferSelectCurrency = (props) => {
  const {
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
          <FxTransaction
            currencyBaseCode={currencyBaseCode}
            currencyRecepientCode={currencyRecepientCode}
            amountBase={amountBase}
            amountReceived={amountReceived}
            fxRate={fxRate}
          />
          --press continue: Send From form--
          <div className="transfer-currency__main__send-form">
            <h2>Send From</h2>
            <AccountForm
              currencyBaseCode={currencyBaseCode}
              accountBalance={accountBalance}
              amountBase={amountBase}
              accountFormTypes={accountFormTypes}
              username={username}
              accountNum={accountNum}
              sortCode={sortCode}
            />
            <div className="transfer-currency__main__send-form__to">
              <h2>To</h2>
              <div className="transfer-currency__main__send-form__to__button">
                <Button buttonText="Select Recipient" />
                <div className="transfer-currency__main__send-form__to__button--newPayee">
                  <a>+</a>
                  <p>Pay Someone New </p> 
                </div>
              </div>
            </div>
          </div>

          ---
        </div>
      </main>
    </div>
  );
};

export default TransferSelectCurrency;
