import React from "react";

import "./profileSide.css";
import ProfileCard from "./profileCard/ProfileCard";
import Search from "./searchPart/Search";
import FollowersCard from "./followersCard/FollowersCard";

const ProfileSide = () => {
  return (
    <div className="leftSide">
      <Search />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
