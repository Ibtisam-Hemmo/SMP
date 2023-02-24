import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineNotificationsActive, MdSettings } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { FaRegCommentDots } from "react-icons/fa";

import "./rightSide.css";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="/home">
        <HiHome fill="rebeccapurple" />
      </Link>
      <MdOutlineNotificationsActive />
      <MdSettings />
      <Link to="/chat">
        <FaRegCommentDots />
      </Link>
    </div>
  );
};

export default NavIcons;
