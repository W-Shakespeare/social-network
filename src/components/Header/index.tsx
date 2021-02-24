import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const HeaderContainer = () => {
  let { isAuthorization, login, email, id } = useSelector(
    (state: RootState) => state.authorization
  );
  let photo = useSelector((state: RootState) => state.profile.headerPhotos);

  return (
    <Header
      isAuthorization={isAuthorization}
      login={login}
      email={email}
      id={id}
      photo={photo}
    />
  );
};

export default HeaderContainer;
