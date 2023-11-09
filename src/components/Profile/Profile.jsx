import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { Navigate } from "react-router-dom";

export default function Profile(props) {
  if (!props.isAuth) return <Navigate to={"/login"} />;
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer profile={props.profile} />
    </div>
  );
}
