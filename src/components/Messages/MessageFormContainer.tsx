import React from "react";
import { connect } from "react-redux";
import { arrayInsert, formValueSelector } from "redux-form";
import MessageForm from "./MessageForm";

interface IProps {
  messageText: string;
  sendMessageToFriend: (messageText: string) => void;
}

const MessageFormContainer: React.FC<IProps> = ({
  messageText,
  sendMessageToFriend,
}) => {
  const onEnterPressDown = (e: {
    keyCode: number;
    preventDefault: () => void;
  }) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      sendMessageToFriend(messageText);
    }
  };

  return <MessageForm onEnterPressDown={onEnterPressDown} />;
};

const selector = formValueSelector("messages"); // <-- same as form name
export default connect((state) => {
  const messageText = selector(state, "messageText");
  return { messageText };
})(MessageFormContainer);
