let UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
let SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogsData: [
    { name: "Aldik", id: 1 },
    { name: "Edil", id: 2 },
    { name: "Kutman", id: 3 },
    { name: "Kalmurat", id: 4 },
    { name: "Janbolot", id: 5 },
    { name: "Ruslan", id: 6 },
  ],
  messagesData: [
    { id: 1, message: "Hi, dude!" },
    { id: 1, message: "How is your education?" },
    { id: 1, message: "Yeah buddy!" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.body };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => {
  return { type: SEND_MESSAGE };
};
export const updateNewMessageBodyActionCreator = (body) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: body };
};

export default dialogsReducer;
