import React, { useState } from "react";
import { MdOutlineNotificationsActive, MdSettings } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { FaRegCommentDots } from "react-icons/fa";

import "./rightSide.css";
import TrendCard from "./trendCard/TrendCard";
import { ShareModal } from "../index";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="trendSide">
      <div className="navIcons">
        <HiHome fill="rebeccapurple" />
        <MdOutlineNotificationsActive />
        <MdSettings />
        <FaRegCommentDots />
      </div>
      <TrendCard />
      <button className="button right-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
