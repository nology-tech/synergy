import React from 'react';
import { useState } from 'react';
import "./CurrencyConverter.scss"
import currency from '../../data/currency';


const CurrencyConverter = (props) => {
    const {amount, handleAmount, convertedAmount, convertAmount}=props;
    const [from, setFrom] = useState(currency[0].code);
    const [to, setTo] = useState(currency[1].code);
    
    const fxRate = currency[1].rate;
    const currencyFromName = currency[0].name;
    const currencyToName = currency[1].name;
    const messageFrom = `${amount} ${currencyFromName} =`
    const messageTo =  `${convertedAmount} ${currencyToName}`

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
          <div className='currencyConverter__main__converter'>Converter
          <label className="currencyConverter__main__converter__label">Amount</label>
                <input
                  onChange={handleAmount}
                  className="input"
                  value={amount}
                  type="text"
                />
                <label className="currencyConverter__main__converter__label">From</label>
                {/* From: Base Currency in Wallet/Live Rates -- assuming Base Currency = USD */}
                <input
               
                 value={from}
                className="input"
                
                  type="text" 
                  
                />
                <button  className="currencyConverter__main__converter__button" onClick={flip}>reverse</button>
                <label className="currencyConverter__main__converter__label">To</label>
                {/* To: Desired currency selected via Live Rates */}
                <input
                //   onChange={handleAccountName}
                //   className="input"
                value={to}
                  type="text"
                />
                <button onClick={convertAmount}>Convert</button>
                {/* will display conversion */}
                <p className="currencyConverter__message-from">{messageFrom}</p>
                <p className="currencyConverter__message-to">{messageTo}</p>

          </div>
       </div>
       
    </div>
    
  )
}

export default CurrencyConverter