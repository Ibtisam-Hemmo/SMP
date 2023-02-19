import React from "react";
import { ProfileSide, PostSide, RightSide } from "../../components";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <ProfileSide location="home page" />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
