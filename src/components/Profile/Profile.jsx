import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Profile({ postsData, profileState }) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={profileState.postsData} />
    </div>
  );
}
