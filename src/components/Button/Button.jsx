import React from "react";
// 1. Button for LandingMain with OnClick functionality on div
{/* <div onClick={handleClick}>
<Button buttonStyle={"button-light-blue"} buttonInitialStyle={""}  buttonInitialStyle="enabled" buttonType={""} isDisabled={false} buttonImage="" buttonText={"Find out more"} />
</div> */}
// 2. Button for Converter with onClick functionality on div NEED TO TEST IF ICON IS BROUGHT IN
// let buttonText = "<i class=\"fa-solid fa-arrows-rotate\"></i> Convert"
{/* <div onClick={handleClick}>
<Button buttonStyle={"button-blue"} buttonInitialStyle={""} buttonType={""} isDisabled={false} buttonText={buttonText} />
</div> */}
//
// 3. Button for footerNav with onClick functionality on div
{/* <div onClick={handleClick}>
<Button buttonStyle={"button-blue"} buttonInitialStyle={""} buttonType={""} isDisabled={false} buttonText={"Sign-Up"} />
</div> */}
//
// 4. Button for LiveRates with onClick functionality on div
{/*
<Button buttonStyle={"button-blue"} buttonInitialStyle={"white-border"} buttonType={""} isDisabled={false} buttonText={"Edit"} />
 */}
//
// 5. Button for CreateAccount with type submit NEED TO TEST ON VALIDATION BUTTON IS ENABLED
{/*
<Button buttonStyle={"button-blue"} buttonInitialStyle={"disabled"} buttonType={"submit"} isDisabled={!(validEmail && validPassword && validConfirmedPassword)} buttonText={"Continue &#9654"} />
 */}
//
const Button = (props) => {
  const { buttonStyle, buttonInitialStyle, isDisabled, buttonType, buttonText,} = props;
  if (buttonInitialStyle!="") {
    buttonStyle = buttonStyle + "-" + buttonInitialStyle;
  };
  return <button className={buttonStyle} type={buttonType} disabled={isDisabled}> {buttonText} </button>;
};
export default Button;