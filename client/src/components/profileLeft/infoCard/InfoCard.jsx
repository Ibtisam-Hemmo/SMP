import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GrEdit } from "react-icons/gr";
import EditModal from "../../profileSide/editProfileModal/EditModal";
import "./infoCard.css";
import { getUser } from "../../../apis/userReduest";
import { logout } from "../../../actions/auth/login";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const user = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        const profileUser = await getUser(profileUserId);
        setProfileUser(profileUser.data);
      }
    };
    fetchProfileUser();
  }, [user]);

  const handleLogout = () => {
    dispatch(logout());
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
          {user.relationship ? user.relationship : "Enter your status"}
        </span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>{user.location ? user.location : "Enter your location"}</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>{user.working ? user.working : "Enter your working place"}</span>
      </div>

      <button className="button logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default InfoCard;
