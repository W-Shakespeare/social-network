import { AuthorizationReducerActionTypes } from "../actions/actionsType";
import { AUTHORIZATION } from "../types/types";

type InitialStateType = {
  login: string | null;
  email: string | null;
  id: number | null;
  messages: string | null;
  isAuthorization: boolean;
};

const initialState: InitialStateType = {
  login: null,
  email: null,
  id: null,
  messages: "",
  isAuthorization: false,
};

function authorizationReducer(
  state = initialState,
  action: AuthorizationReducerActionTypes
): InitialStateType {
  switch (action.type) {
    case AUTHORIZATION:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
export default authorizationReducer;
