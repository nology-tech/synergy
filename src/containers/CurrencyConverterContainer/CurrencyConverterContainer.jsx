import React from 'react';
import "./CurrencyConverterContainer.scss"
import NavMenu from "../../components/NavMenu/NavMenu"
import LiveRates from '../../components/LiveRates/LiveRates';
import CurrencyConverter from '../../components/CurrencyConverter/CurrencyConverter';

const CurrencyConverterContainer = () => {
  return (
    <div className='currencyConverterPage'>
      <NavMenu />
      <div className='currencyConverterPage__right'>
        <div className="currencyConverterPage__right-topNavBar">Top Nav Bar placeholder</div>      
        <CurrencyConverter />
        <LiveRates />
      </div>
    </div>
  )
}

export default CurrencyConverterContainer