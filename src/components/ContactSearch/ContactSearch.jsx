import React from 'react'

const ContactSearch = () => {
  return (
    <>
    <p className='searchText'>All your friends and family financial details in one place. Easily transfer currency internationally at the best possible rates.</p>
    
    <form className="search-box">
      <input
        type="text"
        value={searchTerm}
        onInput={handleInput}
        className="search-box__input"
        placeholder="search here ..."
             />
        <button></button>
{/* Ask Step how to use 
<script src="https://kit.fontawesome.com/85e1a01775.js" crossorigin="anonymous"></script>

<FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
     <img
          src={magGlass}
          alt="Close menu"
          className="nav-menu__cross"
          onClick={toggleMenu}
        /> */}
    </form>

    
    <div>ContactSearch</div>
    </>
  )
}

export default ContactSearch