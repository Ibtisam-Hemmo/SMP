import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const getMsg = (id) => API.get(`/api/v1/msg/${id}`);
export const addMsg = (data) => API.post('/api/v1/msg/', data);
