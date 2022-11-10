import React from 'react'
import FundsBox from '../../components/FundsBox/FundsBox'
import userInfo from '../../data/userInfo.js'

const Wallet = () => {
  return (
    <div>
        <h1>Funds box will go here</h1>
        {/* {console.log(userInfo[0].accountBalance)}; */}
        
        <FundsBox 
        name = {userInfo[0].firstName}
        fundsAmount = {userInfo[0].accountBalance} />
       
    </div>
  )
}

export default Wallet