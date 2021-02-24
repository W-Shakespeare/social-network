import {
  SET_PROFILE,
  PROFILE_SET_IS_FETCHING,
  CLEAR_PROFILE,
  SET_EDITE_MODE_PROFILE,
  PROFILE_SET_ERROR_MESSAGES,
  CLEAR_PROFILE_HEADER_PHOTOS,
} from "../types/types";
import { ProfileObjType } from "../../type";
import { ProfileReducerActionTypes } from "../actions/actionsType";

interface InitialStateType {
  profile: ProfileObjType | null;
  isFetching: boolean;
  isEditeMode: boolean;
  errorMessages: any;
  headerPhotos: null | string;
}

const initialState: InitialStateType = {
  profile: null,
  isFetching: true,
  isEditeMode: false,
  errorMessages: null,
  headerPhotos: null,
};

function profileReducer(
  state = initialState,
  action: ProfileReducerActionTypes
): InitialStateType {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.headerPhotoInit ? state.profile : action.profileObj,
        headerPhotos: action.isOwnerID
          ? action.profileObj.photos.small
          : state.headerPhotos,
      };
    case PROFILE_SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.boolean,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
      };
    case CLEAR_PROFILE_HEADER_PHOTOS:
      return {
        ...state,
        headerPhotos: null,
      };
    case SET_EDITE_MODE_PROFILE:
      return {
        ...state,
        isEditeMode: action.boolean,
      };
    case PROFILE_SET_ERROR_MESSAGES:
      return {
        ...state,
        errorMessages: action.messages,
      };

    default:
      return state;
  }
}
export default profileReducer;
