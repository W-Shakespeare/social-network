import { DialogsObjType, MessagesObjType, UsersObjType } from "../type";

export interface IGetUsersResponse {
  items: Array<UsersObjType>;
  error: any;
  totalCount: number;
}

export interface IGetAuthMeResponse {
  data: { id: number; login: string; email: string };
  fieldsErrors: any;
  messages: Array<any>;
  resultCode: number;
}

// export interface IGetDialogsResponse {
//   data: ;
// }

export interface IGetMessagesResponse {
  items: Array<MessagesObjType>;
  error: any;
  totalCount: number;
}
