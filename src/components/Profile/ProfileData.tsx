import React from "react";
import { EditOutlined } from "@ant-design/icons";
import Avatar from "../Avatar/Avatar";
import { NavLink } from "react-router-dom";
import { ProfileObjType } from "../../type";

interface IProps {
  goToEditeMode: () => void;
  isOwnerID: boolean;
  sendPhotoSelected: (
    profilePhoto: React.ChangeEvent<HTMLInputElement>
  ) => void;
  appear: boolean;
  contacts: any;
}

const ProfileData: React.FC<ProfileObjType & IProps> = ({
  goToEditeMode,
  fullName,
  lookingForAJob,
  lookingForAJobDescription,
  userId,
  aboutMe,
  photos,
  isOwnerID,
  sendPhotoSelected,
  appear,
  contacts,
}) => {
  console.log(contacts);
  return (
    <div className={`Profile ${appear ? "appear" : false}`}>
      <div className="photos">
        {!photos ? (
          <Avatar size={220} />
        ) : (
          <Avatar src={photos.large} size={220} />
        )}
      </div>
      <div className="changehotoFile">
        {isOwnerID ? <input onChange={sendPhotoSelected} type="file" /> : false}
      </div>
      {!isOwnerID ? (
        <div className="profileSendMessage">
          <NavLink to={"/Messages/" + userId}>Send message</NavLink>
        </div>
      ) : (
        false
      )}
      {isOwnerID ? (
        <EditOutlined onClick={goToEditeMode} className="edite" />
      ) : (
        false
      )}

      <div className="fullName">{fullName}</div>
      <div className="aboutMe">
        <p> About me</p>
        <div>
          <p>{!aboutMe ? "---" : aboutMe}</p>
        </div>
      </div>
      <div className="lookingForAJob">
        <p>look for a job</p>
        <p>{!lookingForAJob ? "---" : lookingForAJob}</p>
      </div>
      <div className="lookingForAJobDescription">
        <p>Look for a job description</p>
        <p>{!lookingForAJobDescription ? "---" : lookingForAJobDescription}</p>
      </div>
      <br />
      <>
        {Object.keys(contacts).map((c: any) => {
          return (
            <p>
              {c} - {!contacts[c] ? "none" : contacts[c]}
            </p>
          );
        })}
      </>
    </div>
  );
};

export default ProfileData;
