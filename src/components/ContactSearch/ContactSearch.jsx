import React from 'react';
import spyglass from "./../../assets/images/spyglass.png";

const ContactSearch = (props) => {
  const {searchTerm, handleInput, searchFunction, addContact} = props;
  return (
    <>
    <p className='searchText'>All your friends and family financial details in one place. Easily transfer currency internationally at the best possible rates.</p>
    
    <form className="search-box">
      <img
        src={spyglass}
        alt="Close menu"
        className="nav-menu__cross"
        onClick={searchFunction}
      />

      <input
        type="text"
        value={searchTerm}
        onInput={handleInput}
        className="search-box__input"
        placeholder="search here ..."
      />
    </form>
    
    <button
        className="add-button"
        onClick={addContact}>+ Add
    </button>

    
    <div>ContactSearch</div>
    </>
  )
}

export default ContactSearch