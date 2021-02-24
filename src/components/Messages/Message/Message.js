import Avatar from "../../Avatar/Avatar";
import React from "react";
import "./Message.css";
import { CheckOutlined } from "@ant-design/icons";
const Message = ({
  message,
  name,
  body,
  viewed,
  ownerId,
  senderId,
  photo,
  ownerPhoto,
}) => {
  return (
    <div className={`${ownerId == senderId ? "my" : "friend"}Message message`}>
      {ownerId == senderId ? (
        <Avatar src={ownerPhoto} />
      ) : (
        <Avatar src={photo} />
      )}

      <div className="name">{name}</div>
      <div className="body">{body}</div>

      <div className="viewed">{viewed ? <CheckOutlined /> : "No"}</div>
    </div>
  );
};
export default Message;
