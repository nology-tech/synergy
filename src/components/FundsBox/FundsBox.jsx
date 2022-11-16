import React from "react";
import "./FundsBox.scss";
import blueSquare from "../../assets/images/wallet_bluesquare.png"
import highFive from "../../assets/images/Emojihand.png"
import Button from "../Button/Button";

const FundsBox = (props) => {
  const { fundsAmount, forConverter, name } = props;

  return (
    <>
    <div className="greeting__firstName">
      <h2>
        {"Hey " + name}
        <img className="greetings__wave" src={highFive} alt="highFiveWave" />
      </h2>
      </div>
      <div className="fundsBox">
        <div className="fundsBox__content">
          <img
            className="fundsBox_square"
            src={blueSquare}
            alt="blueSquareBox"
          />
          <h3 className="fundsBox__content__title">Your Funds:</h3>
          <div className="fundsBox__content__amount">
            {"\u00A3" + fundsAmount.toLocaleString("en-US")}
          </div>
          {/* <button className="fundsBox__content__manage"> Manage </button> */}
          <Button
            buttonStyle={"btn button-white fundsBox__content__manage"}
            //isDisabled={false}
            buttonText={"Manage"}
          />

        </div>
      </div>
    </>
  );
};

export default FundsBox;
