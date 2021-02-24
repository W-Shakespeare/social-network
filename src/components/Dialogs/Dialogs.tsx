import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";
import { Spin } from "antd";
import { Dialog } from "./Dialog";
import { DialogsObjType } from "../../type";

interface IProps {
  dialogs: Array<DialogsObjType> | null;
  appear: boolean;
  selectedDialog: (dialog: DialogsObjType) => void;
}

const Dialogs: React.FC<IProps> = ({ dialogs, appear, selectedDialog }) => {
  console.log("DIALOGSs", dialogs);
  return (
    <>
      {!dialogs ? (
        <Spin className="example" size="large" />
      ) : (
        <div className={`dialogsWrapper ${appear ? "appear" : false}`}>
          {dialogs.map((dialog) => {
            return (
              <NavLink
                onClick={() => selectedDialog(dialog)}
                key={dialog.id}
                to={"/Messages/" + dialog.id}
              >
                <Dialog {...dialog} />
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Dialogs;
