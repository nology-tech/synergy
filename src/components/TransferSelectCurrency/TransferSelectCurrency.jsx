import React from 'react'
import UserDashboard from '../../containers/UserDashboard/UserDashboard'
import HeaderNav from '../HeaderNav/HeaderNav'
import NavMenu from '../NavMenu/NavMenu'
import FxTransaction from '../FxTransaction/FxTransaction'
import "./TransferSelectCurrency.scss"
import currency from '../../data/currency.js'

const TransferSelectCurrency = () => {


  
  return (
    <div>
        <HeaderNav/>
        <main className="transfer-currency">
        <div className="transfer-currency__navMenu"><NavMenu /></div>
        <div>
        <h2>Transfer</h2>
        <h1>Make Transfer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt tincidunt justo sed vestibulum. Sed mollis, magna sit amet finibus finibus, eros ligula aliquet dolor, at mollis risus magna in lacus.</p>    
        </div>
        <div>
        <FxTransaction currency = "currency"/>
        </div>


        </main>
    </div>
  )
}

export default TransferSelectCurrency