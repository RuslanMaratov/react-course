import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Profile({ store }) {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={store} />
    </div>
  );
}
