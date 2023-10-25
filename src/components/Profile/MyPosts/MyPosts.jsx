import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import { useRef } from "react";

export default function MyPosts({
  updateNewPost,
  clickedAddPost,
  posts,
  newPostText,
}) {
  const newPostElement = useRef();

  let postsElements = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  const onAddPost = () => {
    clickedAddPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    updateNewPost(text);
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
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
}
