import React, { useEffect } from "react";
import { compose } from "redux";
import { withErrorBoundary } from "../../hoc/withErrorBoundary";
import { withSelectItemMenu } from "../../hoc/withSelectItemMenu";

const PageError: React.FC = () => {
  //this page for demonstration ErrorBoundary
  useEffect(() => {
    throw new Error("Уупс!");
  });
  return <div>И я умолк подобно соловью, свое пропел и больше не пою</div>;
};

export default compose<React.ComponentType>(
  withErrorBoundary,
  withSelectItemMenu
)(PageError);
