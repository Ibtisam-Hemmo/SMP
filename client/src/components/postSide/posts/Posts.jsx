import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getFeedPosts } from "../../../actions/index.js";
import Post from "../post/Post";
import { PostLoading } from "../../index.js";
import "./posts.css";

const Posts = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getFeedPosts(!!id ? id : user._id));
  }, [id, user._id]);

  if (!posts) return "No Posts";
  if (id) posts = posts.filter((post) => post.userId === id);
  if (loading) return <PostLoading />;

  return (
    <div className="posts">
      {Array.isArray(posts)
        ? posts?.map((post, index) => {
            return <Post post={post} key={index} />;
          })
        : "Something went wrong"}
    </div>
  );
};

export default Posts;
