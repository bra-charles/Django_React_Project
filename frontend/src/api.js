import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
// const signUp = async (username, email, password) => {
//   try {
//     const response = await api.post("/signup/", {
//       username,
//       email,   
//       password,
//     });
//     console.log("User signed up successfully:", response.data);
//   } catch (error) {
//     console.error("Error signing up:", error.response?.data);
//   }
// };

// const signIn = async (username, password) => {
//   try {
//     const response = await api.post("/signin/", {
//       username,
//       password,
//     });
//     const { access, refresh } = response.data;
//     console.log("Access Token:", access);
//     console.log("Refresh Token:", refresh);

//     // Store tokens in local storage or any other state management solution
//     localStorage.setItem("access_token", access);
//     localStorage.setItem("refresh_token", refresh);
//   } catch (error) {
//     console.error("Error signing in:", error.response?.data);
//   }
// };

// const refreshToken = async () => {
//   const refreshToken = localStorage.getItem("refresh_token");
//   try {
//     const response = await api.post("/token/refresh/", {
//       refresh: refreshToken,
//     });
//     const { access } = response.data;
//     console.log("New Access Token:", access);

//     // Store the new access token
//     localStorage.setItem("access_token", access);
//   } catch (error) {
//     console.error("Error refreshing token:", error.response?.data);
//   }
// };

// Example usage
// refreshToken();

export default {api}