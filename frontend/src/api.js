import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  
});

// Request interceptor to add Authorization header
// api.interceptors.request.use(
//   (config) => {
//     // Get the access token and token type from local storage
//     const accessToken = localStorage.getItem("access_token");
//     const tokenType = localStorage.getItem("token_type");
//     console.log(accessToken);
//     console.log(accessToken);

//     // If there's an access token and token type, add Authorization header
//     if (accessToken && tokenType) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }

//     // Skip adding Authorization header for sign-in and login requests
//     if (config.url === "/register" || config.url === "/token") {
//       delete config.headers.Authorization;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default api;
