import React, { useState } from "react";
import "./post.css";
import { FaRegCommentDots, FaHeart, FaRegHeart, FaShare } from "react-icons/fa";
import { useSelector } from "react-redux";
import { likePost } from "../../../apis/feedRequest";

const Post = ({ post }) => {
  const { image, name, desc, likes, _id } = post;
  window.REACT_APP_PUBLIC_FOLDER = "http://localhost:5000/images/";

  const user = useSelector((state) => state.authReducer.authData);
  const [likeStatus, setLiked] = useState(likes.includes(user._id));
  const [likesNo, setLikes] = useState(likes.length);

  const handleLike = () => {
    likePost(_id, user._id);
    setLiked((prev) => !prev);
    likeStatus ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  return (
    <div className="post">
      {image ? (
        <img src={`${window.REACT_APP_PUBLIC_FOLDER}${image}`} alt="Image" />
      ) : (
        ""
      )}

      <div
        className="postReact"
        style={{ cursor: "pointer" }}
        onClick={handleLike}
      >
        {likeStatus ? <FaHeart fill="rebeccapurple" /> : <FaRegHeart />}
        <FaRegCommentDots />
        <FaShare />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likesNo} likes
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
