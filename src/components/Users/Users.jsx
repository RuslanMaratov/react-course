import s from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/userPhoto.png";
import React, { Component } from "react";

export default class Users extends Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => this.props.setUsers(response.data.items));
  }

  render() {
    return this.props.users.map((u) => (
      <div className={s.userWrapper} key={u.id}>
        <div className={s.userTitle}>
          <img
            className={s.userPhoto}
            alt="userPhoto"
            src={u.photos.small != null ? u.photos.small : userPhoto}
          />
          {u.followed ? (
            <button
              onClick={() => this.props.follow(u.id)}
              className={s.followButton}
            >
              Follow
            </button>
          ) : (
            <button
              onClick={() => this.props.unfollow(u.id)}
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
    ));
  }
}
