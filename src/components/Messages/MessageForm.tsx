import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

interface IFormProps {
  messageText: string;
}

interface IOwnProps {
  onEnterPressDown: (e: any) => void;
}

const MessageForm: React.FC<
  InjectedFormProps<IFormProps, IOwnProps> & IOwnProps
> = ({ handleSubmit, onEnterPressDown }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        onKeyDown={onEnterPressDown}
        name="messageText"
        component="textarea"
        type="text"
        className="messageText"
        placeholder="Send your friend message"
      ></Field>
    </form>
  );
};

export default reduxForm<IFormProps, IOwnProps>({
  form: "messages",
})(MessageForm);
