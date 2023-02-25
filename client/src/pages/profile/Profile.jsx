import React from "react";

import {
  PostSide,
  ProfileLeft,
  ProfileCard,
  RightSide,
} from "../../components";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <ProfileLeft />
      <div className="profile-center">
        <ProfileCard location="profile page" />
        <PostSide location='profile page'/>
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;
