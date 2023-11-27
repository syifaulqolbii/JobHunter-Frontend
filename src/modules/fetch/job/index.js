import {instance} from "../../axios/index.js";

async function getAllJobs() {
    try {
        const response = await instance.get('/jobs');
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Something went wrong');
    }
};

async function getJobById(id) {
    try {
        const response = await instance.get(`/jobs/id/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Something went wrong');
    }
};

async function updateJob(id, formData) {
    try {
        const response = await instance.put(`/jobs/${id}`, formData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Something went wrong');
    }
};

export {getAllJobs, getJobById, updateJob};