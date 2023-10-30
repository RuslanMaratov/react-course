import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Profile() {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
}
