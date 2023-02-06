import React from "react";
import "./trendCard.css";

import { TrendData } from "../../../TempData/tempTrends";
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
