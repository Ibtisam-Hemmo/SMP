import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { getAllUsers } from "../../../apis/userRequest";
import User from "../user/User";
import "./followersCard.css";

const FollowersCard = () => {
  const [people, setPeople] = useState([]);
  const user = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPeople = async () => {
      const { data } = await getAllUsers();
      setPeople(data);
    };
    fetchPeople();
  }, []);

  if (!people) return "Loading ...";

  return (
    <div className="followersCard">
      <h3>People you may know</h3>
      {people?.map((follower) => {
          if (follower._id !== user._id) {
            return <User follower={follower} key={follower._id} />;
          }
        })}
    </div>
  );
};

export default FollowersCard;
