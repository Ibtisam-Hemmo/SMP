import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:5000" });

export const logIn = (FormData) => API.post('/api/v1/auth/login', FormData)
export const logOut = () => API.get('/api/v1/auth/logout')
export const signup = (FormData) => API.post('/api/v1/auth/register', FormData)
