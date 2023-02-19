import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedPosts } from "../../../actions/index.js";

import Post from "../post/Post";
import "./posts.css";

const Posts = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getFeedPosts(user._id));
  }, []);

  return (
    <div className="posts">
      {loading
        ? "Fetching Posts..."
        : posts?.map((post, index) => {
            return <Post post={post} key={index} />;
          })}
    </div>
  );
};

export default Posts;
