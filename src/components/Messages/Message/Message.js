import Avatar from "../../Avatar/Avatar";
import React from "react";
import "./Message.css";
import { CheckOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

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
      <div className="wrapperAvatar">
        {ownerId == senderId ? (
          <Avatar src={ownerPhoto} size={80} />
        ) : (
          <NavLink to={"/Profile/" + senderId}>
            <Avatar src={photo} size={80} />
          </NavLink>
        )}
        <div className="name">{name}</div>
      </div>

      <div className="wrapperBodyMessage">
        <div className="body">{body}</div>

        <div className="viewed">
          {viewed ? (
            <>
              <CheckOutlined className="view1" />
              <CheckOutlined className="view2" />
            </>
          ) : (
            <CheckOutlined className="view1" />
          )}
        </div>
      </div>
    </div>
  );
};
export default Message;
