import React, { useRef, useEffect, LegacyRef } from "react";
import MessageContainer from "./Message";
import MessageFormContainer from "./MessageFormContainer";
import { Result, Button } from "antd";
import { NavLink } from "react-router-dom";

import "./Messages.css";
import { MessagesObjType } from "../../type";

interface IProps {
  messages: Array<MessagesObjType> | null | any;
  sendMessageToFriend: (messageText: string) => void;
  ref: any;
  smallPhoto: string;
}

const Messages: React.FC<IProps> = React.memo(
  React.forwardRef<any, IProps>((props, ref) => {
    console.log("REF_REF", ref);
    return (
      <div className="messages">
        {!props.messages ? (
          <Result
            status="info"
            title="Select dialogs"
            subTitle="Sorry, something went wrong."
            extra={
              <Button type="primary">
                <NavLink to="/Dialogs">Dialogs</NavLink>
              </Button>
            }
          />
        ) : (
          <div className="messagesWrapper">
            {props.messages.map((message: any) => {
              return (
                <MessageContainer
                  key={message.id}
                  name={message.senderName}
                  {...message}
                  photo={props.smallPhoto}
                />
              );
            })}
            <div ref={ref}></div>
            <MessageFormContainer
              sendMessageToFriend={props.sendMessageToFriend}
            />
          </div>
        )}
      </div>
    );
  })
);

export default Messages;
