import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Profile({ profileState, dispatch }) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        postsData={profileState.postsData}
        newPostText={profileState.newPostText}
        dispatch={dispatch}
      />
    </div>
  );
}
