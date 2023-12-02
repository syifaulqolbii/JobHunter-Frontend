import {instance} from "../../axios/index.js";

async function getAllKanbans() {
    try {
        const response = await instance.get('/kanbans');
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Something went wrong');
    }
}

export {getAllKanbans};