import React from 'react';
import spyglass from "./../../assets/images/spyglass.png";
import "./ContactSearch.scss"

const ContactSearch = (props) => {
  const {searchTerm, handleInput, searchFunction, addContact} = props;
  return (
    <>
    <div className='contactSearch'>
    <p className='contactSearch__Text'>All your friends and family financial details in one place. Easily transfer currency internationally at the best possible rates.</p>
    
    <form className="contactSearch__box">
    <img
        src={spyglass}
        alt="Close menu"
        className="contactSearch__box__spyGlass"
        onClick={searchFunction}
      />

      <input 
        type="text"
        value={searchTerm}
        onInput={handleInput}
        className="contactSearch__inputBox"
        placeholder="search here ..."
          
      />
    </form>
    
    <button
        className="contactSearch__addButton"
        onClick={addContact}>+ Add
    </button>

    
    </div>
    </>
  )
}

export default ContactSearch