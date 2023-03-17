import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const API = axios.create({ baseURL: API_URL });

export const getMsg = (id) => API.get(`/api/v1/msg/${id}`);
export const addMsg = (data) => API.post('/api/v1/msg/', data);
