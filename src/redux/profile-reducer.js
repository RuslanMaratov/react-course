import { usersApi } from "./api";
import { profileApi } from "./api";
import { stopSubmit } from "redux-form";

let ADD_POST = "ADD-POST";
let SET_USER_PROFILE = "SET_USER_PROFILE";
let SET_STATUS = "SET_STATUS";
let SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
  postsData: [
    { id: 1, message: "Hi, how are you?", likesCount: 13 },
    { id: 2, message: "It's my first post!", likesCount: 25 },
    { id: 3, message: "React is cool!", likesCount: 12 },
    { id: 4, message: "What's up!", likesCount: 5 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 6,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };
    }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => {
  return { type: ADD_POST, newPostText };
};
export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};
export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};
export const savePhotoSuccess = (photos) => {
  return { type: SAVE_PHOTO_SUCCESS, photos };
};

export const getProfile = (userId) => async (dispatch) => {
  let response = await usersApi.getUserProfile(userId);
  dispatch(setUserProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileApi.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileApi.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const savePhoto = (file) => async (dispatch) => {
  let response = await profileApi.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileApi.saveProfile(profile);

  if (response.data.resultCode === 0) {
    dispatch(getProfile(userId));
  } else {
    dispatch(stopSubmit("edit-form", { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  }
};

export default profileReducer;
