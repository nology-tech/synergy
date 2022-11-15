import React from "react";
import spyglass from "./../../assets/images/spyglass.png";
import "./ContactSearch.scss";

// this contains all details in the search row below the contact List heading
const ContactSearch = (props) => {
  const { searchTerm, handleInput, onSearchClick, addContact, title, heading } = props;
  return (
      <div className="contactSearch">
        <h2 className="contact__Title">{title}</h2>
        <h1 className="contact__Heading">{heading}</h1>
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
          <input type="submit" className="contactSearch__area__addButton" onClick={addContact} value="Add"></input>
        </div>
      </div>
  );
};

export default ContactSearch;
