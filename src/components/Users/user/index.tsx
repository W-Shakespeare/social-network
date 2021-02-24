import React from "react";
import { setFollowData, unFollowData } from "../../../redux/thunks";
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

interface PropsType {
  id: number;
  name: string;
  photos: { small: string; large: string };
  followed: boolean;
  status: null | string;
}

const UserContainer: React.FC<PropsType> = (props) => {
  const dispatch = useDispatch();
  //TypeScript
  const { currentPage, pageSize } = useSelector(
    (state: RootState) => state.users.pagination
  );

  const isLoadFollow: boolean = useSelector((state: RootState) =>
    state.users.isBtnFetching.follow.some(
      (userID: number) => userID == props.id
    )
  );
  const isLoadUnFollow: boolean = useSelector((state: RootState) =>
    state.users.isBtnFetching.unFollow.some(
      (userID: number) => userID == props.id
    )
  );

  const follow = (id: number) => {
    dispatch(setFollowData(id, currentPage, pageSize));
  };

  const unFollow = (id: number) => {
    dispatch(unFollowData(id, currentPage, pageSize));
  };

  return (
    <User
      {...props}
      follow={follow}
      unFollow={unFollow}
      isLoadFollow={isLoadFollow}
      isLoadUnFollow={isLoadUnFollow}
    />
  );
};

export default UserContainer;
