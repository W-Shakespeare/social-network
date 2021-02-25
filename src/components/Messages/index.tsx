import React, { useEffect, useRef } from "react";
import Messages from "./Messages";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getMessagesData } from "../../redux/thunks";
import { compose } from "redux";
import { withAuthorizationRedirect } from "../../hoc/withAuthorizationRedirect";
import { withClearProfile } from "../../hoc/withClearProfile";
import { sendMessageData } from "../../redux/thunks";
import { withSelectItemMenu } from "../../hoc/withSelectItemMenu";
import { reset } from "redux-form";
import { RootState } from "../../redux/store";
import deepEqual from "react-fast-compare";
import { withErrorBoundary } from "../../hoc/withErrorBoundary";

const MessagesContainer: React.FC = () => {
  const messages = useSelector(
    (state: RootState) => state.messages.messagesWithCurrentFriend,
    deepEqual
  );
  const { currentDialog } = useSelector((state: RootState) => state.dialogs);
  const messagesAnchorRef = useRef<HTMLDivElement>(null);
  const login = useSelector((state: RootState) => state.authorization.login);
  const dispatch = useDispatch();
  let { id } = useParams<{ id: string }>();
  if (messages) {
    window.scrollTo({
      top: 2000,
      behavior: "smooth",
    });
  }
  const sendMessageToFriend = (messageText: string) => {
    dispatch(sendMessageData(messageText, id));
    dispatch(reset("messages"));
  };

  const updateMessages = () => {
    //Rest Api. I know  this method is a bad
    //this server does not implement websocet or other methods
    dispatch(getMessagesData(id));
  };

  useEffect(() => {
    messagesAnchorRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const interval = setInterval(updateMessages, 3000);

    dispatch(getMessagesData(id));
    return () => clearInterval(interval);
  }, []);

  return (
    <Messages
      sendMessageToFriend={sendMessageToFriend}
      messages={messages}
      ref={messagesAnchorRef}
      smallPhoto={!currentDialog ? "" : currentDialog.photos.small}
    />
  );
};

export default compose<React.ComponentType>(
  withErrorBoundary,
  withSelectItemMenu,
  withClearProfile,
  withAuthorizationRedirect
)(MessagesContainer);
