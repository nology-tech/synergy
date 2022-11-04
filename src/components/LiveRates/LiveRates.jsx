import React from 'react'
import { useParams } from 'react-router-dom';
import currency from '../../data/currency.js'
import LiveRatesList from '../LiveRatesList/LiveRatesList.jsx';
import "./LiveRates.scss"



{/* <Link className="nav-menu__item"  to="/albums" onClick={toggleNav}>
          All Albums
        </Link> */}


const LiveRates = () => {
    const {liverates} = useParams();
  return (
    
    <div className='live-rates'>

        <h4 className='live-rates__h4'>Transfer</h4>
        <h2 className='live-rates__h2'>View Latest Rates</h2>
        <p className='live-rates__para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, voluptatem quidem? Corporis, odio vero sequi vitae deleniti sit quod quae! Autem unde reiciendis sunt porro obcaecati alias fugiat quod aliquid!
        </p>
        <LiveRatesList className="live-rates__list" currency={currency} />
        <button className='button secondary'>Add Currency</button>
       
    </div>

  )
}

export default LiveRates