import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFeedPosts } from "../../../actions/index.js";

import Post from "../post/Post";
import "./posts.css";

const Posts = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  const params = useParams();

  useEffect(() => {
    dispatch(getFeedPosts(user._id));
  }, []);

  if(!posts) return 'No Posts';
  if(params.id) posts = posts.filter((post)=> post.userId === params.id)

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
