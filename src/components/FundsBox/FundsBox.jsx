import React from "react";
import "./FundsBox.scss";
import Button from "../Button/Button";

const FundsBox = (props) => {
  const { fundsAmount, fundBoxHeader, buttonOn, converterText } = props;

  return (
    <>
      <div className="fundsBox">
        <div className="fundsBox__content">
          <h3 className="fundsBox__content__title">{fundBoxHeader}</h3>
          <div className="fundsBox__content__amount">
            {"$" + fundsAmount.toLocaleString("en-US")}
          </div>
          <div className="fundsBox__content__manage">
            {buttonOn ? (
              <Button
                buttonStyle={"btn button-white fundsBox__content__manage"}
                buttonText={"Manage"}
              />
            ) : (
              <p className="fundsBox__content__text">{converterText}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FundsBox;
