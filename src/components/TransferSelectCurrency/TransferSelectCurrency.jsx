import React from "react";
import UserDashboard from "../../containers/UserDashboard/UserDashboard";
import HeaderNav from "../HeaderNav/HeaderNav";
import NavMenu from "../NavMenu/NavMenu";
import FxTransaction from "../FxTransaction/FxTransaction";
import "./TransferSelectCurrency.scss";

const TransferSelectCurrency = (props) => {
  const {
    currencyBaseCode,
    currencyRecepientCode,
    amountBase,
    amountReceived,
    fxRate,
  } = props;

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
          <div>
            <FxTransaction
              currencyBaseCode={currencyBaseCode}
              currencyRecepientCode={currencyRecepientCode}
              amountBase={amountBase}
              amountReceived={amountReceived}
              fxRate={fxRate}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default TransferSelectCurrency;
