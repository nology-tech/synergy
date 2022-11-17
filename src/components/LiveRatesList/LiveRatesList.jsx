import React from "react";
import "./LiveRatesList.scss";
import Button from "../Button/Button";

// LiveRates table currently sets USD as primary currency with visual bar 
// The rest of the table shows other currencies rates compared to USD currency
// FUTURE  STATE: Edit button needs to enable choice of primary currency

const LiveRatesList = (props) => {
  const { currency, onSelect } = props;
  const currencyJSX = currency.map((currency, index) => (
    <div className={index===0?"currency-row currency-list__items row-blue":"currency-row currency-list__items row-grey"} key={currency.id}>
      <img className= "currency-list__img" src={currency.img} alt="US currency" />
      <div className="currency-list__name">{currency.name}</div>
      <div className="currency-list__amount">{currency.amount}</div>
      <div className="currency-list__rate">{currency.rate}</div>
      <Button
        buttonStyle={index===0?"btn button-blue-disabled":"btn button-blue-white-border"}
        buttonText={index===0?"":"Select"}
        onClick={() => onSelect(currency)}
      />
      {/* <button className="button primary">{index===0?"Edit":"Send"}</button> */}
    </div>
  ));
  return (
    <>
      <div className="live-rates-head">
        <h2 className="live-rates-head__h2">View Latest Rates</h2>
        <p className="live-rates-head__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          voluptatem quidem? Corporis, odio vero sequi vitae deleniti sit quod
          quae! Autem unde reiciendis sunt porro obcaecati alias fugiat quod
          aliquid!
        </p>
      </div>

      <div className="currency-row currency-list__heading">
        <div className="empty-div"></div>
        <div className="currency-list__name">Currency</div>
        <div className="currency-list__amount">Amount</div>
        <div className="currency-list__rate">Rate</div>
        {/* <div></div> */}
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
