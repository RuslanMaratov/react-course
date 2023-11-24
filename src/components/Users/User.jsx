import s from "./User.module.css";
import userPhoto from "../../assets/userPhoto.png";
import React from "react";
import { NavLink } from "react-router-dom";

let User = ({ user, isToggleFollowing, follow, unfollow }) => {
  return (
    <div className={s.userWrapper} key={user.id}>
      <div className={s.userTitle}>
        <NavLink to={`/profile/${user.id}`}>
          <img
            className={s.userPhoto}
            alt="userPhoto"
            src={user.photos.small != null ? user.photos.small : userPhoto}
          />
        </NavLink>
        {user.followed ? (
          <button
            disabled={isToggleFollowing.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
              // props.toggleFollowing(true, user.id);
              // usersApi.unfollowUser(user.id).then((data) => {
              //   if (data.resultCode === 0) {
              //     props.unfollow(user.id);
              //   }
              //   props.toggleFollowing(false, user.id);
              // });
            }}
            className={s.followButton}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={isToggleFollowing.some((id) => id === user.id)}
            onClick={() => {
              follow(user.id);
              // props.toggleFollowing(true, user.id);
              // usersApi.followUser(user.id).then((data) => {
              //   if (data.resultCode === 0) {
              //     props.follow(user.id);
              //   }
              //   props.toggleFollowing(false, user.id);
              // });
            }}
            className={s.followButton}
          >
            Follow
          </button>
        )}
      </div>
      <div className={s.userInfo}>
        <div className={s.userStatusName}>
          <div className={s.userName}>{user.name}</div>
          <div className={s.userStatus}>{user.status}</div>
        </div>
        <div className={s.userLocation}>
          user.location.city,
          <br />
          user.location.country
        </div>
      </div>
    </div>
  );
};

export default User;
