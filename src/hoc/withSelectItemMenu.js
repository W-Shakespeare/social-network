import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setSelectedKeys } from "../redux/actions/actions";

export const withSelectItemMenu = (Component) => {
  // this HOC is needed to display navigation correctly
  const SelectItemMenuContainer = ({ props }) => {
    const dispatch = useDispatch();
    let location = useLocation();
    let pathname = location.pathname;
    dispatch(setSelectedKeys(pathname));
    return <Component {...props} />;
  };
  return SelectItemMenuContainer;
};
