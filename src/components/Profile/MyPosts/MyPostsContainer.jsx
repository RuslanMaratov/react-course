import React from "react";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";

export default function MyPostsContainer({ store }) {
  let state = store.getState();

  const clickedAddPost = () => {
    store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPost={onPostChange}
      clickedAddPost={clickedAddPost}
      posts={state.profilePage.postsData}
      newPostText={state.profilePage.newPostText}
    />
  );
}
