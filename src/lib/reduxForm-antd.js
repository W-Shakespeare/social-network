import React from "react";
import { Form } from "antd";
// this function is needed to connect Ant-Design to Redux Form
export const makeField = (Component) => ({
  input,
  meta,
  children,
  hasFeedback,
  label,
  ...rest
}) => {
  const FormItem = Form.Item;
  const hasError = meta.touched && meta.invalid;
  return (
    <FormItem
      // {...formItemLayout}
      label={label}
      validateStatus={hasError ? "error" : "success"}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
    >
      <Component {...input} {...rest} children={children} />
    </FormItem>
  );
};
