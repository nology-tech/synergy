import React from "react";
import spyglass from "./../../assets/images/spyglass.png";
import "./ContactSearch.scss";
import Button from "../Button/Button";

// this contains all details in the search row below the contact List heading
const ContactSearch = (props) => {
  const { searchTerm, handleInput, onSearchClick, addContact } = props;
  return (
      <div className="contactSearch">
        <div className="contactSearch__text">
          All your friends and family financial details in one place. Easily
          transfer currency internationally at the best possible rates.
        </div>
        {/* includes the search box, spyglass */}
        <div className="contactSearch__area">
          <form className="contactSearch__area__box">
            <button
              type="Submit"
              className="contactSearch__area__box__button"
              onClick={onSearchClick}
            >
              <img
                src={spyglass}
                alt="Magnifying Glass"
                className="contactSearch__area__box__button__spyGlass"
              />
            </button>
            {/* search input box */}
            <input
              type="text"
              value={searchTerm}
              onInput={handleInput}
              className="contactSearch__area__box__inputBox"
              placeholder="Search..."
            />
          </form>
          {/* Contact Add button */}
          <Button
            buttonStyle={"btn button-transparent contactSearch__area__addButton"}
            buttonText={"Add"}
            onClick={addContact}
            value="Add"
            type="submit"
          />
          {/* <input type="submit" className="contactSearch__area__addButton" onClick={addContact} value="Add"></input> */}
        </div>
      </div>
  );
};

export default ContactSearch;
