import React from 'react';
import { useState } from 'react';
import "./CurrencyConverter.scss";
import { Link } from "react-router-dom";
import currency from '../../data/currency';
import { faL } from '@fortawesome/free-solid-svg-icons';


const CurrencyConverter = (props) => {
    const {amount,setAmount, convertedAmount, setConvertedAmount, fxRate}=props;
    const [from, setFrom] = useState(currency[0].code);
    const [to, setTo] = useState(currency[1].code);
    const [shouldHide, setShouldHide] = useState(true);
    
    const baseCurrency = currency[0];
    const toCurrency = currency[1];
    const inverseFXRate = Number(1/toCurrency.rate).toFixed(4);
    const currencyFromName = currency[0].name;
    const currencyToName = currency[1].name;
    const messageFrom = `${amount} ${currencyFromName} =`;
    const messageTo =  `${convertedAmount} ${currencyToName}`;
    const message1From = `${baseCurrency.amount} ${baseCurrency.code} = ${baseCurrency.amount * fxRate} ${toCurrency.code}`;
    const message1To = `1 ${toCurrency.code} = ${inverseFXRate} ${baseCurrency.code}`;

    const handleAmount = (e) => {
      e.preventDefault();
      const amount = e.target.value.toLowerCase();
      setAmount(amount); 
      setConvertedAmount (amount * fxRate);   
    };
  
    const convertAmount = () => {
      setConvertedAmount(amount*fxRate); 
      if (amount != null) setShouldHide(false); 
    }

    const flip = () => {
      var temp = from;
      setFrom(to);
      setTo(temp); 
    }

  return (
    <div className='currencyConverter'>
       <h4 className="currencyConverter__title1">Convert</h4>
       <h2 className="currencyConverter__title2">Currency Converter</h2>  
       <p className="currencyConverter__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolorem nihil neque laudantium assumenda totam amet alias, sequi fuga officiis asperiores beatae provident iste. Quis ducimus nobis a officia earum.</p>   
       <div className='currencyConverter__main'>
          <div className='currencyConverter__main__walletTemp'>Wallet Placeholder</div>
          
          <div className='currencyConverter__main__convertercontainer'>
              <div className='currencyConverter__main__converter'>
                <div className = "currencyConverter__main__converter__input">
                  <label className="currencyConverter__main__converter__input__label">Amount</label>
                  <input
                      onChange={handleAmount}
                      className="currencyConverter__main__converter__input__box"
                      value={amount}
                      type="text"/>
                </div>
                <div className = "currencyConverter__main__converter__input">
                  <label className="currencyConverter__main__converter__input__label">From</label>
                  {/* From: Base Currency in Wallet/Live Rates -- assuming Base Currency = USD */}
                  <div className='input-container'>
                    <input value={from} type="text" className="currencyConverter__main__converter__input__box"/>
                    <img src={toCurrency.img} className='flag_from'/>
                  </div>                  
                </div>
                {/* I think this should be an image not a button, we shoudl clarify with Steph but I don't think we need a flip function*/}
                {/* <button  className="currencyConverter__main__converter__button" onClick={flip}>reverse</button> */}
                <div className = "currencyConverter__main__converter__input">
                <label className="currencyConverter__main__converter__input__label">To</label>
                  {/* To: Desired currency selected via Live Rates */}
                  <div className='input-container'>
                    <input value={to} type="text" className="currencyConverter__main__converter__input__box" />
                    <img src={baseCurrency.img} className='flag_to'/>
                  </div>
                </div>               
              </div>  
              <button onClick={convertAmount}>Convert</button>
              <div className=
                {shouldHide ? 'currencyConverter__main__hidden' : 'currencyConverter__main__bottom'}>
                <div className="separator"></div>
                {/* will display conversion */}
                <p className="currencyConverter__message-from">{messageFrom}</p>
                <p className="currencyConverter__message-to">{messageTo}</p>
                <p>{message1From}</p>
                <p>{message1To}</p>
                <Link>
                    <button to="/transfer">
                        Make Transfer
                    </button>
                </Link>
              </div>            
          </div>   
       </div>
    </div>
    
  )
}

export default CurrencyConverter