import React from "react";
import User from "./User";
import Paginator from "../common/Paginator/Paginator";

let Users = ({
  totalUsersCount,
  pageSize,
  onPageChanged,
  currentPage,
  users,
  isToggleFollowing,
  follow,
  unfollow,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <Paginator
        pages={pages}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
      />

      {users.map((u) => (
        <User
          user={u}
          isToggleFollowing={isToggleFollowing}
          follow={follow}
          unfollow={unfollow}
        />
      ))}
    </div>
  );
};

export default Users;
