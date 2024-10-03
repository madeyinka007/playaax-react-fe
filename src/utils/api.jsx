import axios from "axios";
import Cookies from "js-cookie";

// Define base URL
//const baseURL = 'http://localhost:3000/api/'
const baseURL = "https://bi08fsi8i7.execute-api.us-east-1.amazonaws.com/api/";
// Create an Axios instance with default configurations
const axiosInstance = axios.create({
  baseURL,
});

// const Axios = axios.create({baseURL})

// Add request interceptor to add token to headers
axiosInstance.interceptors.request.use(
  async (config) => {
    const playaax_token = Cookies.get("playaax_admin_token");
    const playaax_userToken = Cookies.get("playaax_user_token");
    // console.log("token given", playaax_userToken);
    if (playaax_token || playaax_userToken) {
      config.headers.Authorization = `Bearer ${
        playaax_token || playaax_userToken
      }`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Your error handling logic
    return Promise.reject(error);
  }
);

// Utility function for GET requests
export const getData = async (url, params) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    // Your error handling logic
    console.log(error.message);
    throw error;
  }
};

// Utility function for POST requests
export const postData = async (url, data) => {
  try {
    const response = await fetch(baseURL + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};
// export const postData = async (url, data) => {
//   try {
//     const response = await axiosInstance.post(url, data);
//     return response.data;
//   } catch (error) {
//     console.log(error.message);
//     throw error;
//   }
// };

// Utility function for PATCH requests
export const patchData = async (url, data) => {
  try {
    const response = await axiosInstance.patch(url, data);
    return response.data;
  } catch (error) {
    // Your error handling logic
    console.log(error.message);
    throw error;
  }
};

// Utility function for PUT requests
export const putData = async (url, data) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    // Your error handling logic
    console.log(error.message);
    throw error;
  }
};

// Utility function for DELETE requests
export const removeData = async (url) => {
  try {
    const response = await axiosInstance.delete(url);
    return response.data;
  } catch (error) {
    // Your error handling logic
    console.log(error.message);
    throw error;
  }
};
