import React from "react";

import { ProfileSide, PostSide, RightSide } from "../../components";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <ProfileSide location="home page" />
      <PostSide location='home page'/>
      <RightSide />
    </div>
  );
};

export default Home;
