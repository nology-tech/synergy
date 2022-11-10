import React from "react";
import "./FundsBox.scss";
import BlueSquare from "../../assets/images/wallet_bluesquare.png"


const FundsBox = (props) => {
  const { fundsAmount, forConverter, name } = props;

  return (
    <>
    <h2 className="Greeting__firstName">{"Hey " + name}</h2>
      <div className="fundsBox">
        <div className="fundsBox__content">
          <img className="fundsBox_square" src={BlueSquare} alt="BlueSquareBox"/>
            <h3 className="fundsBox__content__title">Your Fund</h3>
            <div className="fundsBox__content__amount">{fundsAmount}</div>
            <button className="fundsBox__content__manage"> Manage </button>
        </div>
        
      </div>
      
    </>
  );
};

export default FundsBox;
