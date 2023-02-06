import React from "react";
import "./posts.css";
import { PostsData } from "../../../TempData/tempPosts";
import Post from "../post/Post";

const Posts = () => {
  return (
    <div className="posts">
      {PostsData.map((post, index) => {
        return <Post post={post} key={index} />;
      })}
    </div>
  );
};

export default Posts;
