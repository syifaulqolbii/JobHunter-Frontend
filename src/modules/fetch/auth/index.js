// modules/fetch/auth/index.js
import { instance } from '../../axios/index.js';

const authAPI = {
  // Function to perform user login
  login: async (credentials) => {
    try {
      const response = await instance.post('/auth/login', credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Function to perform user registration
  register: async (userData) => {
    try {
      const response = await instance.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Function to fetch user data after authentication
  getUserData: async (token) => {
    try {
      const response = await instance.get('/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });      
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default authAPI;
