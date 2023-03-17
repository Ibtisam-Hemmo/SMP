import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { followUser, unFollowUser } from "../../../actions/userAction.js";

const User = ({ follower }) => {
  const { firstName, lastName, username, avatar, _id, followers } = follower;
  const user = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();

  const [following, setFollowing] = useState(followers.includes(user._id));
  const PublicImages = import.meta.env.VITE_PUBLIC_FOLDER;

  const handleFollow = () => {
    following
      ? dispatch(unFollowUser(_id, user))
      : dispatch(followUser(_id, user));
    setFollowing((prev) => !prev);
  };
  
  return (
    <div className="follower">
      <div>
        <Link to={`/profile/${_id}`}>
          <img
            src={
              avatar
                ? `${PublicImages}${avatar}`
                : PublicImages + "user.png"
            }
            alt=""
            className="followerImg"
          />
        </Link>

        <div className="name">
          <span>
            {firstName} {lastName}
          </span>
          <span>@{username}</span>
        </div>
      </div>
      <button
        className={
          following
            ? "button follow-button UnfollowButton"
            : "button follow-button"
        }
        onClick={handleFollow}
      >
        {following ? "UnFollow" : "Follow"}
      </button>{" "}
    </div>
  );
};

export default User;
