import React from "react";
import "./rightSide.css";
import { HiHome } from "react-icons/hi";
import { MdOutlineNotificationsActive, MdSettings } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import TrendCard from "./trendCard/TrendCard";

const RightSide = () => {
  return (
    <div className="trendSide">
      <div className="navIcons">
        <HiHome fill="rebeccapurple" />
        <MdOutlineNotificationsActive />
        <MdSettings />
        <FaRegCommentDots />
      </div>
      <TrendCard />
      <button className="button right-button" >
        Share
      </button>
    </div>
  );
};

export default RightSide;
