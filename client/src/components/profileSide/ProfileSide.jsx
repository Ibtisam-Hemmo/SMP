import React from "react";
import PropTypes from 'prop-types';

import "./ProfileSide.module.css";
import ProfileCard from "./profileCard/ProfileCard";
import Search from "./searchPart/Search";
import FollowersCard from "./followersCard/FollowersCard";

const ProfileSide = ({ location }) => {
  return (
    <div className="leftSide">
      <Search />
      <ProfileCard location={location} />
      <FollowersCard />
    </div>
  );
};

ProfileSide.propTypes = {
  location: PropTypes.string.isRequired,
};

export default ProfileSide;
