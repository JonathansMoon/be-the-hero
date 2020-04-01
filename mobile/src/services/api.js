import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.100.4.69:3333'
});

export default api;