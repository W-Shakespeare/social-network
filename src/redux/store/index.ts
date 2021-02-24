import usersReducer from "../reducers/usersReducer";
import profileReducer from "../reducers/profileReducer";
import authorizationReducer from "../reducers/authorizationReducer";
import dialogsReducer from "../reducers/dialogsReducer";
import messagesReducer from "../reducers/messagesReducer";
import navBarReducer from "../reducers/navBarReducer";

import { Action, createStore } from "redux";
import { combineReducers, applyMiddleware, compose } from "redux";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import chatReducer from "../reducers/chatReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  users: usersReducer,
  authorization: authorizationReducer,
  form: formReducer,
  dialogs: dialogsReducer,
  messages: messagesReducer,
  navBar: navBarReducer,
  chat: chatReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;

export type InferActionsTypes<T> = T extends {
  [keys: string]: (...args: any[]) => infer U;
}
  ? U
  : never;

// export type BaseThunkType<A extends Action, R = void> = ThunkAction<
//   R,
//   RootState,
//   unknown,
//   A
// >;
