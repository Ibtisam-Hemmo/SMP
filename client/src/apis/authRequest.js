import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

const API = axios.create({ baseURL: API_URL});

export const logIn = (FormData) => API.post('/api/v1/auth/login', FormData)
export const logOut = () => API.post('/api/v1/auth/logout')
export const signup = (FormData) => API.post('/api/v1/auth/register', FormData)
