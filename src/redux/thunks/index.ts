import { Dispatch } from "redux";
import { API } from "../../api/api";
import {
  addUsers,
  usersSetIsFetching,
  profileSetIsFetching,
  setProfile,
  authorization,
  setDialogs,
  setMessages,
  buttonSetIsFetching,
  setEditeMode,
  profileSetErrorMessages,
  clearProfileHeaderPhotos,
} from "../actions/actions";
import {
  AuthorizationReducerActionTypes,
  DialogsReducerActionTypes,
  MessagesReducerActionTypes,
  ProfileReducerActionTypes,
  UsersReducerActionTypes,
} from "../actions/actionsType";
import { AUTHORIZATION } from "../types/types";

import { ProfileObjType } from "../../type";
import { IFormProps } from "../../components/Profile/ProfileDataForm";

export const getUsersData = (
  currentPage: number,
  pageSize: number,
  pagefetchObj = { pageFetch: true },
  btnFetch: {
    btnFetchToggle: boolean | null;
    id: number | null;
    method: string | null;
  } = { btnFetchToggle: null, id: null, method: null }
) => async (dispatch: Dispatch<UsersReducerActionTypes>) => {
  let { btnFetchToggle, id, method } = btnFetch;
  let { pageFetch } = pagefetchObj;
  if (pageFetch) {
    dispatch(usersSetIsFetching(true));
  }

  let res = await API.getUser(currentPage, pageSize);
  console.log("GET_USERS", res);
  // throw new Error("Уупс!");
  dispatch(addUsers(res));

  if (btnFetchToggle) {
    dispatch(buttonSetIsFetching(false, id, method));
  }
  if (pageFetch) {
    dispatch(usersSetIsFetching(false));
  }
};

export const getProfileData = (
  id: number | null,
  isOwnerID: boolean,
  headerPhotoInit: boolean
) => (dispatch: Dispatch<ProfileReducerActionTypes>) => {
  dispatch(profileSetIsFetching(true));

  API.getProfile(id).then((res) => {
    //setProfile has two arguments. Second argument is isOwnerID
    //if isOwnerID false don`t change headerPhoto in header
    dispatch(setProfile(res, isOwnerID, headerPhotoInit));
    dispatch(setEditeMode(false));
    dispatch(profileSetIsFetching(false));
  });
};

export const getAuthData = () => (
  dispatch: Dispatch<AuthorizationReducerActionTypes>
) => {
  API.getAuthMe().then((res) => {
    if (res.resultCode == 0) {
      let { login, email, id } = res.data;
      dispatch(authorization(email, id, login, true, ""));
      window.localStorage.setItem("isAuth", "true");
    } else {
      let { messages } = res;
      dispatch(authorization(null, null, null, false, messages));
    }
  });
};

export const login = (email: string, password: string, rememberMe: boolean) => (
  dispatch: any
) => {
  API.login(email, password, rememberMe).then((res) => {
    console.log("AUTHORIZATION", res);
    if (res.data.resultCode == 0) {
      dispatch(getAuthData());
    } else {
      let { messages } = res.data;
      dispatch(authorization(null, null, null, false, messages));
    }
  });
};

export const logout = () => (
  dispatch: Dispatch<any | ProfileReducerActionTypes>
) => {
  API.logOut().then((res) => {
    if (res.data.resultCode == 0) {
      dispatch(getAuthData());
      dispatch(clearProfileHeaderPhotos());
      window.localStorage.removeItem("isAuth");
    }
  });
};

export const sendMessageData = (messageText: string, id: string) => (
  dispatch: any
) => {
  API.sendMessage(messageText, id).then((res) => {
    console.log("response sendMessage", res);
    if (res.data.resultCode == 0) {
      dispatch(getMessagesData(id));
    }
  });
};

export const getDialogsData = () => (
  dispatch: Dispatch<DialogsReducerActionTypes>
) => {
  API.getDialogs().then((res) => {
    console.log("DIALOGSThunks", res);
    dispatch(setDialogs(res.data));
  });
};

export const getMessagesData = (id: any) => (
  dispatch: Dispatch<MessagesReducerActionTypes>
) => {
  API.getMessages(id).then((res) => {
    dispatch(setMessages(res.data.items));
  });
};
export const getFollowData = (id: number) => {
  API.getFollow(id);
};

export const setFollowData = (
  id: number,
  currentPage: number,
  pageSize: number
) => async (dispatch: Dispatch<UsersReducerActionTypes> | any) => {
  dispatch(buttonSetIsFetching(true, id, "follow"));
  let res = await API.postFollow(id);
  if (res.data.resultCode == 0) {
    dispatch(
      getUsersData(
        currentPage,
        pageSize,
        { pageFetch: false },
        { btnFetchToggle: true, id, method: "follow" }
      )
    );
  }
};
export const unFollowData = (
  id: number,
  currentPage: number,
  pageSize: number
) => (dispatch: Dispatch<UsersReducerActionTypes> | any) => {
  dispatch(buttonSetIsFetching(true, id, "unFollow"));
  API.unFollow(id).then((res) => {
    if (res.data.resultCode == 0) {
      dispatch(
        getUsersData(
          currentPage,
          pageSize,
          { pageFetch: false },
          { btnFetchToggle: true, id, method: "unFollow" }
        )
      );
    }
  });
};

export const sendProfileDataForm = (
  profile: IFormProps,
  id: number | null
) => async (dispatch: Dispatch<any | ProfileReducerActionTypes>) => {
  console.log("PROFILE_THUNKS", profile);
  let res = await API.updateProfile(profile);
  if (res.resultCode == 0) {
    dispatch(getProfileData(id, false, false));
  } else {
    let { messages } = res;
    dispatch(profileSetErrorMessages(messages));
  }
};

export const sendProfilePhotoData = (
  profilePhotoFile: File,
  id: number | null
) => async (dispatch: Dispatch<any | ProfileReducerActionTypes>) => {
  let res = await API.sendPhoto(profilePhotoFile);
  console.log("PHOTO_RES", res);
  if (res.data.resultCode == 0) {
    dispatch(getProfileData(id, true, false));
  } else {
    let { messages } = res.data;
    dispatch(profileSetErrorMessages(res));
  }
};
