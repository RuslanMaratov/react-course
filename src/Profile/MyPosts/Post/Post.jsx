import React from "react";
import s from "./Post.module.css";

export default function Post({ message }) {
  return (
    <div className={s.item}>
      <img
        alt="avatar"
        src="https://ih0.redbubble.net/image.3085033708.0360/raf,360x360,075,t,fafafa:ca443f4786.jpg"
      />
      {message}
    </div>
  );
}
