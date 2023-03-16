import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getUser = (id) => API.get(`/api/v1/user/${id}`);
export const UpdateUser = (id, formData) => API.put(`/api/v1/user/${id}`, formData);
export const FollowUser = (id,data)=> API.put(`/api/v1/user/${id}/follow`, data);
export const getAllUsers = () => API.get(`/api/v1/user/`);
