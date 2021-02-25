import React from "react";
import Avatar from "../../Avatar/Avatar";

interface IProps {
  userName: string;
  hasNewMessages: boolean;
  newMessagesCount: number;
  photos?: any;
  id: number;
}

export const Dialog: React.FC<IProps> = ({
  userName,
  hasNewMessages,
  newMessagesCount,
  photos: { small, large },
  id,
}) => {
  return (
    <div className="dialog">
      <div className="photo">
        <Avatar src={large} />
      </div>
      <div className="name">{userName}</div>
      <div className="messageStatus">
        New Messages - {hasNewMessages ? newMessagesCount : 0}
      </div>
    </div>
  );
};
