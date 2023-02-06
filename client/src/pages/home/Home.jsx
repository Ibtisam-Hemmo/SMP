import React from "react";
import { ProfileSide, PostSide } from "../../components";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <ProfileSide />
      <PostSide />
      <div className="rightSide"> </div>
    </div>
  );
};

export default Home;
