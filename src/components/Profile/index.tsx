import React, { useState, useEffect, useMemo } from "react";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileData,
  sendProfileDataForm,
  sendProfilePhotoData,
} from "../../redux/thunks";
import { withAuthorizationRedirect } from "../../hoc/withAuthorizationRedirect";
import { withScrollToTop } from "../../hoc/withScrollToTop";
import { withSelectItemMenu } from "../../hoc/withSelectItemMenu";
import { compose } from "redux";
import {
  profileSetErrorMessages,
  setEditeMode,
} from "../../redux/actions/actions";
import { IFormProps } from "./ProfileDataForm";
import { RootState } from "../../redux/store";
import { withErrorBoundary } from "../../hoc/withErrorBoundary";

const ProfileContainer: React.FC = () => {
  let { id } = useParams<{ id: string }>();
  let myId = useSelector((state: RootState) => state.authorization.id);
  let isAuth = useSelector(
    (state: RootState) => state.authorization.isAuthorization
  );
  let isOwnerID = !id;
  let {
    profile,
    isFetching,
    isEditeMode,
    errorMessages,
    profilePhotoSetIsFetching,
  } = useSelector((state: RootState) => state.profile);
  const [appear, setAppear] = useState(false);
  const dispatch = useDispatch();
  const goToEditeMode = () => {
    dispatch(setEditeMode(true));
  };

  const sendProfileForm = (profileFormData: IFormProps) => {
    dispatch(sendProfileDataForm(profileFormData, myId));
    console.log(profileFormData);
  };
  // File
  const sendPhotoSelected = (profilePhoto: any) => {
    if (profilePhoto.target.files.length) {
      dispatch(sendProfilePhotoData(profilePhoto.target.files[0], myId));
      console.log(profilePhoto);
    }
  };

  const backToProfileData = () => {
    dispatch(profileSetErrorMessages(null));
    dispatch(setEditeMode(false));
  };

  useEffect(() => {
    dispatch(getProfileData(Number(id) || myId, isOwnerID, false));
  }, [isAuth]);

  useEffect(() => {
    if (profile) {
      setTimeout(() => {
        setAppear(true);
      }, 300);
    }
  }, [profile]);
  return (
    <>
      <Profile
        errorMessages={errorMessages}
        sendProfileForm={sendProfileForm}
        sendPhotoSelected={sendPhotoSelected}
        backToProfileData={backToProfileData}
        isEditeMode={isEditeMode}
        goToEditeMode={goToEditeMode}
        isOwnerID={isOwnerID}
        profile={profile}
        isFetching={isFetching}
        appear={appear}
        profilePhotoSetIsFetching={profilePhotoSetIsFetching}
      />
    </>
  );
};
export default compose<React.ComponentType>(
  withErrorBoundary,
  withScrollToTop,
  withSelectItemMenu,
  withAuthorizationRedirect
)(ProfileContainer);
