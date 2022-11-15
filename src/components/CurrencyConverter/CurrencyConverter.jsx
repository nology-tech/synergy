import React from 'react';
import { useState } from 'react';
import "./CurrencyConverter.scss";
import { Link } from "react-router-dom";
import currency from '../../data/currency';
import { faL } from '@fortawesome/free-solid-svg-icons';
import convertImage from "../../assets/images/ep_refresh.png"

const CurrencyConverter = (props) => {
    const {amount,setAmount,baseCurrency,setBaseCurrency,toCurrency,setToCurrency,convertedAmount,
       setConvertedAmount, fxRate, setFxRate}=props;
    const [shouldHide, setShouldHide] = useState(true);
    const [inverseFXRate,setInverseFXRate] = useState(Number(1/fxRate).toFixed(4))
    
    const currencyFromName = baseCurrency.name;
    const currencyToName = toCurrency.name;
    const messageFrom = `${amount} ${currencyFromName} =`;
    const messageTo =  `${convertedAmount} ${currencyToName}`;
    const message1From = `1 ${baseCurrency.code} = ${1 * fxRate} ${toCurrency.code}`;
    const message1To = `1 ${toCurrency.code} = ${inverseFXRate} ${baseCurrency.code}`;
    // const numericRegExp = /^[0-9]+$/;
    const numericRegExp = /^\d+\.\d{0,10}$/;
    
    

    const handleAmount = (e) => {      
      e.preventDefault();
      const amount = e.target.value.toLowerCase();
      if (amount === '' || numericRegExp.test(amount)) {
        setAmount(amount); 
        setConvertedAmount (Number(amount * fxRate).toFixed(4));          
      }         
    };
      
    const convertAmount = () => {
      setConvertedAmount(Number(amount * fxRate).toFixed(4)); 
      if (amount != null) setShouldHide(false); 
    }

    const flip = () => {
      const temp = baseCurrency;
      const temp1 = fxRate;
      setToCurrency (temp);
      setBaseCurrency(toCurrency);
      setFxRate(inverseFXRate);
      //console.log("baseCurrency: " + baseCurrency.code + "toCurrency: " + toCurrency.code + "amount: " + amount + "fx rate: " + fxRate + "inverseRate: " +inverseFXRate)
      setConvertedAmount(Number(amount * fxRate));
      setInverseFXRate (temp1);   
      setShouldHide(true);   
    }

  return (
    <div className='currencyConverter'>
       <h4 className="currencyConverter__title1">Convert</h4>
       <h2 className="currencyConverter__title2">Currency Converter</h2>  
       <p className="currencyConverter__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolorem nihil neque laudantium assumenda totam amet alias, sequi fuga officiis asperiores beatae provident iste. Quis ducimus nobis a officia earum.</p>   
       <div className='currencyConverter__main'>
          <div className='currencyConverter__main__walletTemp'>Wallet Placeholder</div>
          
          <div className='currencyConverter__main__convertercontainer'>
            <div className='currencyConverter__main__top'>
              <div className='currencyConverter__main__converter'>
                  <div className = "currencyConverter__main__converter__input">
                    <label className="currencyConverter__main__converter__input__label">Amount</label>
                    <div className='input-container-amount'>
                      <input
                          onChange={handleAmount}
                          className="currencyConverter__main__converter__input__box"
                          value={amount}
                          type="text"/>
                      <i>{baseCurrency.symbol}</i>    
                    </div>                  
                  </div>
                  <div className = "currencyConverter__main__converter__input">
                    <label className="currencyConverter__main__converter__input__label">From</label>
                    {/* From: Base Currency in Wallet/Live Rates -- assuming Base Currency = USD */}
                    <div className='input-container'>
                      <input value={baseCurrency.code} type="text" className="currencyConverter__main__converter__input__box"/>
                      <img src={baseCurrency.img} className='flag_from'/>
                    </div>                  
                  </div>
                  <input type="image" src={convertImage} className="currencyConverter__main__converter__button" onClick={flip}/>              
                  <div className = "currencyConverter__main__converter__input">
                    <label className="currencyConverter__main__converter__input__label">To</label>
                      {/* To: Desired currency selected via Live Rates */}
                      <div className='input-container'>
                        <input value={toCurrency.code} type="text" className="currencyConverter__main__converter__input__box" />
                        <img src={toCurrency.img} className='flag_to'/>
                      </div>
                  </div>               
              </div>  
              <button className = "currencyConverter__main__btn" onClick={convertAmount}>
                <img src={convertImage} className="currencyConverter__main__btn-img"/>
                <span className='currencyConverter__main__btn-span'>Convert</span>
              </button>
            </div>
              
              <div className=
                {shouldHide ? 'currencyConverter__main__hidden' : 'currencyConverter__main__bottom'}>
                {/* will display conversion */}
                <div>
                  <p className="currencyConverter__main__bottom-from">{messageFrom}</p>
                  <p className="currencyConverter__main__bottom-to">{messageTo}</p>
                  <p className="currencyConverter__main__bottom-rate">{message1From}</p>
                  <p className="currencyConverter__main__bottom-rate">{message1To}</p>
                </div>                
                <Link >
                    <button to="/transfer" className='currencyConverter__main__bottom-btn'>
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