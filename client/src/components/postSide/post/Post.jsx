import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { format } from "timeago.js";
import { FaRegCommentDots, FaHeart, FaRegHeart, FaShare } from "react-icons/fa";

import { likePost } from "../../../apis/feedRequest";
import { getUser } from "../../../apis/userRequest";
import { PostLoading } from "../../index.js";
import "./post.css";

const Post = ({ post }) => {

  const { image, desc, likes, _id, userId, createdAt } = post;
  
  const user = useSelector((state) => state.authReducer.authData);
  const [likeStatus, setLiked] = useState(likes.includes(user._id));
  const [likesNo, setLikes] = useState(likes.length);
  const [person, setPerson] = useState({});
  const [loading, setLoading] = useState(true);
  
  window.REACT_APP_PUBLIC_FOLDER = "http://localhost:5000/images/";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await getUser(userId);
        setPerson(data);
        setLoading(false);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    fetchUser();
  }, []);

  const handleLike = () => {
    likePost(_id, user._id);
    setLiked((prev) => !prev);
    likeStatus ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };
  
  if (loading) return <PostLoading />;
  return (
    <div className="post">
      <div className="follower">
        <div>
          <img
            src={
              person.avatar
                ? `${window.REACT_APP_PUBLIC_FOLDER}${person.avatar}`
                : window.REACT_APP_PUBLIC_FOLDER + "user.png"
            }
            alt=""
            className="followerImg"
          />
          <div className="name">
            <span>{person.username}</span>
            <span style={{ fontSize: "11px" }}>{format(createdAt)}</span>
          </div>
        </div>
      </div>
      {image ? (
        <img src={`${window.REACT_APP_PUBLIC_FOLDER}${image}`} alt="Image" />
      ) : (
        ""
      )}
      <div className="detail">
        <span>{desc}</span>
      </div>
      <div
        className="postReact"
        style={{ cursor: "pointer" }}
        
      >
        {likeStatus ? <FaHeart fill="rebeccapurple" onClick={handleLike}/> : <FaRegHeart onClick={handleLike}/>}
        <FaRegCommentDots />
        <FaShare />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likesNo} likes
      </span>
    </div>
  );
};

export default Post;
