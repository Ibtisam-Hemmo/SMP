import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./profileCard.css";

const ProfileCard = ({ location }) => {
  const user = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts);
  window.REACT_APP_PUBLIC_FOLDER = "http://localhost:5000/images/";

  return (
    <div className="profileCard">
      <div className="profileImages">
        <img
          src={
            user.coverPicture
              ? `${window.REACT_APP_PUBLIC_FOLDER}${user.coverPicture}`
              : window.REACT_APP_PUBLIC_FOLDER + "profileBack.jpeg"
          }
          alt="Cover Image"
        />
        <img
          src={
            user.avatar
              ? `${window.REACT_APP_PUBLIC_FOLDER}${user.avatar}`
              : window.REACT_APP_PUBLIC_FOLDER + "user.png"
          }
          alt="Profile Image"
        />
      </div>

      <div className="profileName">
        <span>{user.firstName + " " + user.lastName}</span>
        <span style={{ fontSize: "12px" }}>@{user.username}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>following</span>
          </div>
          {location === "profile page" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>
                  {posts.filter((post) => post.userId === user._id).length}
                </span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === "profile page" ? (
        ""
      ) : (
        <span>
          <Link
            to={`/profile/${user._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
