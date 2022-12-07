import React, { useState } from "react";
import "./CurrencyConverterContainer.scss"
import NavMenu from "../../components/NavMenu/NavMenu"
import HeaderNav from "../../components/DashboardHeader/DashboardHeader"
import LiveRatesList from '../../components/LiveRatesList/LiveRatesList';
// import LiveRates from '../../components/LiveRates/LiveRates';
import CurrencyConverter from '../../components/CurrencyConverter/CurrencyConverter';
// import currency from '../../data/currency.js'
import "../../assets/sass/_dashboard.scss"

const CurrencyConverterContainer = (props) => {
  const {amount,setAmount,baseCurrency,toCurrency, setToCurrency, setBaseCurrency,convertedAmount, setConvertedAmount, fxRate, setFxRate, currency,amountCode,setAmountCode}
  =props;
   
  // const [toCurrency, setToCurrency] = useState(currency[1]);
  
  const selectToCurrency = (currency) => {
    console.log("selected currency: ");
    console.log(currency);
    setToCurrency(currency);
  }

  return (
    <div className='dashboardPage'>
      <NavMenu />
      <div className='dashboardPage__right'>
        <HeaderNav />    
        <CurrencyConverter 
                          amount={amount} 
                          setAmount={setAmount} 
                          baseCurrency={baseCurrency}
                          setBaseCurrency = {setBaseCurrency}
                          toCurrency={toCurrency}
                          convertedAmount={convertedAmount}
                          setConvertedAmount={setConvertedAmount}
                          fxRate={fxRate}
                          setFxRate={setFxRate}
                          amountCode={amountCode}
                          setAmountCode={setAmountCode}/>
        <div className='liveRates'>
          <LiveRatesList currency={currency} onSelect={selectToCurrency}/>
        </div>                  

      </div>
    </div>
  )
}

export default CurrencyConverterContainer