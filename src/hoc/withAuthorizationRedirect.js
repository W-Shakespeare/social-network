import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";

export const withAuthorizationRedirect = (Component) => {
  const RedirectContainer = ({ props }) => {
    let isAuth = useSelector((state) => state.authorization.isAuthorization);
    let isAuthLocalStorage = window.localStorage.getItem("isAuth");
    if (!isAuthLocalStorage && !isAuth)
      return <Redirect to="/Login"></Redirect>;
    return <Component {...props} />;
  };
  return RedirectContainer;
};
