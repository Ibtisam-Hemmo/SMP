import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const API = axios.create({ baseURL: API_URL });

export const getFeed = (id) => API.get(`/api/v1/post/${id}/feed`);
export const likePost = (postId, userId) => API.put(`/api/v1/post/${postId}/like`, { userId: userId });
export const deletePost = (postId, userId) => API.delete(`/api/v1/post/${postId}`, { data: { userId: userId } });
