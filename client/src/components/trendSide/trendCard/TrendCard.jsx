import React from "react";

import { TrendData } from "../../../assets/tempData/tempTrends.js";
import "./trendCard.css";
const TrendCard = () => {
  return (
    <div className="trendCard">
      <h3> Trends for you </h3>
      {
        TrendData.map(({name, shares}, index) => {
        return (
          <div className="trend" key={index}>
            <span>#{name}</span>
            <span>{shares}k shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
