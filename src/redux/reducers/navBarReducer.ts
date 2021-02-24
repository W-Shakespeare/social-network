import { SetSelectedKeysReducerActionType } from "../actions/actionsType";
import { SET_SELECTED_KEYS } from "../types/types";

const initialState = {
  selectedKeys: [""],
};
type InitialState = typeof initialState;
function navBarReducer(
  state = initialState,
  action: SetSelectedKeysReducerActionType
): InitialState {
  switch (action.type) {
    case SET_SELECTED_KEYS:
      return {
        ...state,
        selectedKeys: action.selectedKeys,
      };
    default:
      return state;
  }
}
export default navBarReducer;
