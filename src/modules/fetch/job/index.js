import {instance} from "../../axios/index.js";

async function createJob(formData) {
    try {
      const response = await instance.post('jobs', formData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Something went wrong');
    }
  }

export {createJob};