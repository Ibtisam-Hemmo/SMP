import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GrEdit } from "react-icons/gr";

import EditModal from "../../profileSide/editProfileModal/EditModal";
import { getUser } from "../../../apis/userRequest";
import { logout } from "../../../actions/auth/login";
import "./infoCard.css";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const user = useSelector((state) => state.authReducer.authData);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        const { data } = await getUser(profileUserId);
        setProfileUser(data);
      }
    };
    fetchProfileUser();
  }, [profileUserId]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/')
  };

  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4>Profile Info</h4>
        {profileUserId === user._id && (
          <div>
            <GrEdit
              width="2rem"
              height="1.2rem"
              onClick={() => setModalOpened(true)}
            />
            <EditModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data={user}
            />
          </div>
        )}
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>
          {profileUser.relationship
            ? profileUser.relationship
            : "Enter your status"}
        </span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>
          {profileUser.location ? profileUser.location : "Enter your location"}
        </span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>
          {profileUser.working
            ? profileUser.working
            : "Enter your working place"}
        </span>
      </div>
      {profileUserId === user._id ? (
        <button className="button logout-button" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default InfoCard;
