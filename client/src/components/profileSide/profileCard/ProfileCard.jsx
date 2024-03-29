import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaRegCommentDots } from "react-icons/fa";

import "./profileCard.css";
import { getUser } from "../../../apis/userRequest";
import { createChat } from "../../../apis/chatRequest";
import { Loading } from "../../index.js";

const ProfileCard = ({ location }) => {
  const [person, setPerson] = useState({});
  const [loading, setLoading] = useState(true);

  const user = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts);
  const navigate = useNavigate();
  const { id } = useParams();
  const PublicImages = import.meta.env.VITE_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await getUser(id ? id : user._id);
        setPerson(data);
        setLoading(false);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    fetchUser();
  }, [id]);

  const handleChat = () => {
    const chat = async () => {
      try {
        const data = { userId: user._id, id: id };
        await createChat(data);
        navigate("/chat", { replace: true });
      } catch (error) {
        console.log("error: ", error);
      }
    };
    chat();
  };

  if (loading) return <Loading />;

  return (
    <div className="profileCard">
      <div className="profileImages">
        <img
          src={
            person?.coverPicture
              ? `${PublicImages}${person?.coverPicture}`
              : PublicImages + "profileBack.jpeg"
          }
          alt="Cover Image"
        />
        <img
          src={
            person?.avatar
              ? `${PublicImages}${person?.avatar}`
              : PublicImages + "user.png"
          }
          alt="Profile Image"
        />
      </div>
      {user._id === id || location == "home page" ? (
        " "
      ) : (
        <FaRegCommentDots
          onClick={handleChat}
          fontSize="22px"
          style={{
            alignSelf: "end",
            marginRight: "45px",
            cursor: "pointer",
          }}
        />
      )}

      <div className="profileName">
        <span>{person?.firstName + " " + person?.lastName}</span>
        <span style={{ fontSize: "12px" }}>@{person.username}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{person?.followers?.length}</span>
            <span>followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{person?.following?.length}</span>
            <span>following</span>
          </div>
          {location === "profile page" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>{posts.filter((post) => post.userId === id).length}</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === "profile page" ? (
        ""
      ) : (
        <span>
          <Link
            to={`/profile/${user?._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
