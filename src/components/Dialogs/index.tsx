import React, { useState, useEffect } from "react";
import Dialogs from "./Dialogs";

import { useDispatch, useSelector } from "react-redux";
import { getDialogsData, sendMessageData } from "../../redux/thunks";
import { cleanMessages, setCurrentDialog } from "../../redux/actions/actions";
import { compose } from "redux";
import { withAuthorizationRedirect } from "../../hoc/withAuthorizationRedirect";
import { withClearProfile } from "../../hoc/withClearProfile";
import { withSelectItemMenu } from "../../hoc/withSelectItemMenu";
import { withScrollToTop } from "../../hoc/withScrollToTop";
import { RootState } from "../../redux/store";
import { DialogsObjType } from "../../type";
import { withErrorBoundary } from "../../hoc/withErrorBoundary";

const DialogsContainer: React.FC = () => {
  const [appear, setAppear] = useState(false);
  const dispatch = useDispatch();
  const dialogs = useSelector((state: RootState) => state.dialogs.dialogs);

  const selectedDialog = (currentDialog: DialogsObjType) => {
    dispatch(setCurrentDialog(currentDialog));
  };

  useEffect(() => {
    if (dialogs) {
      setTimeout(() => {
        setAppear(true);
      }, 200);
    }
  }, [dialogs]);

  useEffect(() => {
    dispatch(getDialogsData());
    dispatch(cleanMessages());
  }, []);

  return (
    <Dialogs
      dialogs={dialogs}
      appear={appear}
      selectedDialog={selectedDialog}
    />
  );
};

export default compose<React.ComponentType>(
  withErrorBoundary,
  withScrollToTop,
  withSelectItemMenu,
  withClearProfile,
  withAuthorizationRedirect
)(DialogsContainer);
