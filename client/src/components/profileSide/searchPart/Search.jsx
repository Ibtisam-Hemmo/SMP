import React from "react";
import { FaSearch } from "react-icons/fa";

import Logo from "../../../assets/logo.png";
import "./search.css";

const Search = () => {
  return (
    <div className="searchSide">
      <img src={Logo} alt="Platform Logo" width={"50px"} height={"40px"} />
      <div className="search">
        <input type="text" placeholder="Explore the world ..." />
        <div className="searchIcon">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Search;
