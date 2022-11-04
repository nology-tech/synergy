import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import "./BankDetails.scss"
import synergyLogo from "../../Assets/images/synergy_logo.png";


const BankDetails = () => {
  const [accountName, setAccountName] = useState("");
  const [accountNum, setAccountNum] = useState();
  const [sortCode, setSortCode] = useState("");

    // Handling the account name change
    const handleAccountName = (e) => {
      e.preventDefault();
      setAccountName(e.target.value.toString());
    };

    // Handling the account number change
    const handleAccountNum = (e) => {
      e.preventDefault();
      setAccountNum(e.target.value);
    };

    // Handling the sort code change
    const handleSortCode = (e) => {
      e.preventDefault();
      setSortCode(e.target.value.toString());
    };

  return (
    <div className="form-container">
    <div className='form'>
      <div className='signup-header'>
      <img src={synergyLogo} />
      </div>
      <div>
        <h1 className="createAccount">Add Bank Details</h1>
        <p className="ipsum">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form className="bankDetailsForm">
         {/* Labels and inputs for form data */}
          <div className="bankDetailsForm__account-name bankDetailsForm__div">
            <label className="label">Account Name</label>
            <input onChange={handleAccountName} className="input" value={accountName} type="text" />
          </div>
          
             
          <div className="bankDetailsForm__accountnum bankDetailsForm__div">
            <label className="label">Account Number</label>
            <input onInput={handleAccountNum} className="input" value={accountNum} />
          </div>
          
          <div className="bankDetailsForm__sort-code bankDetailsForm__div">
            <label className="label">Sort Code</label>
            <input onChange={handleSortCode} className="input" value={sortCode} />
          </div>  
          
          <div className='buttons-group'>
            <Link to="/">
              <button className="bankDetailsForm__goBackBtn" type="submit">
                Go Back
              </button>
            </Link>
            <Link to="/billingaddress">
              <button className="bankDetailsForm__continueBtn" type="submit">
                Continue &#9654;
              </button>
            </Link>
          </div>
       </form>
      </div>
</div>
</div>

  )
}

export default BankDetails