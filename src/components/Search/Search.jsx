import React from "react";
import spyglass from "./../../assets/images/spyglass.png";
import "./Search.scss";

// this contains magnifying glass and search box
const Search = (props) => {
  const { searchTerm, handleInput } = props;
  return (
        <div className="Search">
          <div className="Search__bar">
            <img
                src={spyglass}
                alt="Magnifying Glass"
                className="Search__bar-spyGlass"
              />
            <input
              type="text"
              value={searchTerm}
              onInput={handleInput}
              className="Search__bar-inputBox"
              placeholder="Search..."
            />
          </div>
        </div>
  );
};

export default Search;
