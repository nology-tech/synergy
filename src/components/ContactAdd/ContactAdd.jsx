// on click from <add> button for contact -- open screen that enables user to manually Add Receipient
// Receipient Name: FirstName LastName
// Account Type: Business or Personal
// Account Number: Number of the account
// Sort Code: six digit code that identifies banks in UK -- in US would be ABA/routing number
// Button to cancel and clear all fields
// Button to continue to review

import React from "react";
import "./ContactAdd.scss";
import blackCross from "./../../assets/images/black-cross.png";

const ContactAdd = () => {
  return (
    <div className="add-contacts">
              <img
          src={blackCross}
          alt="black cross"
          className="add-contacts__close"
        />
        <h2 className="add-contacts__title">Add Recipient</h2>
      <form>
        <label className="add-contacts__label" htmlFor="fname">
          Recipient Name
        </label>
        <br></br>
        <input
          className="add-contacts__input-box"
          type="text"
          id="fname"
          name="fname"
        ></input>
        <br></br>
        <label className="add-contacts__label" htmlFor="actype">
          Account Type
        </label>
        <br></br>
        <input
          className="add-contacts__input-box"
          type="text"
          id="actype"
          name="actype"
        ></input>
        <br></br>
        <label className="add-contacts__label" htmlFor="acnum">
          Account Number
        </label>
        <br></br>
        <input
          className="add-contacts__input-box"
          type="text"
          id="acnum"
          name="acnum"
        ></input>
        <br></br>
        <label className="add-contacts__label" htmlFor="sort">
          Sort Code
        </label>
        <br></br>
        <input
          className="add-contacts__input-box"
          type="text"
          id="sort"
          name="sort"
        ></input>
        <br></br>
      </form>
      <button className="add-contacts__cancel-button">Cancel</button>
      <button className="add-contacts__continue-button">Continue</button>
    </div>
  );
};

export default ContactAdd;
