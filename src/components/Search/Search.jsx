import React from "react";
import { useState } from "react";
import spyglass from "./../../assets/images/spyglass.png";
import "./Search.scss";

// this contains magnifying glass and search box
const Search = (props) => {

  //Search function
  // Setting up the search box
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery + "---query");
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm + "---term");
  // this handle reads the search text
  const handleInput = (event) => {
    setSearchQuery(event.target.value);
  };
  console.log(searchQuery + "---query 2");

  // for the spyglass when clicked
  const onSearchClick = (event) => {
      event.preventDefault();
      setSearchTerm(searchQuery.toLowerCase());
    };
    console.log(searchTerm + "---term 2");

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
              onInput={handleInput}
              className="search__bar-inputBox"
              placeholder="search..."
            />
          </div>
        </div>
  );
};

export default Search;
