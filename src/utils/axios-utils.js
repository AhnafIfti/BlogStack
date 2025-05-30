import axios from "axios";
axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export const getPost = async () => {
  const response = await axiosInstance.get("/post");
  return response.data;
};

export const searchPost = async (searchValue) => {
  const response = await axiosInstance.get("/post/search", {
    params: { searchField: searchValue },
  });
  return response.data;
};

export const getUsers = async () => {
  const response = await axiosInstance.get("/user/list");
  return response.data;
};

export const getPostById = async (id) => {
  const response = await axiosInstance.get(`/post/${id}`);
  return response.data;
};

export const getProfileDetail = async (id) => {
  const response = await axiosInstance.get(`/post/profile/${id}`);
  return response.data;
};

export const createPost = async (postData, userId) => {
  const response = await axiosInstance.post(`/post/submit/${userId}`, postData);
  return response.data;
};

export const updatePost = async (userId, postId, postData) => {
  const response = await axiosInstance.put(
    `/post/edit/${userId}/${postId}`,
    postData
  );
  return response.data;
};

export const loginUser = async (username, password) => {
  const response = await axiosInstance.post("/login", {
    username,
    password,
  });
  return response.data;
};

export const registerUser = async (postData) => {
  const response = await axiosInstance.post("/user/register", postData);
  return response.data;
};

export const loginWithGoogle = () => {
  window.location.href = "http://localhost:3000/auth/google";
};

export const logoutUser = async () => {
  const response = await axiosInstance.get("/logout");
  return response.data;
};

export const checkAuth = async () => {
  const response = await axiosInstance.get("/check-auth");
  return response.data;
};

export const addSubscription = async (userId, postData) => {
  const response = await axiosInstance.put(
    `/user/subscribe/${userId}`,
    postData
  );
  return response.data;
};

export const removeSubscription = async (userId, postData) => {
  const response = await axiosInstance.put(
    `/user/unsubscribe/${userId}`,
    postData
  );
  return response.data;
};

export const loggedInUsers = async () => {
  const response = await axiosInstance.get(`/active-users`);
  return response.data;
};
