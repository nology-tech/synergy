import React from "react";
import "./FundsBox.scss";

const FundsBox = (props) => {
  const { fundsAmount, forConverter, name } = props;
  return (
    <>
      <div className="fundsbox__firstName">{"Hey " + name}</div>
      <div className="fundsBox">
        <h3>Your Fund</h3>
      </div>
      <div className="fundsBox__amount">{fundsAmount}</div>
    </>
  );
};

export default FundsBox;
