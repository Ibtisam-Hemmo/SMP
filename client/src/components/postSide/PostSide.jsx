import React from "react";

import Post from "./posts/Posts";
import Share from "./postShare/Share";
import "./postSide.css";

const PostSide = ({location}) => {
  return (
    <div className="postSide">
      <Share />
      <Post location={location}/>
    </div>
  );
};

export default PostSide;
