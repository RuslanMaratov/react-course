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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageActionCreator = (newMessageBody) => {
  return { type: SEND_MESSAGE, newMessageBody };
};

export default dialogsReducer;
