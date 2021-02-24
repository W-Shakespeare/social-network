import React, { useState } from "react";
import "./Profile.css";
import { Spin } from "antd";
import ProfileDataForm from "./ProfileDataForm";
import ProfileData from "./ProfileData";
import { ProfileObjType } from "../../type";
import { IFormProps } from "./ProfileDataForm";

interface IProps {
  errorMessages: any;
  isFetching: boolean;
  isOwnerID: boolean;
  goToEditeMode: () => void;
  isEditeMode: boolean;
  sendPhotoSelected: (
    profilePhoto: React.ChangeEvent<HTMLInputElement> | null
  ) => void;
  appear: boolean;
  sendProfileForm: (profileFormData: IFormProps) => void;
  backToProfileData: () => void;
  profile: ProfileObjType | null;
}

const Profile: React.FC<IProps> = React.memo(
  ({
    errorMessages,
    // photos,
    isFetching,
    isOwnerID,
    goToEditeMode,
    isEditeMode,
    sendProfileForm,
    sendPhotoSelected,
    backToProfileData,
    profile,
    appear,
  }) => {
    console.log("isOwnerID".toUpperCase(), isOwnerID);
    {
      if (profile === null || (profile === null && isFetching))
        return <Spin className="example" size="large" />;
    }
    return (
      <>
        {isEditeMode && isOwnerID ? (
          <ProfileDataForm
            backToProfileData={backToProfileData}
            errorMessages={errorMessages}
            initialValues={profile}
            onSubmit={sendProfileForm}
            contacts={profile.contacts}
          />
        ) : (
          <ProfileData
            {...profile}
            isOwnerID={isOwnerID}
            goToEditeMode={goToEditeMode}
            sendPhotoSelected={sendPhotoSelected}
            appear={appear}
          />
        )}
      </>
    );
  }
);

export default Profile;
