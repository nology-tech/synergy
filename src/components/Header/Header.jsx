import React from "react";
import "./Header.scss";

const Header = () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut id fringila augue \n feugiat. Volutpat tortor ornare lectus praesent amet.";
  let smallText = text.split("\n").map((i) => {
    return <p>{i}</p>;
  });

  return (
    <div>
      <header>
        <h1 className="header">
          Lorem ipsum dolor sit amet, consectetur{" "}
          <span className="header__highlight">adipisicing elit. </span>
        </h1>
        <h5 className="header__subline">{smallText}</h5>
      </header>
    </div>
  );
};

export default Header;
