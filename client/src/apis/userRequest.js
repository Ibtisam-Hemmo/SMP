import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const API = axios.create({ baseURL: API_URL });

export const getUser = (id) => API.get(`/api/v1/user/${id}`);
export const UpdateUser = (id, formData) => API.put(`/api/v1/user/${id}`, formData);
export const FollowUser = (id,data)=> API.put(`/api/v1/user/${id}/follow`, data);
export const getAllUsers = () => API.get(`/api/v1/user/`);
