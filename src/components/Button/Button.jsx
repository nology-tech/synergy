import React from "react";

// 1. Button for LandingMain with OnClick functionality on div
{/* 
<div onClick={handleClick}>
      <Button buttonStyle={"button-light-blue"} isDisabled={false} buttonType={""}  buttonText={"Find out more"} />
</div> 
*/}
// ===========================================================================================================================
// 2. Button for Converter with onClick functionality on div NEED TO TEST IF ICON IS BROUGHT IN
// let buttonText = "<i class=\"fa-solid fa-arrows-rotate\"></i> Convert"
{/* 
<div onClick={handleClick}>
      <Button buttonStyle={"button-blue"} buttonInitialStyle={""} isDisabled={false} buttonType={""} buttonText={buttonText} />
</div> 
*/}
// ===========================================================================================================================
// 3. Button for footerNav with onClick functionality on div
{/* 
<div onClick={handleClick}>
      <Button buttonStyle={"button-blue"} buttonInitialStyle={""} isDisabled={false} buttonType={""} buttonText={"Sign-Up"} />
</div> 
*/}
// ===========================================================================================================================
// 4. Button for LiveRates with onClick functionality on div
{/*
    <Button buttonStyle={"button-blue"} buttonInitialStyle={"white-border"} isDisabled={false} buttonType={""} buttonText={"Edit"} />
*/}
// ===========================================================================================================================
// 5. Button for CreateAccount with type submit NEED TO TEST ON VALIDATION BUTTON IS ENABLED
{/*
    <Button buttonStyle={"button-blue"} buttonInitialStyle={"disabled"} isDisabled={!(validEmail && validPassword && validConfirmedPassword)} buttonType={"submit"} buttonText={"Continue &#9654"} />
*/}
// ===========================================================================================================================

const Button = (props) => {

  const { buttonImg, buttonStyle, isDisabled, buttonType, buttonText} = props;

  return 
    <button 
      className={buttonStyle} 
      type={buttonType} 
      disabled={isDisabled}
    > 
      {buttonImg}   {buttonText} 
    </button>;
  };

  export default Button;