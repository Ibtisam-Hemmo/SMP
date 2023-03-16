import { useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { uploadImage } from "../../../actions/uploadAction";
import { updateUser } from "../../../actions/userAction";

function EditModal({ modalOpened, setModalOpened, data }) {
  
  const theme = useMantineTheme();
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "avatar"
        ? setAvatar(img)
        : setCoverImage(img);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = formData;
    if (avatar) {
      const data = new FormData();
      const fileName = Date.now() + avatar.name;
      data.append("name", fileName);
      data.append("file", avatar);
      UserData.avatar = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }

    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(updateUser(param.id, UserData));
    setModalOpened(false);
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your info</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            value={formData.firstName}
          />

          <input
            type="text"
            className="infoInput"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.lastName}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="working"
            placeholder="Works at"
            onChange={handleChange}
            value={formData.working}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="location"
            placeholder="Lives in"
            onChange={handleChange}
            value={formData.location}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Relationship Status"
            name="relationship"
            onChange={handleChange}
            value={formData.relationship}
          />
        </div>

        <div>
          Profile Image
          <input type="file" name="avatar" onChange={onImageChange}/>
          Cover Image
          <input type="file" name="coverPicture" onChange={onImageChange} />
        </div>

        <button className="button infoButton" onClick={handleSubmit}> Update </button>
      </form>
    </Modal>
  );
}

export default EditModal;
