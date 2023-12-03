import axios from "axios";

// Set up Axios instance
// develop
// const baseURL = "http://localhost:3000/api/v1";

// production
const baseURL = "https://caring-climbing-shad.ngrok-free.app/api/v1";
const instance = axios.create({ baseURL });

// Add interceptor to automatically add authorization header
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export { instance };
