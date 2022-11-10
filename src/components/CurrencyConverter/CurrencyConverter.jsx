import React from 'react';
import "./CurrencyConverter.scss"


const CurrencyConverter = () => {
  return (
    <div className='currencyConverter'>
       <h4>Convert</h4>
       <h2>Currency Converter</h2>  
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolorem nihil neque laudantium assumenda totam amet alias, sequi fuga officiis asperiores beatae provident iste. Quis ducimus nobis a officia earum.</p>   
       <div className='currencyConverter__main'>
          <div className='currencyConverter__main__walletTemp'>Wallet Placeholder</div>
          <div className='currencyConverter__main__converter'>Converter</div>
       </div>
       
    </div>
    
  )
}

export default CurrencyConverter