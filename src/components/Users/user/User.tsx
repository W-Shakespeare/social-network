import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "../../Avatar/Avatar";
import { Button } from "antd";

interface PropsType {
  id: number;
  name: string;
  photos: { small: string; large: string };
  followed: boolean;
  status: null | string;
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  isLoadFollow: boolean;
  isLoadUnFollow: boolean;
}

const User: React.FC<PropsType> = ({
  id,
  name,
  photos,
  followed,
  status,
  follow,
  unFollow,
  isLoadFollow,
  isLoadUnFollow,
}) => {
  return (
    <div className="users">
      <NavLink to={"/Profile/" + id}>
        <div className="photos">
          {!photos.large ? (
            <Avatar size={50} />
          ) : (
            <Avatar size={50} src={photos.large} />
          )}
        </div>
      </NavLink>
      <div className="name">
        <p>{`name ${name}`}</p>
      </div>
      <div className="status">
        <p>{!status ? "This user doesn`t have status" : status}</p>
      </div>
      <div className="followed">
        {!followed ? (
          <Button
            onClick={() => follow(id)}
            ghost
            shape="round"
            loading={isLoadFollow}
          >
            Follow
          </Button>
        ) : (
          <Button
            onClick={() => unFollow(id)}
            ghost
            loading={isLoadUnFollow}
            shape="round"
          >
            Unfollow
          </Button>
        )}
      </div>
    </div>
  );
};

export default User;
