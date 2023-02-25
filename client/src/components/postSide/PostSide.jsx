import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Post from "./posts/Posts";
import Share from "./postShare/Share";
import "./postSide.css";

const PostSide = ({ location }) => {
  const user = useSelector((state) => state.authReducer.authData);
  const { id } = useParams();

  return (
    <div className="postSide">
      {user._id === id || location == "home page" ? <Share /> : ""}
      <Post location={location} />
    </div>
  );
};

export default PostSide;
