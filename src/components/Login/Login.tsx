import React from "react";
import "./Login.css";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Button, Checkbox, Form } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { makeField } from "../../lib/reduxForm-antd";
const ACheckbox = makeField(Checkbox);

interface IFormProps {
  email: string;
  password: string;
  rememberMe: boolean;
}
interface IOwnProps {
  messages: any;
  isAuthorization: boolean;
}

const Login: React.FC<InjectedFormProps<IFormProps, IOwnProps> & IOwnProps> = ({
  handleSubmit,
  messages,
  isAuthorization,
}) => {
  let form = useSelector((state: RootState) => state.form);
  console.log(form);
  return (
    <div className="Login">
      <div className="status">{messages}</div>
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          component="input"
          type="text"
          className={!isAuthorization ? "email" : "email" + " " + "success"}
          placeholder="email"
        ></Field>
        <Field
          name="password"
          component="input"
          type="password"
          className={
            !isAuthorization ? "password" : "password" + " " + "success"
          }
          placeholder="password"
        ></Field>
        <Field name="rememberMe" component={ACheckbox} type="checkbox">
          Remember me
        </Field>
        <Button htmlType="submit" type="ghost">
          Send
        </Button>
      </form>
    </div>
  );
};

const LoginForm = reduxForm<IFormProps, IOwnProps>({
  form: "login",
})(Login);

export default LoginForm;
