import React from "react";
import { Followers } from "../../../TempData/tempFollowers";
import './followersCard.css'

const FollowersCard = () => {
  return (
    <div className="followersCard">
      <h3>Who is following you</h3>
      {Followers.map(({ name, username, img }, index) => {
        return (
          <div className="follower" key={index}>
            <div>
              <img src={img} alt="" className="followerImg" />
              <div className="name">
                <span>{name}</span>
                <span>{username}</span>
              </div>
            </div>
            <button className=" button follow-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
