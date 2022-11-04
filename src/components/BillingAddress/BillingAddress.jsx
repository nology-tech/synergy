import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./BillingAddress.scss";
import synergyLogo from "../../Assets/images/synergy_logo.png";

const BillingAddress = () => {
  const [houseNum, setHouseNum] = useState();
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");

  // Handling the street name input field change
  const handleStreetName = (e) => {
    e.preventDefault();
    setStreetName(e.target.value.toString());
  };

  // Handling the house number input field change
  const handleHouseNum = (e) => {
    e.preventDefault();
    setHouseNum(e.target.value);
  };

  // Handling the city input field change
  const handleCity = (e) => {
    e.preventDefault();
    setCity(e.target.value.toString());
  };

  // Handling the postcode input field change
  const handlePostCode = (e) => {
    e.preventDefault();
    setPostcode(e.target.value.toString());
  };

  return (
    <div className="form-container">
      <div className="form">
        <div className="billing-header">
          <img src={synergyLogo} />
        </div>
        <div>
          <h1>Add Billing Address</h1>
          <p className="ipsum">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <form className="billingAddressForm">
            {/* Labels and inputs for form data */}
            <div className="billingAddressForm__div">
              <label>House Number</label>
              <input
                onChange={handleHouseNum}
                className="input"
                value={houseNum}
                type="text"
              />
            </div>

            <div className="billingAddressForm__div">
              <label>Street Name</label>
              <input
                onInput={handleStreetName}
                className="input"
                value={streetName}
              />
            </div>

            <div className="billingAddressForm__div">
              <label>City</label>
              <input onChange={handleCity} className="input" value={city} />
            </div>

            <div className="billingAddressForm__div">
              <label>Post Code</label>
              <input
                onChange={handlePostCode}
                className="input"
                value={postcode}
              />
            </div>
            
            <div className="billingAddressForm__separator"></div>

            <div className="buttons-group">
              <Link to="/bankdetails">
                <button className="billingAddressForm__goBackBtn" type="submit">
                  Go Back
                </button>
              </Link>
              <button className="billingAddressForm__btn" type="submit">
                Create Account
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    );
};

export default BillingAddress;
