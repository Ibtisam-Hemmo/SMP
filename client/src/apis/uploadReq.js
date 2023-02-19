import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:5000" });

export const UploadImage = (data) => API.post('/api/v1/upload/', data);
export const SharePost = (data) => API.post('/api/v1/post/', data);
