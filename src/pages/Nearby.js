import React from "react";
import "../styles/nearby.css";
import Location from "../components/Location";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

function Nearby() {
  return (
    <div className="market">
      <div>
        <h1>Nearby Markets</h1>
        <p>
          Find the Nearby Market and all potential Retailers and Customers and
          connect with them!
        </p>
      </div>
      <div className="market-content">
        <div className="left">
          <p style={{ color: "rgba(160, 161, 137, 1)" }}>
            Now using Name of app, Connect with all the nearest Markets and
            retailers and purchasers, Sell your product at the best price to the
            most feasible location. Turn on your live location to find nearby
            markets
          </p>
          <div className="location">
            <p>Live Location</p>
            <Switch {...label} />
          </div>
          <div>
            <p>Find Retailers</p>
            <input type="text"  className="find"/>
          </div>
        </div>
        <div className="right">
          <Location/>
        </div>
      </div>
    </div>
  );
}

export default Nearby;
