import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getFeed = (id) => API.get(`/api/v1/post/${id}/feed`);
export const likePost = (postId, userId) => API.put(`/api/v1/post/${postId}/like`, { userId: userId });
