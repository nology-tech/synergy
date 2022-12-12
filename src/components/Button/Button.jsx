import React from "react";
import "./Button.scss";

const Button = (props) => {

  const { buttonStyle, isDisabled, onClick, buttonType, buttonImg, buttonText} = props;

  if (buttonText == 'Sign Out') {
  return (
    <>
    <button 
      className = {buttonStyle} 
      type = {buttonType} 
      onClick = {onClick}
      disabled = {isDisabled}
      >
      {buttonText}  {buttonImg}
    </button>
    </>
  )
} else {
  return (
    <>
    <button 
      className = {buttonStyle} 
      type = {buttonType} 
      onClick = {onClick}
      disabled = {isDisabled}
      > 
      {buttonImg}   {buttonText}
    </button>
    </>
  )
}
}
export default Button