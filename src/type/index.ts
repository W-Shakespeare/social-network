export type ContactsType = {
  skype: string;
  vk: string;
  facebook: string;
  icq: string;
  email: string;
  googlePlus: string;
  twitter: string;
  instagram: string;
  whatsApp: string;
};

export type ProfileObjType = {
  aboutMe: string;
  contacts: ContactsType;
  photos: { small: string; large: string };
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
};

export type DialogsObjType = {
  id: number;
  userName: string;
  hasNewMessages: boolean;
  lastDialogActivityDate: string;
  lastUserActivityDate: string;
  newMessagesCount: number;
  photos: { small: string; large: string };
};

export type MessagesObjType = {
  id: string;
  body: string;
  translatedBody: null;
  addedAt: string;
  senderId: number;
  senderName: string;
  recipientId: number;
  viewed: boolean;
};

export type UsersObjType = {
  name: string;
  id: number;
  uniqueUrlName: any;
  status: null | string;
  followed: boolean;
  photos: { small: string; large: string };
};
