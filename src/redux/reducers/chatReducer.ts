import { Dispatch } from "redux";
import { chatApi, IChatMessage } from "../../api/chatApi";

interface InitialStateType {
  messages: IChatMessage[];
}

const initialState: InitialStateType = {
  messages: [] as IChatMessage[],
};

function chatReducer(state = initialState, action: any): InitialStateType {
  switch (action.type) {
    case "MESSAGES_RECEVIED":
      // debugger;
      return {
        ...state,
        messages: [...state.messages, ...action.messages],
      };
    default:
      return state;
  }
}
export default chatReducer;

export const messagesReceived = (messages: Array<IChatMessage>) => ({
  type: "MESSAGES_RECEVIED",
  messages,
});

let newMessageHandler: ((messages: any) => void) | null = null;

const newMessageHandlerCreator = (dispatch: any) => {
  if (newMessageHandler === null) {
    newMessageHandler = (messages) => {
      dispatch(messagesReceived(messages));
    };
  }
  return newMessageHandler;
};
export const startChat = () => (dispatch: Dispatch) => {
  chatApi.start();
  chatApi.subscribe(newMessageHandlerCreator(dispatch));
};

export const sendMessage = (message: string) => (dispatch: Dispatch) => {
  chatApi.send(message);
};
