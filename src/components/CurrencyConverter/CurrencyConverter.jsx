import React from 'react';
import { useState } from 'react';
import "./CurrencyConverter.scss"
import currency from '../../data/currency';


const CurrencyConverter = () => {
    const [amount, setAmount] = useState("");

    const handleAmount = (e) => {
        e.preventDefault();
        setAmount(e.target.value.toString());
        console.log(amount*1.5);
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
                  onInput={handleAmount}
                  className="input"
                  value={amount}
                  type="text"
                />
                <label>From</label>
                {/* From: Base Currency in Wallet/Live Rates -- assuming Base Currency = USD */}
                <input
               
                 value={currency[0].code}
                //   className="input"
                
                  type="text"
                />
                <button>reverse</button>
                <label>To</label>
                {/* To: Desired currency selected via Live Rates */}
                <input
                //   onChange={handleAccountName}
                //   className="input"
                value={currency[1].code}
                  type="text"
                />
                <button>Convert</button>
                {/* will display conversion */}
          </div>
       </div>
       
    </div>
    
  )
}

export default CurrencyConverter