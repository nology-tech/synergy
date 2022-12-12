import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./BillingAddress.scss";
import synergyLogo from "../../assets/images/synergy_main_logo.png";
import SignInNav from "../../components/SignInNav/SignInNav";
import Button from "../../components/Button/Button";

const BillingAddress = (props) => {
  const {houseNum, handleHouseNum, streetName, handleStreetName,city,handleCity, postcode,handlePostCode,handleCreateAccount}=props;
  return (
    <>
      <SignInNav title="Login" />
      <div className="BillingAddress">
        <div className="form-box">
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
                  <button
                    className="billingAddressForm__goBackBtn"
                    type="submit"
                  >
                    Go Back
                  </button>
                </Link>
                <Link to="/dashboard">
                    <Button buttonStyle={"btn button-blue billingAddressForm__btn"} buttonText={"Create Account"} onClick={handleCreateAccount}/>
                </Link>
                {/* <button className="billingAddressForm__btn" type="submit">
                  Create Account
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingAddress;
