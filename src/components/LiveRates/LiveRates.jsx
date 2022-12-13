import React from "react";
import LiveRatesList from "../LiveRatesList/LiveRatesList.jsx";
import "./LiveRates.scss";
import "../../assets/sass/_dashboard.scss";
import NavMenu from "../NavMenu/NavMenu.jsx";
import DashboardHeader from "../DashboardHeader/DashboardHeader.jsx";

const LiveRates = (props) => {
  const { currency, username } = props;
  return (
    <div className="dashboardPage">
      <NavMenu />

      <div className="dashboardPage__right">
        <div className="placeHolders__Navbar">
          <DashboardHeader username={username} />
        </div>
        <div className="live-rates">
          <h4 className="live-rates__h4">Transfer</h4>
          <LiveRatesList className="live-rates__list" currency={currency} />
        </div>
      </div>
    </div>
  );
};

export default LiveRates;
