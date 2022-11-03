import React from "react";
import "./LiveRatesList.scss";

const LiveRatesList = (props) => {
  const { currency } = props;
  
  // const currencyJSX = currency.map((currency, index) => (
  //   <div className="currency-row currency-list__items" key={currency.id}>
  //     <img className= "currency-list__img" src={currency.img} alt="US currency" />
  //     <div className="currency-list__name">{currency.name}</div>
  //     <div className="currency-list__amount">{currency.amount}</div>
  //     <div className="currency-list__rate">{currency.rate}</div>
  //     <button className="button primary">Edit</button>
  //   </div>
  // ));
  const currencyJSX = currency.map((currency, index) => (
    <div className={index===0?"currency-row currency-list__items row-blue":"currency-row currency-list__items row-grey"} key={currency.id}>
      <img className= "currency-list__img" src={currency.img} alt="US currency" />
      <div className="currency-list__name">{currency.name}</div>
      <div className="currency-list__amount">{currency.amount}</div>
      <div className="currency-list__rate">{currency.rate}</div>
      <button className="button primary">{index===0?"Edit":"Send"}</button>
    </div>
  ));
  return (
    <>
      <div className="currency-row currency-list__heading">
        <div className="empty-div"></div>
        <div className="currency-list__name">Currency</div>
        <div className="currency-list__amount">Amount</div>
        <div className="currency-list__rate">Rate</div>
        {/* <div></div> */}
      </div>
      <div>{currencyJSX}</div>
    </>
  );
};

export default LiveRatesList;
