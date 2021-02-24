import { SET_DIALOGS, SET_CURRENT_DIALOG } from "../types/types";
import { InferActionsTypes } from "../store";
import { DialogsObjType } from "../../type";
import { DialogsReducerActionTypes } from "../actions/actionsType";

interface InitialStateType {
  dialogs: Array<DialogsObjType> | null;
  currentDialog: DialogsObjType | null;
}

const initialState: InitialStateType = {
  dialogs: null,
  currentDialog: null,
};

function dialogsReducer(
  state = initialState,
  action: DialogsReducerActionTypes
): InitialStateType {
  switch (action.type) {
    case SET_DIALOGS:
      return {
        ...state,
        dialogs: action.dialogsArr,
      };
    case SET_CURRENT_DIALOG:
      return {
        ...state,
        currentDialog: action.currentDialog,
      };

    default:
      return state;
  }
}
export default dialogsReducer;
