import React from "react";
import { useParams } from "react-router-dom";
import currency from "../../data/currency.js";
import LiveRatesList from "../LiveRatesList/LiveRatesList.jsx";
import "./LiveRates.scss";
import "../../assets/sass/_dashboard.scss";
import NavMenu from "../NavMenu/NavMenu.jsx";
import NavBar from "../../assets/images/navbar.png";
import DashboardHeader from "../DashboardHeader/DashboardHeader.jsx";
import Button from "../Button/Button.jsx";

const LiveRates = () => {
  const { liverates } = useParams();
  return (
    <div className="dashboardPage">
      <NavMenu />

      <div className="dashboardPage__right">
        <div className="placeHolders__Navbar">
          <DashboardHeader />
        </div>
        <div className="live-rates">
          <h4 className="live-rates__h4">Transfer</h4>
          {/* <h2 className="live-rates__h2">View Latest Rates</h2>
          <p className="live-rates__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            voluptatem quidem? Corporis, odio vero sequi vitae deleniti sit quod
            quae! Autem unde reiciendis sunt porro obcaecati alias fugiat quod
            aliquid!
          </p> */}
          <LiveRatesList className="live-rates__list" currency={currency} />
          {/* <Button
            buttonStyle={"btn button-dashed  button secondary"}
            isDisabled={false}
            buttonText={"Add Currency"}
          /> */}
          {/* <button className="button secondary">Add Currency</button> */}
        </div>
      </div>
    </div>
  );
};

export default LiveRates;