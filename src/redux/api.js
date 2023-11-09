import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "83f323dd-f9b6-4674-be31-dc725f16a909",
  },
});

export const usersApi = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  followUser(id) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  unfollowUser(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
};

export const authApi = {
  getAuthApi() {
    return instance.get(`auth/me`);
  },
};
