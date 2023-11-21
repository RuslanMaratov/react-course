import { usersApi } from "./api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const IS_TOGGLE_FOLLOWING = "IS_TOGGLE_FOLLOWING";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isToggleFollowing: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }

    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.count,
      };
    }

    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }

    case IS_TOGGLE_FOLLOWING: {
      return {
        ...state,
        isToggleFollowing: action.isFetching
          ? [...state.isToggleFollowing, action.userId]
          : state.isToggleFollowing.filter((id) => id !== action.userId),
      };
    }

    default:
      return state;
  }
};

export const followSuccess = (userId) => {
  return { type: FOLLOW, userId };
};
export const unfollowSuccess = (userId) => {
  return { type: UNFOLLOW, userId };
};
export const setUsers = (users) => {
  return { type: SET_USERS, users };
};
export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};

export const setTotalUsersCount = (totalUsersCount) => {
  return { type: SET_TOTAL_USERS_COUNT, count: totalUsersCount };
};

export const toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching };
};

export const toggleFollowing = (isFetching, userId) => {
  return { type: IS_TOGGLE_FOLLOWING, isFetching, userId };
};

export const requestUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(currentPage));

  usersApi.getUsers(currentPage, pageSize).then((data) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount / 100));
  });
};

export const follow = (userId) => (dispatch) => {
  dispatch(toggleFollowing(true, userId));
  usersApi.followUser(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(followSuccess(userId));
    }
    dispatch(toggleFollowing(false, userId));
  });
};

export const unfollow = (userId) => (dispatch) => {
  dispatch(toggleFollowing(true, userId));
  usersApi.unfollowUser(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(unfollowSuccess(userId));
    }
    dispatch(toggleFollowing(false, userId));
  });
};

export default usersReducer;
