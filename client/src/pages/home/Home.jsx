import React from "react";
import { ProfileSide } from "../../components";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <ProfileSide />
      <div className="posts">  </div>
      <div className="rightSide">  </div>
    </div>
  );
};

export default Home;
