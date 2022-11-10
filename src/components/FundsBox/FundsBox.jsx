import React from 'react'

const FundsBox = (props) => {
    const { fundsAmount, forConverter } = props;
  return (
    <div className='fundsBox'>
      <h3>Your Fund</h3>
      <div className='fundsBox__background'></div>
      <div className='fundsBox__blue'></div>
      <div className='fundsBox_round'></div>
        
        
    </div>
  )
}

export default FundsBox