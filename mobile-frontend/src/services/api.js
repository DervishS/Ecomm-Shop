import axios from 'axios';

const API = axios.create({
  baseURL: 'https://mallory-dimetric-jerrold.ngrok-free.dev/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
