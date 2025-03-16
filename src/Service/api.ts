import axios from "axios";

const API_BASE_URL = "/api";

const api = {
  get: async (url: string) => {
    try {
      return await axios.get(`${API_BASE_URL}${url}`);
    } catch (error: any) {
      if (error.code >= 400 && error.code < 500) {
        // log the error
        throw new Error(error.message);
      } else {
        // log the error
        throw new Error(
          "An unexpected error occurred. Please try again later."
        );
      }
    }
  },

  post: async (url: string, data: any) => {
    try {
      return await axios.post(`${API_BASE_URL}${url}`, data);
    } catch (error: any) {
      if (error.code >= 400 && error.code < 500) {
        // log the error
        throw new Error(error.message);
      } else {
        // log the error
        throw new Error(
          "An unexpected error occurred. Please try again later."
        );
      }
    }
  },

  put: async (url: string, data: any) => {
    try {
      return await axios.put(`${API_BASE_URL}${url}`, data);
    } catch (error: any) {
      if (error.code >= 400 && error.code < 500) {
        // log the error
        throw new Error(error.message);
      } else {
        // log the error
        throw new Error(
          "An unexpected error occurred. Please try again later."
        );
      }
    }
  },
};

export default api;
