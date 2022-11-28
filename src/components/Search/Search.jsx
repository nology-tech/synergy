import React from "react";
import { useState } from "react";
import spyglass from "./../../assets/images/spyglass.png";
import "./Search.scss";

// this contains magnifying glass and search box
const Search = (props) => {

  const {searchTerm, handleInput} = props;


  return (
        <div className="search">
          <div className="search__bar">
            <img
                src={spyglass}
                alt="Magnifying Glass"
                className="search__bar-spyGlass"
              />
            <input
              type="text"
              value={searchTerm}
              onInput={handleInput}
              className="search__bar-inputBox"
              placeholder="search..."
            />
          </div>
        </div>
  );
};

export default Search;
