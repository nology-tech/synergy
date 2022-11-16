import React from 'react'
import { Link } from "react-router-dom";
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
    />
    <div className="transfer-send-form__to">
      <h2>To</h2>
      <div className="transfer-send-form__to__options">
        <Link to="/transfer-choose-recipient">
        <Button buttonText="Select Recipient" />
        </Link>
        <div className="transfer-send-form__to__options__newPayee">
          <Link to="/transfer-add-recipient">
            + Pay Someone New
          </Link> 
        </div>
      </div>
    </div>
  </div>
  )
}

export default TransferSendFrom