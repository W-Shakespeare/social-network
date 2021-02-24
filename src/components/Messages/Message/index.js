import React from "react";
import { useSelector } from "react-redux";
import Message from "./Message";

const MessageContainer = (props) => {
  let ownerId = useSelector((state) => state.authorization.id);
  let ownerPhoto = useSelector((state) => state.profile.headerPhotos);
  let photo;
  photo = props.photo;

  return (
    <Message
      {...props}
      ownerId={ownerId}
      photo={photo}
      ownerPhoto={ownerPhoto}
    />
  );
};
export default MessageContainer;
