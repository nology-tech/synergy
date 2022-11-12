import React from 'react';
import "./CurrencyConverterContainer.scss"
import NavMenu from "../../components/NavMenu/NavMenu"
import HeaderNav from "../../components/DashboardHeader/DashboardHeader"
import LiveRatesList from '../../components/LiveRatesList/LiveRatesList';
import LiveRates from '../../components/LiveRates/LiveRates';
import CurrencyConverter from '../../components/CurrencyConverter/CurrencyConverter';
// import currency from '../../data/currency.js'

const CurrencyConverterContainer = (props) => {
  const {amount,setAmount, convertedAmount, setConvertedAmount, fxRate}=props;
  
  return (
    <div className='currencyConverterPage'>
      <NavMenu />
      <div className='currencyConverterPage__right'>
        <HeaderNav />    
        <CurrencyConverter amount={amount} 
                  setAmount={setAmount} 
                  convertedAmount={convertedAmount}
                  setConvertedAmount={setConvertedAmount}
                  fxRate={fxRate}/>
        <LiveRates />
        {/* <LiveRatesList className="live-rates__list" currency={currency}/> */}
      </div>
    </div>
  )
}

export default CurrencyConverterContainer