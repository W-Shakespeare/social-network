import React from "react";
import { useDispatch } from "react-redux";
import { clearProfile } from "../redux/actions/actions";
export const withClearProfile = (Component) => {
  // this HOC is needed so that there is no flickering, changing old data to new ones on the display
  const ClearContainer = ({ props }) => {
    const dispatch = useDispatch();
    dispatch(clearProfile());
    return <Component {...props} />;
  };
  return ClearContainer;
};
