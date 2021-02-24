import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData, getProfileData } from "../../redux/thunks";
import App from "./App";
import { RootState } from "../../redux/store";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const AppContainer: React.FC = () => {
  const dispatch = useDispatch();
  let myId = useSelector((state: RootState) => state.authorization.id);
  let { isAuthorization } = useSelector(
    (state: RootState) => state.authorization
  );
  let headerPhotoInit = true;
  let isOwnerID = true;
  useEffect(() => {
    dispatch(getAuthData());
    dispatch(getProfileData(myId, isOwnerID, headerPhotoInit));
  }, [isAuthorization]);

  return <App />;
};

export default AppContainer;
