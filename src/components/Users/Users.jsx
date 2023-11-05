import s from "./Users.module.css";
import userPhoto from "../../assets/userPhoto.png";
import React from "react";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p}
              onClick={() => props.onPageChanged(p)}
              className={props.currentPage === p ? s.selectedPage : undefined}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div className={s.userWrapper} key={u.id}>
          <div className={s.userTitle}>
            <NavLink to={`/profile/${u.id}`}>
              <img
                className={s.userPhoto}
                alt="userPhoto"
                src={u.photos.small != null ? u.photos.small : userPhoto}
              />
            </NavLink>
            {u.followed ? (
              <button
                onClick={() => props.follow(u.id)}
                className={s.followButton}
              >
                Follow
              </button>
            ) : (
              <button
                onClick={() => props.unfollow(u.id)}
                className={s.followButton}
              >
                Unfollow
              </button>
            )}
          </div>
          <div className={s.userInfo}>
            <div className={s.userStatusName}>
              <div className={s.userName}>{u.name}</div>
              <div className={s.userStatus}>{u.status}</div>
            </div>
            <div className={s.userLocation}>
              u.location.city,
              <br />
              u.location.country
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
