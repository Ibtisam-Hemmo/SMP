import React from "react";
import "./profileCard.css";
import Cover from "../../../assets/profileBack.jpeg";
import Profile from "../../../assets/ibtisama.jpeg";

const ProfileCard = () => {
  return (
    <div className="profileCard">
      <div className="profileImages">
        <img src={Cover} alt="Cover Image" />
        <img src={Profile} alt="Profile Image" />
      </div>

      <div className="profileName">
        <span>Ibtisam M. hemmo</span>
        <span>Full stack developer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,580</span>
            <span>followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>45</span>
            <span>following</span>
          </div>
        </div>
        <hr />
      </div>

      <span>My profile</span>
    </div>
  );
};

export default ProfileCard;
