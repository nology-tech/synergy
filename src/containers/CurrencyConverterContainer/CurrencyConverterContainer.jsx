import React from "react";
import "./CurrencyConverterContainer.scss";
import NavMenu from "../../components/NavMenu/NavMenu";
import LiveRatesList from "../../components/LiveRatesList/LiveRatesList";
import CurrencyConverter from "../../components/CurrencyConverter/CurrencyConverter";
import "../../assets/sass/_dashboard.scss";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";

const CurrencyConverterContainer = (props) => {
  const {
    username,
    amount,
    setAmount,
    baseCurrency,
    toCurrency,
    setToCurrency,
    setBaseCurrency,
    convertedAmount,
    setConvertedAmount,
    fxRate,
    setFxRate,
    currency,
    amountCode,
    setAmountCode,
    accountBalance,
  } = props;

  const selectToCurrency = (currency) => {
    setToCurrency(currency);
  };

  return (
    <div className="dashboardPage">
      <NavMenu />
      <div className="dashboardPage__right">
        <DashboardHeader username={username} />
        <CurrencyConverter
          amount={amount}
          setAmount={setAmount}
          accountBalance={accountBalance}
          baseCurrency={baseCurrency}
          setBaseCurrency={setBaseCurrency}
          toCurrency={toCurrency}
          convertedAmount={convertedAmount}
          setConvertedAmount={setConvertedAmount}
          fxRate={fxRate}
          setFxRate={setFxRate}
          amountCode={amountCode}
          setAmountCode={setAmountCode}
        />
        <div className="liveRates">
          <LiveRatesList currency={currency} onSelect={selectToCurrency} />
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverterContainer;
