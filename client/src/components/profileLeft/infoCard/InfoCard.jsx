import React, { useState } from "react";
import "./infoCard.css";
import { GrEdit } from "react-icons/gr";
// import ProfileModal from "../ProfileModal.jsx/ProfileModal";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <GrEdit
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          {/* <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          /> */}
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>Single</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Palestine</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>GSG</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
