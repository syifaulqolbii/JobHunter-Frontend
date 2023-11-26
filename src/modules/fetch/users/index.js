import { instance } from '@/modules/axios';

const login = async (email, password) => {
  try {
    const response = await instance.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const register = async (userData) => {
  try {
    const response = await instance.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { login, register };
