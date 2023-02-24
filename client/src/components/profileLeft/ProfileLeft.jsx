import React from "react";

import { FollowersCard, Search } from "../index";
import InfoCard from './infoCard/InfoCard'

const ProfileLeft = () => {
  return (
    <div className="profileSide">
      <Search />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
