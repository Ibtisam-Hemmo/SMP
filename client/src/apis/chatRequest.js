import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL;

const API = axios.create({ baseURL: API_URL });

export const createChat = (data) => API.post('/api/v1/chat/', data);
export const userChats = (id) => API.get(`/api/v1/chat/${id}`);
export const getChat = (firstId, secondId) => API.get(`/api/v1/chat/find/${firstId}/${secondId}`);
