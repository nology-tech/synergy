import React from "react";

const Button = (props) => {
  const { buttonText, disabled } = props;
  return <button disabled={disabled}>{buttonText}</button>;
};

export default Button;
