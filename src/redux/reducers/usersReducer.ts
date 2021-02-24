import {
  ADD_USERS,
  USERS_SET_IS_FETCHING,
  BUTTON_SET_IS_FETCHING,
  SET_USERS_PAGE_PAGINATION,
} from "../types/types";
import { UsersObjType } from "../../type";
import { UsersReducerActionTypes } from "../actions/actionsType";

interface InitialStateType {
  users: Array<UsersObjType>;
  isFetching: boolean;
  isBtnFetching: { follow: Array<number>; unFollow: Array<number> };
  pagination: {
    currentPage: number;
    pageSize: number;
    totalCount: undefined | number;
  };
}

const initialState: InitialStateType = {
  users: [],
  isFetching: false,
  isBtnFetching: { follow: [], unFollow: [] },
  pagination: { currentPage: 1, pageSize: 20, totalCount: undefined },
};

function usersReducer(
  state = initialState,
  action: UsersReducerActionTypes
): InitialStateType {
  switch (action.type) {
    case ADD_USERS:
      return {
        ...state,
        users: action.users.items,
        pagination: {
          ...state.pagination,
          totalCount: action.users.totalCount,
        },
      };
    case USERS_SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.boolean,
      };
    case BUTTON_SET_IS_FETCHING:
      return addOrRemoveID(
        state,
        action.btnObj.toggle,
        action.btnObj.id,
        action.btnObj.followOrUnfollow
      );
    case SET_USERS_PAGE_PAGINATION:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: action.currentPage,
          pageSize: action.pageSize,
        },
      };

    default:
      return state;
  }
}
export default usersReducer;

const addOrRemoveID = (
  state: any,
  toggle: boolean,
  btnId: number | null,
  followOrUnfollow: string | any
) => {
  type followOrUnfollowType = typeof followOrUnfollow;
  return toggle
    ? {
        ...state,
        isBtnFetching: {
          ...state.isBtnFetching,
          [followOrUnfollow]: [
            ...state.isBtnFetching[
              followOrUnfollow as keyof followOrUnfollowType
            ],
            btnId,
          ],
        },
      }
    : {
        ...state,
        isBtnFetching: {
          ...state.isBtnFetching,
          [followOrUnfollow]: state.isBtnFetching[
            followOrUnfollow as keyof followOrUnfollowType
          ].filter((id: number) => id != btnId),
        },
      };
};
