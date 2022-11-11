import React from "react";
import "./Button.scss";

const Button = (props) => {

  const { buttonStyle, isDisabled, onClick, buttonType, buttonImg, buttonText } = props;
  return (
    <>
    <button 
      className = {buttonStyle} 
      type = {buttonType} 
      onClick = {onClick}
      disabled = {isDisabled}> 
      {buttonText} {buttonImg}
    </button>
    </>
  )
}

export default Button

