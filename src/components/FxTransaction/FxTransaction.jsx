import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./FxTransaction.scss";




const FxTransaction = (currency) => {

//how is the Currencie selected? We should have a  drop-dowm to limit tyhe selection
//the send currency is not a drop down selection. Shall we define it by the user's addresss?
  const [youSendCcy, setYouSendCcy] = useState("");
  const [recipientGetsCcy, setRecipientCcy] = useState("");

  // Can user set either receive or sent amount? For example, user needs to send 300EUR (received amount) recepient gets 299.47 EUR (convertion rate Conversion rate: 1 USD = 0.9515 EUR)
  const [youSendCcyAmount, setYouSendCcyAmount] = useState("");
  const [recipientGetsCcyAmount, setRecipientGetsCcyAmount] = useState("");



  // depending of Sent and Receive Currency,  FX Rate is defined
  
  
    

  

  return (
    <div>
      <h2>You send</h2>
      <div  key={currency.id}>
      <img className= "currency-list__img" src={currency.img} alt="US currency" />
      <div className="currency-list__name">{currency.code} - {currency.name}</div>
      <div className="currency-list__amount">{currency.amount}</div>
    </div>


    </div>
)
}

export default FxTransaction