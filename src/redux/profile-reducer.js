let ADD_POST = "ADD-POST";
let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postsData: [
    { id: 1, message: "Hi, how are you?", likesCount: 13 },
    { id: 2, message: "It's my first post!", likesCount: 25 },
    { id: 3, message: "React is cool!", likesCount: 12 },
    { id: 4, message: "What's up!", likesCount: 5 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 6,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};
export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default profileReducer;
