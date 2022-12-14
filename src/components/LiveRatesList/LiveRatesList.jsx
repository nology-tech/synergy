import React, { useState } from "react";
import "./LiveRatesList.scss";
import Button from "../Button/Button";
import Search from "../Search/Search";

// LiveRates table currently sets USD as primary currency with visual bar
// The rest of the table shows other currencies rates compared to USD currency
// FUTURE  STATE: Edit button needs to enable choice of primary currency

const LiveRatesList = (props) => {
  const { currency, onSelect} = props;

  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const baseCurrency = currency[0].code.toLowerCase();

  // Filter contact using search
  const filteredCurrencyArray = currency.filter((currencyItem) => {
    const currencyName = currencyItem.name.toLowerCase();
    const currencyCode = currencyItem.code.toLowerCase();
    return (
      currencyName.includes(searchTerm) || currencyCode.includes(searchTerm) || currencyCode.includes(baseCurrency)
    );
  });

  const currencyJSX = filteredCurrencyArray.map((currency, index) => (
    <div
      className={
        index === 0
          ? "currency-row currency-list__items row-blue"
          : "currency-row currency-list__items row-grey"
      }
      key={currency.code}
    >
      <img
        className="currency-list__img"
        src={currency.img}
        alt="US currency"
      />
      <div className="currency-list__name">{currency.name}</div>
      <div className="currency-list__code">{currency.code}</div>
      <div className="currency-list__rate">{currency.rate}</div>
      <Button
        buttonStyle={
          index === 0
            ? "btn button-blue-disabled"
            : "btn button-blue-white-border"
        }
        buttonText={index === 0 ? "" : "Select"}
        onClick={() => onSelect(currency)}
      />
      {/* <button className="button primary">{index===0?"Edit":"Send"}</button> */}
    </div>
  ));
  return (
    <>
      <div className="live-rates-head">
        <h2 className="live-rates-head__h2">View Latest Rates</h2>
        <div className="live-rates-head__search">
          <p className="live-rates-head__search__para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            voluptatem quidem? Corporis, odio vero sequi vitae deleniti sit quod
            quae! Autem unde reiciendis sunt porro obcaecati alias fugiat quod
            aliquid!
          </p>
          <div className="live-rates-head__search__item">
            <Search searchTerm={searchTerm} handleInput={handleInput} />
          </div>

        </div>
      </div>

      <div className="currency-row currency-list__heading">
        <div className="empty-div"></div>
        <div className="currency-list__name">Currency</div>
        <div className="currency-list__code">Code</div>
        <div className="currency-list__rate">Rate</div>
      </div>
      <div>{currencyJSX}</div>
      <Button
        buttonStyle={"btn button-dashed  button secondary"}
        isDisabled={false}
        buttonText={"Add Currency"}
      />
    </>
  );
};

export default LiveRatesList;
