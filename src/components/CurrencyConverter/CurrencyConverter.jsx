import React from "react";
import { useState, useEffect } from "react";
import "./CurrencyConverter.scss";
import { Link } from "react-router-dom";
import convertImage from "../../assets/images/flipbutton.png";
import FundsBox from "../FundsBox/FundsBox";
import userInfo from "../../data/UserInfo.js";
import Button from "../Button/Button";
import { BiRefresh } from "react-icons/bi";

const CurrencyConverter = (props) => {
  const {
    amount,
    setAmount,
    baseCurrency,
    // setBaseCurrency,
    toCurrency,
    // convertedAmount,
    setConvertedAmount,
    fxRate,
    // setFxRate,
    amountCode,
    setAmountCode,
    accountBalance,
  } = props;

  const [shouldHide, setShouldHide] = useState(true);
  const [amountSymbol, setAmountSymbol] = useState(baseCurrency.symbol);
  const [firstDisplay, setFirstDisplay] = useState(baseCurrency);
  const [secondDisplay, setSecondDisplay] = useState(toCurrency);
  const [firstLabel, setFirstLabel] = useState("From");
  const [secondLabel, setSecondLabel] = useState("To");
  const [firstMessage, setFirstMessage] = useState(
    `${amount} ${baseCurrency.name} =`
  );
  const [secondMessage, setSecondMessage] = useState(
    `${Number(amount * fxRate).toFixed(4)} ${toCurrency.name}`
  );

  const message1From = `1 ${baseCurrency.code} = ${1 * fxRate} ${
    toCurrency.code
  }`;
  const message1To = `1 ${toCurrency.code} = ${Number(1 / fxRate).toFixed(4)} ${
    baseCurrency.code
  }`;
  const numericRegExp = /^\d*\.?\d*$/;
  const convertIcon = <BiRefresh />;

  // On re-render, we need to set the secondDisplay to the toCurrency;
  useEffect(() => {
    setup();
  }, [toCurrency]);

  const handleAmount = (e) => {
    e.preventDefault();
    const amount = e.target.value.toLowerCase();
    if (amount === "" || numericRegExp.test(amount)) {
      setAmount(amount);
      setConvertedAmount(Number(amount * fxRate).toFixed(4));
      if (amountCode === baseCurrency.code) {
        setFirstMessage(`${amount} ${baseCurrency.name} =`);
        setSecondMessage(
          `${Number(amount * fxRate).toFixed(4)} ${toCurrency.name}`
        );
      } else {
        setFirstMessage(`${amount} ${toCurrency.name} =`);
        setSecondMessage(
          `${Number((amount * 1) / fxRate).toFixed(4)} ${baseCurrency.name}`
        );
      }
    }
  };

  const flip = () => {
    if (amountCode === baseCurrency.code) {
      setAmountSymbol(toCurrency.symbol);
      setAmountCode(toCurrency.code);
      setFirstDisplay(toCurrency);
      setSecondDisplay(baseCurrency);
      setFirstLabel("To");
      setSecondLabel("From");
      setFirstMessage(`${amount} ${toCurrency.name} =`);
      setSecondMessage(
        `${Number((amount * 1) / fxRate).toFixed(4)} ${baseCurrency.name}`
      );
    } else {
      setAmountSymbol(baseCurrency.symbol);
      setAmountCode(baseCurrency.code);
      setFirstDisplay(baseCurrency);
      setSecondDisplay(toCurrency);
      setFirstLabel("From");
      setSecondLabel("To");
      setFirstMessage(`${amount} ${baseCurrency.name} =`);
      setSecondMessage(
        `${Number(amount * fxRate).toFixed(4)} ${toCurrency.name}`
      );
    }
  };
  const setup = () => {
    if (amountCode === toCurrency.code) {
      setAmountSymbol(toCurrency.symbol);
      setAmountCode(toCurrency.code);
      setFirstDisplay(toCurrency);
      setSecondDisplay(baseCurrency);
      setFirstLabel("To");
      setSecondLabel("From");
      setFirstMessage(`${amount} ${toCurrency.name} =`);
      setSecondMessage(
        `${Number((amount * 1) / fxRate).toFixed(4)} ${baseCurrency.name}`
      );
    } else {
      setAmountSymbol(baseCurrency.symbol);
      setAmountCode(baseCurrency.code);
      setFirstDisplay(baseCurrency);
      setSecondDisplay(toCurrency);
      setFirstLabel("From");
      setSecondLabel("To");
      setFirstMessage(`${amount} ${baseCurrency.name} =`);
      setSecondMessage(
        `${Number(amount * fxRate).toFixed(4)} ${toCurrency.name}`
      );
      // bug fix for selecting a different currency
      setConvertedAmount(Number(amount * fxRate).toFixed(4));
    }
  };
  const convertAmount = () => {
    if (amount == "") setShouldHide(true);
    else setShouldHide(false);
    setup();
    setConvertedAmount(Number(amount * fxRate).toFixed(4));
  };

  return (
    <div className="currencyConverter">
      <h4 className="currencyConverter__title1">Convert</h4>
      <h2 className="currencyConverter__title2">Currency Converter</h2>
      <p className="currencyConverter__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolorem
        nihil neque laudantium assumenda totam amet alias, sequi fuga officiis
        asperiores beatae provident iste. Quis ducimus nobis a officia earum.
      </p>
      <div className="currencyConverter__main">
        <div className="currencyConverter__main__wallet">
          <FundsBox
            fundsAmount={accountBalance}
            fundBoxHeader={"Funds Remaining"}
            buttonOn={false}
            converterText={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laudantium porro sapiente debitis."
            }
          />
        </div>

        <div className="currencyConverter__main__convertercontainer">
          <div className="currencyConverter__main__top">
            <div className="currencyConverter__main__converter">
              <div className="currencyConverter__main__converter__input">
                <label className="currencyConverter__main__converter__input__label">
                  Amount
                </label>
                <div className="input-container-amount">
                  <input
                    onChange={handleAmount}
                    className="currencyConverter__main__converter__input__box"
                    value={amount}
                    type="text"
                  />
                  <i>{amountSymbol}</i>
                </div>
              </div>
              <div className="currencyConverter__main__converter__input">
                <label className="currencyConverter__main__converter__input__label">
                  {firstLabel}
                </label>
                {/* From: Base Currency in Wallet/Live Rates -- assuming Base Currency = USD */}
                <div className="input-container">
                  <input
                    value={firstDisplay.code}
                    type="text"
                    className="currencyConverter__main__converter__input__box"
                  />
                  <img src={firstDisplay.img} className="flag_from" />
                </div>
              </div>
              <input
                type="image"
                src={convertImage}
                className="currencyConverter__main__converter__button"
                onClick={flip}
              />
              <div className="currencyConverter__main__converter__input">
                <label className="currencyConverter__main__converter__input__label">
                  {secondLabel}
                </label>
                {/* To: Desired currency selected via Live Rates */}
                <div className="input-container">
                  <input
                    value={secondDisplay.code}
                    type="text"
                    className="currencyConverter__main__converter__input__box"
                  />
                  <img src={secondDisplay.img} className="flag_to" />
                </div>
              </div>
            </div>
            <Button
              buttonStyle={"btn button-convert"}
              onClick={convertAmount}
              buttonImg={convertIcon}
              buttonText={"Convert"}
            />
          </div>

          <div
            className={
              shouldHide
                ? "currencyConverter__main__hidden"
                : "currencyConverter__main__bottom"
            }
          >
            {/* will display conversion */}
            <div>
              <p className="currencyConverter__main__bottom-from">
                {firstMessage}
              </p>
              <p className="currencyConverter__main__bottom-to">
                {secondMessage}
              </p>
              <p className="currencyConverter__main__bottom-rate">
                {message1From}
              </p>
              <p className="currencyConverter__main__bottom-rate">
                {message1To}
              </p>
            </div>
            <Link to="/transfer-fx-transaction">
              <Button
                buttonStyle={"btn button-white-blue-border"}
                buttonText={"Make Transfer"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
