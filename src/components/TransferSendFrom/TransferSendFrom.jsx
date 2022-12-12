import React from 'react'
import './TransferSendFrom.scss'
import TransferAccountForm from "../TransferAccountForm/TransferAccountForm"
import Button from '../Button/Button'

const TransferSendFrom = (props) => {

  const {
    currencyBaseCode,
    amountBase,
    accountFormTypes,
    username,
    accountBalance,
    accountNum,
    sortCode,
    handlePaySomeOneNew,
    onClick,
    currencyBaseSymbol
  } = props;

  return (
    <div className="transfer-send-form">
    <h2>Send From</h2>
    <TransferAccountForm
      currencyBaseCode={currencyBaseCode}
      accountBalance={accountBalance}
      amountBase={amountBase}
      accountFormTypes={accountFormTypes}
      username={username}
      accountNum={accountNum}
      sortCode={sortCode}
      currencyBaseSymbol={currencyBaseSymbol}
    />
    <div className="transfer-send-form__to">
      <h2>To</h2>
      <div className="transfer-send-form__to__options">
        <Button buttonStyle={"btn button-blue"} buttonText="Select Recipient" onClick={onClick}/>
        <div className="transfer-send-form__to__options__newPayee">
          <a onClick={handlePaySomeOneNew}> 
            + Pay Someone New
            </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TransferSendFrom