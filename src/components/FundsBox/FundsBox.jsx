import React from "react";
import "./FundsBox.scss";
import blueSquare from "../../assets/images/wallet_bluesquare.png"
import highFive from "../../assets/images/Emojihand.png"

const FundsBox = (props) => {
  const { fundsAmount, forConverter, name } = props;

  return (
    <>
    <h2 className="greeting__firstName">{"Hey " + name}
    <img className="greetings__wave" src={highFive} alt="highFiveWave"/>
    </h2>
      <div className="fundsBox">
        <div className="fundsBox__content">
          <img className="fundsBox_square" src={blueSquare} alt="blueSquareBox"/>
            <h3 className="fundsBox__content__title">Your Funds:</h3>
            <div className="fundsBox__content__amount">{"€" + fundsAmount.toLocaleString("en-US")}</div>
            <button className="fundsBox__content__manage"> Manage </button>
        </div>
        
      </div>
      
    </>
  );
};

export default FundsBox;
