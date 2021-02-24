import axios from "axios";
import { IFormProps } from "../components/Profile/ProfileDataForm";
import { DialogsObjType, ProfileObjType } from "../type";
import {
  IGetAuthMeResponse,
  IGetMessagesResponse,
  IGetUsersResponse,
} from "./apiType";

const url = "https://social-network.samuraijs.com/api/1.0/";

const instance = axios.create({
  baseURL: url,
  withCredentials: true,
  headers: {
    "API-KEY": "7a18df38-ef6e-4c04-b95e-f5da1c47a601",
  },
});

export const API = {
  async getUser(page: number, pageSize: number) {
    const res = await instance.get<IGetUsersResponse>(
      `users?page=${page}&count=${pageSize}`
    );
    return res.data;
  },
  async getProfile(id: number | null) {
    const res = await instance.get<ProfileObjType>(`profile/${id}`);
    return res.data;
  },

  async updateProfile(profile: IFormProps) {
    const res = await instance.put("profile", profile);
    return res.data;
  },

  async getAuthMe() {
    const res = await instance.get<IGetAuthMeResponse>("auth/me");
    console.log("getAuthMe".toUpperCase(), res);
    return res.data;
  },

  login(email: string, password: string, rememberMe: boolean) {
    return instance.post("auth/login", { email, password, rememberMe });
  },

  logOut() {
    return instance.delete("auth/login");
  },

  sendMessage(body: any, id: string) {
    //rename from sendMessage to body because this is what the Api requires
    return instance.post(`dialogs/${id}/messages`, { body });
  },

  getDialogs() {
    return instance.get<Array<DialogsObjType>>(`dialogs`);
  },

  getMessages(id: number) {
    return instance.get<IGetMessagesResponse>(`dialogs/${id}/messages`);
  },

  getFollow(id: number) {
    return instance.get(`follow/${id}`);
  },

  postFollow(id: number) {
    return instance.post(`follow/${id}`);
  },

  unFollow(id: number) {
    return instance.delete(`follow/${id}`);
  },

  sendPhoto(profilePhotoFile: File) {
    let formData = new FormData();
    formData.append("image", profilePhotoFile);
    return instance.put("profile/photo", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  getCaptcha() {
    return instance.get("security/get-captcha-url");
  },
};
