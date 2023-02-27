import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getFeedPosts } from "../../../actions/index.js";
import Post from "../post/Post";
import "./posts.css";

const Posts = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getFeedPosts(!!id ? id : user._id));
  }, [id, user._id]);

  if(!posts) return 'No Posts';
  if(id) posts = posts.filter((post)=> post.userId === id)

  return (
    <div className="posts">
      {loading
        ? "Fetching Posts..."
        : posts?.map((post, index) => {
            if (location === "profile page") {
              if (post.userId === id) {
                return <Post post={post} key={index} />;
              }
            } else {
              return <Post post={post} key={index} />;
            }
          })}
    </div>
  );
};

export default Posts;
