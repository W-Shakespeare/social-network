import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, startChat } from "../../redux/reducers/chatReducer";
import { RootState } from "../../redux/store";
import MessageContainer from "../Messages/Message";
import MessageFormContainer from "../Messages/MessageFormContainer";
import { reset } from "redux-form";
import "./index.css";

const GroupСhat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state: RootState) => state.chat.messages);
  let ownerId = useSelector((state: RootState) => state.authorization.id);
  useEffect(() => {
    dispatch(startChat());
  }, []);

  const sendMessageToFriend = (messageText: string) => {
    dispatch(sendMessage(messageText));
    dispatch(reset("messages"));
  };

  return (
    <div className="chatWrapper">
      <div className="chat">
        {messages.map((m) => {
          return (
            <MessageContainer
              senderId={ownerId}
              photo={m.photo}
              body={m.message}
              name={m.userName}
            />
          );
        })}
      </div>
      <MessageFormContainer sendMessageToFriend={sendMessageToFriend} />
    </div>
  );
};
export default GroupСhat;
// dispatch(startChat());
