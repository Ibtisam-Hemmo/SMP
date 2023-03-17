import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const API = axios.create({ baseURL: API_URL });

export const UploadImage = (data) => API.post('/api/v1/upload/', data);
export const SharePost = (data) => API.post('/api/v1/post/', data);
