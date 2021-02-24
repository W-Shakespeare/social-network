import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import { Button, Spin, Pagination } from "antd";

import "./Users.css";
import UserContainer from "./user";
import { UsersObjType } from "../../type";
interface PropsType {
  users: Array<UsersObjType>;
  isFetching: boolean;
  appear: boolean;
  isBtnFetching: { follow: Array<number>; unFollow: Array<number> };
  onChangePagination: (page: number, pageSize: number) => void;
  pagination: {
    currentPage: number;
    pageSize: number;
    totalCount: number | undefined;
  };
}

const Users: React.FC<PropsType> = ({
  users,
  isFetching,
  appear,
  isBtnFetching,
  onChangePagination,
  pagination,
}) => {
  console.log(appear);
  return (
    <>
      {isFetching ? (
        <Spin className="example" size="large" />
      ) : (
        <>
          <div className={`usersWrapper ${appear ? "appear" : false}`}>
            {users.map((user) => {
              return <UserContainer key={user.id} {...user} />;
            })}
          </div>

          <div className="pagination">
            <Pagination
              onChange={onChangePagination}
              current={pagination.currentPage}
              pageSize={pagination.pageSize}
              total={pagination.totalCount}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Users;
