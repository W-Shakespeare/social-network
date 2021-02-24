import React from "react";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { Button } from "antd";
import { ContactsType } from "../../type";

export interface IFormProps {
  aboutMe: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
}

interface IProps {
  errorMessages: any;
  backToProfileData: () => void;
  contacts: ContactsType;
}

const ProfileDataForm: React.FC<
  InjectedFormProps<IFormProps, IProps> & IProps
> = ({ handleSubmit, contacts, errorMessages, backToProfileData }) => {
  return (
    <div style={{ width: "80%" }}>
      {!errorMessages ? (
        false
      ) : (
        <div className="errorMessages">
          {errorMessages.map((message: any) => {
            return <p>{message}</p>;
          })}
        </div>
      )}
      <form className="profileForm" onSubmit={handleSubmit}>
        <p> About me</p>
        <Field
          name="aboutMe"
          component="input"
          type="text"
          className="aboutMe"
          placeholder="aboutMe"
        ></Field>
        <p>look for a job</p>
        <Field
          name="lookingForAJob"
          component="input"
          type="checkbox"
          className="lookingForAJob"
          placeholder="lookingForAJob"
        ></Field>
        <p>Look for a job description</p>
        <Field
          name="lookingForAJobDescription"
          component="textarea"
          type="textarea"
          className="lookingForAJobDescription"
          placeholder="lookingForAJobDescription"
        ></Field>
        <p>Full name</p>
        <Field
          name="fullName"
          component="input"
          type="text"
          className="fullName"
          placeholder="fullName"
        ></Field>
        {Object.keys(contacts).map((contact) => {
          return (
            <>
              <p>{contact}</p>
              <Field
                name={`contacts.${contact}`}
                component="input"
                type="text"
                className={contact}
                placeholder={contact}
              ></Field>
            </>
          );
        })}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "150px",
            marginTop: "7px",
          }}
        >
          <Button htmlType="submit" type="ghost">
            Save
          </Button>
          <Button onClick={backToProfileData} type="ghost">
            Back
          </Button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm<IFormProps, IProps>({
  form: "profileDataForm",
})(ProfileDataForm);
