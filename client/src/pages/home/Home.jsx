import React from "react";

import { ProfileSide, PostSide, RightSide } from "../../components";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <ProfileSide location="home page" />
      <PostSide location='home page'/>
      <RightSide />
    </div>
  );
};

export default Home;
