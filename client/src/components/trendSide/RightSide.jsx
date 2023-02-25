import React, { useState } from "react";

import TrendCard from "./trendCard/TrendCard";
import NavIcons from "./NavIcons";
import { ShareModal } from "../index";
import "./rightSide.css";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="trendSide">
      <NavIcons />
      <TrendCard />
      <button
        className="button right-button"
        onClick={() => setModalOpened(true)}
      >
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
