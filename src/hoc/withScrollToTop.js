import React from "react";
export const withScrollToTop = (Component) => {
  //this HOC is needed so that each page opens from the beginning
  const ScrollToTopContainer = ({ props }) => {
    window.scrollTo(0, 0);
    return <Component {...props} />;
  };
  return ScrollToTopContainer;
};
