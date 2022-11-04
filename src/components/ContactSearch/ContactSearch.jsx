import React from "react";
import spyglass from "./../../assets/images/spyglass.png";
import "./ContactSearch.scss";

const ContactSearch = (props) => {
  const { searchTerm, handleInput, onSearchClick, addContact, label } = props;
  return (
      <div className="contactSearch">
        <div className="contactSearch__Text">
          All your friends and family financial details in one place. Easily
          transfer currency internationally at the best possible rates.
        </div>
        <div className="searchStuff">
          <form className="contactSearch__box">
            <button
              type="Submit"
              className="contactSearch__box__button"
              onClick={onSearchClick}
            >
              <img
                src={spyglass}
                alt="Magnifying Glass"
                className="contactSearch__box__button__spyGlass"
                // onClick={searchFunction}
                // onClick={(event) => onSearchClick(event)}
              />
            </button>
            <input
              type="text"
              value={searchTerm}
              onInput={handleInput}
              className="contactSearch__box__inputBox"
              placeholder="Search..."
            />
          </form>

          {/* <button className="contactSearch__addButton" onClick={addContact}>{label}</button> */}
          <input type="submit" className="contactSearch__addButton" onClick={addContact} value="Add"></input>
        </div>
      </div>
  );
};

export default ContactSearch;
