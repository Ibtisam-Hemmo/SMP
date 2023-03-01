import React from 'react';
import './loading.css';

const Loading = () => {
  return (
    <div className="profile-card-skeleton">
      <div className="profile-card-skeleton__header">
        <div className="profile-card-skeleton__avatar"></div>
        <div className="profile-card-skeleton__details">
          <div className="profile-card-skeleton__line"></div>
          <div className="profile-card-skeleton__line"></div>
        </div>
      </div>
      <div className="profile-card-skeleton__footer">
        <div className="profile-card-skeleton__stats">
          <div className="profile-card-skeleton__stat">
            <div className="profile-card-skeleton__line"></div>
            <div className="profile-card-skeleton__label">Followers</div>
          </div>
          <div className="profile-card-skeleton__stat">
            <div className="profile-card-skeleton__line"></div>
            <div className="profile-card-skeleton__label">Following</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
