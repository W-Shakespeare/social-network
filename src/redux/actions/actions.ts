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
import {
  ProfileObjType,
  DialogsObjType,
  MessagesObjType,
  UsersObjType,
} from "../../type";
import {
  AddUsersActionType,
  AuthorizationActionType,
  UsersSetIsFetchingActionType,
  ProfileSetIsFetchingActionType,
  SetProfileActionType,
  ClearProfileActionType,
  ClearProfileHeaderPhotosActionType,
  SetDialogsActionType,
  SetMessagesActionType,
  CleanMessagesActionType,
  ButtonSetIsFetchingActionType,
  SetEditeModeActionType,
  ProfileSetErrorMessagesActionType,
  SetUsersPagePaginationActionType,
  SetSelectedKeysActionType,
  SetCurrentDialogActionType,
  ChangeProfilePhotoSetIsFetchingActionType,
} from "./actionsType";

export const addUsers = (users: {
  error: null | any;
  items: Array<UsersObjType>;
  totalCount: number;
}): AddUsersActionType => ({
  type: ADD_USERS,
  users,
});

export const authorization = (
  email: string | null,
  id: number | null,
  login: string | null,
  isAuthorization: boolean,
  messages: any
): AuthorizationActionType => ({
  type: AUTHORIZATION,
  payload: { email, id, login, isAuthorization, messages },
});

export const usersSetIsFetching = (
  boolean: boolean
): UsersSetIsFetchingActionType => ({
  type: USERS_SET_IS_FETCHING,
  boolean,
});

export const profileSetIsFetching = (
  boolean: boolean
): ProfileSetIsFetchingActionType => ({
  type: PROFILE_SET_IS_FETCHING,
  boolean,
});

export const setProfile = (
  profileObj: ProfileObjType,
  isOwnerID: boolean,
  headerPhotoInit: boolean
): SetProfileActionType => ({
  type: SET_PROFILE,
  profileObj,
  isOwnerID,
  headerPhotoInit,
});

export const clearProfile = (): ClearProfileActionType => ({
  type: CLEAR_PROFILE,
});

export const clearProfileHeaderPhotos = (): ClearProfileHeaderPhotosActionType => ({
  //this action need if you click button logout for clear photo avatar
  type: CLEAR_PROFILE_HEADER_PHOTOS,
});

export const setDialogs = (
  dialogsArr: Array<DialogsObjType>
): SetDialogsActionType => ({
  type: SET_DIALOGS,
  dialogsArr,
});

export const setMessages = (
  messagesArr: Array<MessagesObjType>
): SetMessagesActionType => ({
  type: SET_MESSAGES,
  messagesArr,
});

export const cleanMessages = (): CleanMessagesActionType => ({
  type: CLEAN_MESSAGES,
});

export const buttonSetIsFetching = (
  toggle: boolean,
  id: number | null,
  followOrUnfollow: string | null
): ButtonSetIsFetchingActionType => ({
  type: BUTTON_SET_IS_FETCHING,
  btnObj: { toggle, id, followOrUnfollow },
});

export const setEditeMode = (boolean: boolean): SetEditeModeActionType => ({
  type: SET_EDITE_MODE_PROFILE,
  boolean,
});

export const profileSetErrorMessages = (
  messages: any
): ProfileSetErrorMessagesActionType => ({
  type: PROFILE_SET_ERROR_MESSAGES,
  messages,
});

export const setUsersPagePagination = (
  currentPage: number,
  pageSize: number
): SetUsersPagePaginationActionType => ({
  type: SET_USERS_PAGE_PAGINATION,
  currentPage,
  pageSize,
});

export const setSelectedKeys = (
  selectedKeys: Array<string>
): SetSelectedKeysActionType => ({
  type: SET_SELECTED_KEYS,
  selectedKeys,
});

export const setCurrentDialog = (
  currentDialog: any
): SetCurrentDialogActionType => ({
  type: SET_CURRENT_DIALOG,
  currentDialog,
});

export const changeProfilePhotoSetIsFetching = (
  toggle: boolean
): ChangeProfilePhotoSetIsFetchingActionType => ({
  type: CHANGE_PROFILE_PHOTO_SET_IS_FETCHING,
  toggle,
});
