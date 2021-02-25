import { type } from "os";
import {
  ProfileObjType,
  DialogsObjType,
  MessagesObjType,
  UsersObjType,
} from "../../type";
import {
  ADD_USERS,
  AUTHORIZATION,
  USERS_SET_IS_FETCHING,
  PROFILE_SET_IS_FETCHING,
  SET_PROFILE,
  CLEAR_PROFILE,
  CLEAR_PROFILE_HEADER_PHOTOS,
  PROFILE_SET_ERROR_MESSAGES,
  SET_DIALOGS,
  SET_MESSAGES,
  CLEAN_MESSAGES,
  BUTTON_SET_IS_FETCHING,
  SET_EDITE_MODE_PROFILE,
  SET_USERS_PAGE_PAGINATION,
  SET_SELECTED_KEYS,
  SET_CURRENT_DIALOG,
  CHANGE_PROFILE_PHOTO_SET_IS_FETCHING,
} from "../types/types";

export type AddUsersActionType = {
  type: typeof ADD_USERS;
  users: { error: null | any; items: Array<UsersObjType>; totalCount: number };
};

export type AuthorizationActionType = {
  type: typeof AUTHORIZATION;
  payload: {
    email: string | null;
    id: number | null;
    login: string | null;
    isAuthorization: boolean;
    messages: any;
  };
};

export type UsersSetIsFetchingActionType = {
  type: typeof USERS_SET_IS_FETCHING;
  boolean: boolean;
};

export type ProfileSetIsFetchingActionType = {
  type: typeof PROFILE_SET_IS_FETCHING;
  boolean: boolean;
};

export type SetProfileActionType = {
  type: typeof SET_PROFILE;
  profileObj: ProfileObjType;
  isOwnerID: boolean;
  headerPhotoInit: boolean;
};

export type ClearProfileActionType = {
  type: typeof CLEAR_PROFILE;
};

export type ClearProfileHeaderPhotosActionType = {
  type: typeof CLEAR_PROFILE_HEADER_PHOTOS;
};

export type SetDialogsActionType = {
  type: typeof SET_DIALOGS;
  dialogsArr: Array<DialogsObjType>;
};

export type SetMessagesActionType = {
  type: typeof SET_MESSAGES;
  messagesArr: Array<MessagesObjType>;
};

export type CleanMessagesActionType = {
  type: typeof CLEAN_MESSAGES;
};

export type ButtonSetIsFetchingActionType = {
  type: typeof BUTTON_SET_IS_FETCHING;
  btnObj: {
    toggle: boolean;
    id: number | null;
    followOrUnfollow: string | null;
  };
};

export type SetEditeModeActionType = {
  type: typeof SET_EDITE_MODE_PROFILE;
  boolean: boolean;
};

export type ProfileSetErrorMessagesActionType = {
  type: typeof PROFILE_SET_ERROR_MESSAGES;
  messages: any;
};

export type SetUsersPagePaginationActionType = {
  type: typeof SET_USERS_PAGE_PAGINATION;
  currentPage: number;
  pageSize: number;
};

export type SetSelectedKeysActionType = {
  type: typeof SET_SELECTED_KEYS;
  selectedKeys: Array<string>;
};

export type SetCurrentDialogActionType = {
  type: typeof SET_CURRENT_DIALOG;
  currentDialog: any;
};

export type ChangeProfilePhotoSetIsFetchingActionType = {
  type: typeof CHANGE_PROFILE_PHOTO_SET_IS_FETCHING;
  toggle: boolean;
};

export type UsersReducerActionTypes =
  | AddUsersActionType
  | UsersSetIsFetchingActionType
  | ButtonSetIsFetchingActionType
  | SetUsersPagePaginationActionType;

export type ProfileReducerActionTypes =
  | SetProfileActionType
  | ProfileSetIsFetchingActionType
  | ClearProfileActionType
  | ClearProfileHeaderPhotosActionType
  | SetEditeModeActionType
  | ProfileSetErrorMessagesActionType
  | ChangeProfilePhotoSetIsFetchingActionType;

export type AuthorizationReducerActionTypes = AuthorizationActionType;
export type SetSelectedKeysReducerActionType = SetSelectedKeysActionType;
export type DialogsReducerActionTypes =
  | SetDialogsActionType
  | SetCurrentDialogActionType;

export type MessagesReducerActionTypes =
  | SetMessagesActionType
  | CleanMessagesActionType;
