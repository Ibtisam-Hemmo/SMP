import React from "react";
import "./post.css";
import { FaRegCommentDots, FaHeart, FaRegHeart, FaShare } from "react-icons/fa";

const Post = ({ post }) => {
  const { img, name, desc, likes, liked } = post;
  return (
    <div className="post">
      <img src={img} alt="Image Post" />

      <div className="postReact">
        {liked ? <FaHeart fill="rebeccapurple"/> : <FaRegHeart />}
        <FaRegCommentDots />
        <FaShare />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>

      <div className="detail">
        <span>
          <b>{name}</b>
        </span>
        <span>{desc}</span>
      </div>
    </div>
  );
};

export default Post;
