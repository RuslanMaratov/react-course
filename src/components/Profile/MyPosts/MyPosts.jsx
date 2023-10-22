import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import { useRef } from "react";

export default function MyPosts({ postsData, dispatch, newPostText }) {
  const newPostElement = useRef();

  let posts = postsData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  const clickedAddPost = () => {
    dispatch({ type: "ADD-POST" });
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            value={newPostText}
            ref={newPostElement}
            onChange={onPostChange}
          ></textarea>
        </div>
        <div>
          <button onClick={clickedAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{posts}</div>
    </div>
  );
}
