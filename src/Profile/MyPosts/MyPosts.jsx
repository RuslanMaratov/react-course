import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

export default function MyPosts() {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?"/>
        <Post message="It's my first post!"/>
      </div>
    </div>
  );
}
