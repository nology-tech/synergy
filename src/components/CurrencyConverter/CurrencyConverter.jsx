import React from 'react';
import { useState } from 'react';
import "./CurrencyConverter.scss"
import currency from '../../data/currency';


const CurrencyConverter = () => {
    //const {fxRate}=props;
    const [amount, setAmount] = useState();
    const [convertedAmount, setConvertedAmount] = useState();
    const [from, setFrom] = useState(currency[0].code);
    const [to, setTo] = useState(currency[1].code);
    //const [fxRate, setfxRate] = useState(currency[1].rate);

    const fxRate = currency[1].rate;
    const currencyFromName = currency[0].name;
    const currencyToName = currency[1].name;
    const message = `${amount} ${currencyFromName} = ${convertedAmount} ${currencyToName}`

    const flip = () => {
      var temp = from;
      setFrom(to);
      setTo(temp);     
      
    }

    const convertAmount = () => {
      setConvertedAmount(amount*fxRate);
      console.log(convertedAmount)
      
      
    }
   

    const handleAmount = (e) => {
        e.preventDefault();
        setAmount(e.target.value.toString());
        console.log(amount*fxRate);
      };
  return (
    <div className='currencyConverter'>
       <h4>Convert</h4>
       <h2>Currency Converter</h2>  
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolorem nihil neque laudantium assumenda totam amet alias, sequi fuga officiis asperiores beatae provident iste. Quis ducimus nobis a officia earum.</p>   
       <div className='currencyConverter__main'>
          <div className='currencyConverter__main__walletTemp'>Wallet Placeholder</div>
          <div className='currencyConverter__main__converter'>Converter
          <label>Amount</label>
                <input
                  onChange={handleAmount}
                  className="input"
                  value={amount}
                  type="text"
                />
                <label>From</label>
                {/* From: Base Currency in Wallet/Live Rates -- assuming Base Currency = USD */}
                <input
               
                 value={from}
                //   className="input"
                
                  type="text" 
                  disabled
                />
                <button onClick={flip}>reverse</button>
                <label>To</label>
                {/* To: Desired currency selected via Live Rates */}
                <input
                //   onChange={handleAccountName}
                //   className="input"
                value={to}
                  type="text"
                />
                <button onClick={convertAmount}>Convert</button>
                {/* will display conversion */}
                <p>{message}</p>

          </div>
       </div>
       
    </div>
    
  )
}

export default CurrencyConverter