import React, { useState, useRef } from "react";

import "./share.css";
import {
  FaShareAlt,
  FaPhotoVideo,
  FaLocationArrow,
  FaVideo,
} from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { sharePost, uploadImage } from "../../../actions/uploadAction.js";

const Share = () => {
  const [image, setImage] = useState(null);
  const user = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state) => state.postReducer.uploading);
  const ImageRef = useRef();
  const desc = useRef();
  const dispatch = useDispatch();
  
  window.REACT_APP_PUBLIC_FOLDER = "http://localhost:5000/images/";
  
  const imageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let postImage = event.target.files[0];
      setImage(postImage);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log("error: ", error);
      }
    }

    dispatch(sharePost(newPost));
    resetForm();
  };

  const resetForm = () => {
    setImage(null);
    desc.current.value = "";
  };

  return (
    <div className="share">
        <img src={user.coverImg ? user.coverImg : window.REACT_APP_PUBLIC_FOLDER + 'user.png'} alt="Profile Image" />
      <div>
        <input
          type="text"
          placeholder="What do you think of?"
          ref={desc}
          required
        />
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

          <button
            className=" button share-button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Uploading" : "Share"}
          </button>
          <div style={{ display: "none" }} onChange={imageChange}>
            <input type="file" name="postImage" ref={ImageRef} />
          </div>
        </div>
        {image && (
          <div className="postImage">
            <GrClose onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Share;
