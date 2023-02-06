import React, { useState, useRef } from "react";

import "./share.css";
import ProfileImg from "../../../assets/ibtisama.jpeg";
import {
  FaShareAlt,
  FaPhotoVideo,
  FaLocationArrow,
  FaVideo,
} from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const Share = () => {
  const [image, setImage] = useState(null);
  const ImageRef = useRef();

  const imageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let postImage = event.target.files[0];
      setImage({
        image: URL.createObjectURL(postImage),
      });
    }
  };

  return (
    <div className="share">
      <img src={ProfileImg} alt="Profile Image" />
      <div>
        <input type="text" placeholder="What do you think of?" />
        <div className="postIcons">
          <div
            className="icon"
            style={{ color: "var(--photo)" }}
            onClick={() => ImageRef.current.click()}
          >
            <FaPhotoVideo /> Photos
          </div>
          <div className="icon" style={{ color: "var(--video)" }}>
            <FaVideo /> Videos
          </div>
          <div className="icon" style={{ color: "var(--location)" }}>
            <FaLocationArrow /> Location
          </div>
          <div className="icon" style={{ color: "var(--shedable)" }}>
            <FaShareAlt /> Share
          </div>
          <button className=" button share-button">Share</button>
          <div style={{ display: "none" }} onChange={imageChange}>
            <input type="file" name="postImage" ref={ImageRef} />
          </div>
        </div>
        {image && (
          <div className="postImage">
            <GrClose onClick={() => setImage(null)} />
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Share;
