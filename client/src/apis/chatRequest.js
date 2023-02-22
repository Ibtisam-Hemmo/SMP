import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const createChat = (data) => API.post('api/v1/chat/', data);
export const userChats = (id) => API.get(`api/v1/chat/${id}`);
export const getChat = (firstId, secondId) => API.get(`api/v1/chat/find/${firstId}/${secondId}`);
