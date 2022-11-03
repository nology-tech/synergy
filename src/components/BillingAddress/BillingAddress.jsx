import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import "./BillingAddress.scss"
import synergyLogo from "../../Assets/images/synergy_logo.png";


const BillingAddress = () => {
  const [houseNum, setHouseNum] = useState();
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");

    // Handling the street name change
    const handleStreetName = (e) => {
      e.preventDefault();
      setStreetName(e.target.value.toString());
    };

    // Handling the house number change
    const handleHouseNum = (e) => {
      e.preventDefault();
      setHouseNum(e.target.value);
    };

    // Handling the city change
    const handleCity = (e) => {
      e.preventDefault();
      setCity(e.target.value.toString());
    };

    // Handling the postcode change
    const handlePostCode = (e) => {
      e.preventDefault();
      setPostcode(e.target.value.toString());
    };

  return (
    <div className='form-container'>
    <div className='form'>
      <div className='signup-header'>
        <img src={synergyLogo} />
      </div>
      <div>
        <h1 className="createAccount">Add Billing Address</h1>
        <p className="ipsum">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form className="bankDetailsForm">
         {/* Labels and inputs for form data */}
          <div className="bankDetailsForm__div">
            <label className="label">House Number</label>
            <input onChange={handleHouseNum} className="input" value={houseNum} type="text" />
          </div>
                  
          <div className="bankDetailsForm__div">
            <label className="label">Street Name</label>
            <input onInput={handleStreetName} className="input" value={streetName} />
          </div>
          
          <div className="bankDetailsForm__div">
            <label className="label">City</label>
            <input onChange={handleCity} className="input" value={city} />
          </div>  

          <div className="bankDetailsForm__div">
            <label className="label">Post Code</label>
            <input onChange={handlePostCode} className="input" value={postcode} />
          </div>  
          
          <div className='buttons-group'>
            <Link to="/bankdetails">
              <button className="bankDetailsForm__btn" type="submit">
                Go Back
              </button>
            </Link>
            <Link to="/">
              <button className="bankDetailsForm__btn" type="submit">
                Submit
              </button>
            </Link>
          </div>
       </form>
      </div>
</div>
</div>
  )
}

export default BillingAddress