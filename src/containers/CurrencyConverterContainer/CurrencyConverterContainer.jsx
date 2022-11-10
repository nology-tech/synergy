import React from 'react';
import "./CurrencyConverterContainer.scss"
import NavMenu from "../../components/NavMenu/NavMenu"
import LiveRatesList from '../../components/LiveRatesList/LiveRatesList';
import LiveRates from '../../components/LiveRates/LiveRates';
import CurrencyConverter from '../../components/CurrencyConverter/CurrencyConverter';
import currency from '../../data/currency.js'

const CurrencyConverterContainer = () => {
  return (
    <div className='currencyConverterPage'>
      <NavMenu />
      <div className='currencyConverterPage__right'>
        <div className="currencyConverterPage__right-topNavBar">Top Nav Bar placeholder</div>      
        <CurrencyConverter />
        <LiveRates />
        {/* <LiveRatesList className="live-rates__list" currency={currency}/> */}
      </div>
    </div>
  )
}

export default CurrencyConverterContainer