import React from 'react'
import currency from '../../data/currency.js'
import LiveRatesList from '../LiveRatesList/LiveRatesList.jsx';
// import LiveRatesList from '../LiveRatesList/LiveRatesList'



const LiveRates = () => {
    console.log(currency[1].name);
  return (
    <div className='live-rates'>
        <h4 className='live-rates__h4'>Transfer</h4>
        <h2 className='live-rates__h2'>View Latest Rates</h2>
        <p className='live-rates__para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, voluptatem quidem? Corporis, odio vero sequi vitae deleniti sit quod quae! Autem unde reiciendis sunt porro obcaecati alias fugiat quod aliquid!
        </p>
        <LiveRatesList className="live-rates__list" currency={currency} />
    </div>

  )
}

export default LiveRates