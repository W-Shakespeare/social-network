import React, { useState, useEffect } from "react";
import Users from "./Users";
import "./UsersMedia.css";
import { compose } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { getUsersData } from "../../redux/thunks";
import { withAuthorizationRedirect } from "../../hoc/withAuthorizationRedirect";
import { withScrollToTop } from "../../hoc/withScrollToTop";
import { setUsersPagePagination } from "../../redux/actions/actions";
import { withClearProfile } from "../../hoc/withClearProfile";
import { withSelectItemMenu } from "../../hoc/withSelectItemMenu";
import { RootState } from "../../redux/store";
import { withErrorBoundary } from "../../hoc/withErrorBoundary";

const UsersContainer = () => {
  const dispatch = useDispatch();
  const { users, isFetching, isBtnFetching, pagination } = useSelector(
    (state: RootState) => state.users
  );
  const [appear, setAppear] = useState(false);
  console.log("users".toUpperCase(), users);

  const onChangePagination = (page: number, pageSize: number) => {
    dispatch(setUsersPagePagination(page, pageSize));
    dispatch(getUsersData(page, pageSize));
    console.log(page, pageSize);
  };

  useEffect(() => {
    dispatch(getUsersData(pagination.currentPage, pagination.pageSize));
  }, []);

  useEffect(() => {
    if (users) {
      setTimeout(() => {
        setAppear(true);
      }, 300);
    }
  }, [users]);
  return (
    <Users
      users={users}
      isFetching={isFetching}
      appear={appear}
      onChangePagination={onChangePagination}
      isBtnFetching={isBtnFetching}
      pagination={pagination}
    />
  );
};

export default compose<React.ComponentType>(
  withErrorBoundary,
  withScrollToTop,
  withSelectItemMenu,
  withClearProfile,
  withAuthorizationRedirect
)(UsersContainer);
