import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { FaRegCommentDots, FaHeart, FaRegHeart, FaShare } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import swal from "sweetalert";

import { deletePost, likePost } from "../../../apis/feedRequest";
import { getUser } from "../../../apis/userRequest";
import { PostLoading } from "../../index.js";
import "./post.css";
import removePost from "../../../actions/uploadAction";

const Post = ({ post }) => {
  const { image, desc, likes, _id, userId, createdAt } = post;

  const user = useSelector((state) => state.authReducer.authData);
  const [likeStatus, setLiked] = useState(likes.includes(user._id));
  const [likesNo, setLikes] = useState(likes.length);
  const [person, setPerson] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const PublicImages = import.meta.env.VITE_PUBLIC_FOLDER;

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

  const handleDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this post!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          dispatch(removePost(_id, user._id));
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } catch (error) {
          if (error?.response?.data?.msg)
            swal("Something went wrong, try again");
        }
      } else {
        swal("Your post is safe!");
      }
    });
  };

  if (loading) return <PostLoading />;

  return (
    <div className="post">
      <div className="follower">
        <div>
          <Link to={`/profile/${userId}`}>
            <img
              src={
                person.avatar
                  ? `${PublicImages}${person.avatar}`
                  : PublicImages + "user.png"
              }
              alt=""
              className="followerImg"
            />
          </Link>
          <div className="name">
            <span>{person.username}</span>
            <span style={{ fontSize: "11px" }}>{format(createdAt)}</span>
          </div>
        </div>
        {user._id === userId ? <GrClose onClick={handleDelete} /> : ""}
      </div>
      {image ? (
        <img src={`${PublicImages}${image}`} alt="Image" />
      ) : (
        ""
      )}

      <div className="detail">
        <span>{desc}</span>
      </div>
      <div className="postReact" style={{ cursor: "pointer" }}>
        {likeStatus ? (
          <FaHeart fill="rebeccapurple" onClick={handleLike} />
        ) : (
          <FaRegHeart onClick={handleLike} />
        )}
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
