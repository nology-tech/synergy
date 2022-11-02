import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div>
      <h1 className="header">
        Lorem ipsum dolor sit amet, <br /> consectetur{" "}
        <span className="header__highlight">adipisicing elit. </span>
      </h1>
      <h5 className="header__subline">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut id fringila
        augue <br /> feugiat. Volutpat tortor ornare lectus praesent amet.
      </h5>
    </div>
  );
};

export default Header;
