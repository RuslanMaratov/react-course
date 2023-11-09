import { usersApi } from "./api";

let ADD_POST = "ADD-POST";
let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  postsData: [
    { id: 1, message: "Hi, how are you?", likesCount: 13 },
    { id: 2, message: "It's my first post!", likesCount: 25 },
    { id: 3, message: "React is cool!", likesCount: 12 },
    { id: 4, message: "What's up!", likesCount: 5 },
  ],
  newPostText: "",
  profile: null,
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
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
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
export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};

export const getProfile = (userId) => (dispatch) => {
  usersApi.getUserProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

export default profileReducer;
