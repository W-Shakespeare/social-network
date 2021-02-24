import React, { useState, useEffect } from "react";
import LoginForm from "./Login";
import { compose } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/thunks";
import { RootState } from "../../redux/store";
import { withErrorBoundary } from "../../hoc/withErrorBoundary";

interface IFormProps {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginContainer: React.FC = () => {
  const [delay, setdelay] = useState(false);
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const dispatch = useDispatch();
  const { isAuthorization, messages } = useSelector(
    (state: RootState) => state.authorization
  );
  const sendAuthData = (formData: IFormProps) => {
    let { email, password, rememberMe } = formData;
    dispatch(login(email, password, rememberMe));
    setIsLoginFailed(false);
  };
  useEffect(() => {
    if (isAuthorization) {
      setTimeout(() => {
        setdelay(true);
      }, 4900);
    }
  }, [isAuthorization]);

  useEffect(() => {
    // @ts-ignore
    if (messages[0] != "You are not authorized") {
      // @ts-ignore
      if (messages != "") {
        setIsLoginFailed(true);
      }
    }
  }, [messages]);

  return (
    <div
      className={
        !isAuthorization && isLoginFailed
          ? "wrappedLogin failed"
          : // @ts-ignore
          !isAuthorization
          ? "wrappedLogin"
          : "wrappedLogin success2"
      }
    >
      {isAuthorization && delay ? (
        <div className="logged">You Logged</div>
      ) : (
        <LoginForm
          onSubmit={sendAuthData}
          messages={messages}
          isAuthorization={isAuthorization}
        />
      )}
    </div>
  );
};

export default compose<React.ComponentType>(withErrorBoundary)(LoginContainer);
