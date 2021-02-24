import { MessagesObjType } from "../../type";
import { MessagesReducerActionTypes } from "../actions/actionsType";
import { SET_MESSAGES, CLEAN_MESSAGES } from "../types/types";

interface InitialStateType {
  messagesWithCurrentFriend: Array<MessagesObjType> | null;
}

const initialState: InitialStateType = {
  messagesWithCurrentFriend: null,
};

function messagesReducer(
  state = initialState,
  action: MessagesReducerActionTypes
): InitialStateType {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        messagesWithCurrentFriend: action.messagesArr,
      };
    case CLEAN_MESSAGES:
      return {
        ...state,
        messagesWithCurrentFriend: null,
      };
    default:
      return state;
  }
}
export default messagesReducer;
