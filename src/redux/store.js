import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi, how are you?", likesCount: 13 },
        { id: 2, message: "It's my first post!", likesCount: 25 },
        { id: 3, message: "React is cool!", likesCount: 12 },
        { id: 4, message: "What's up!", likesCount: 5 },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },
  },

  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    dialogsReducer(this._state.dialogsPage, action);
    profileReducer(this._state.profilePage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
