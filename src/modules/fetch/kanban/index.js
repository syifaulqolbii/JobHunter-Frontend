import {instance} from "../../axios/index.js";

async function getAllKanbans() {
    try {
        const response = await instance.get('/kanbans');
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || "Something went wrong");
    }
}

async function addKanban(id) {
    try {
        const response = await instance.post(`/kanbans/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || "Something went wrong");
    }
}

async function editStatusKanban(id, status) {
    try {
        const response = await instance.patch(`/kanbans/edit/${id}`, {
            status
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || "Something went wrong");
    }
}

async function getCountJob() {
    try {
        const response = await instance.get('/kanbans/countJob');
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || "Something went wrong");
    }
}

async function getAppliedJob() {
    try {
        const response = await instance.get('/kanbans/countApplicant');
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || "Something went wrong");
    }
}

async function getPendingJob() {
    try {
        const response = await instance.get('/kanbans/countPending');
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || "Something went wrong");
    }
}



export {getAllKanbans, addKanban, editStatusKanban, getCountJob, getAppliedJob, getPendingJob};