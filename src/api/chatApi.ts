// This file dont used
export interface IChatMessage {
  message: string;
  photo: string;
  userId: number;
  userName: string;
}

type SubscriberType = (messages: IChatMessage[]) => void;

let subscribe = [] as SubscriberType[];

let ws: WebSocket | null;

const closeHandler = () => {
  console.log("CLOSE WS");
  setTimeout(createChannel, 3000);
};

const messageHandler = (e: MessageEvent) => {
  const newMessage = JSON.parse(e.data);
  // debugger;
  subscribe.forEach((s) => s(newMessage));
};

function createChannel() {
  ws?.removeEventListener("close", closeHandler);
  ws?.close();
  ws = new WebSocket(
    "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
  );
  ws.addEventListener("close", closeHandler);
  ws.addEventListener("message", messageHandler);
  //?
}

export const chatApi = {
  start() {
    createChannel();
  },

  subscribe(callback: SubscriberType) {
    subscribe.push(callback);
    return () => {
      subscribe = subscribe.filter((s) => s !== callback);
    };
  },
  unSubscribe(callback: SubscriberType) {
    subscribe = subscribe.filter((s) => s !== callback);
  },
  send(message: string) {
    ws?.send(message);
  },
};
// This file dont used
