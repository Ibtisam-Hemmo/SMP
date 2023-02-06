import React from "react";

import Post from "./posts/Posts";
import Share from "./postShare/Share";
import "./postSide.css";

const PostSide = () => {
  return (
    <div className="postSide">
      <Share />
      <Post />
    </div>
  );
};

export default PostSide;
