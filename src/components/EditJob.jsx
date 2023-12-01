import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {getJobById, updateJob} from "../modules/fetch/job";

const EditJob = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        job_name: '', 
        type: '', 
        category: '', 
        requirement: '', 
        description: '', 
        required_skill: '', 
        salary: '',
    });

    const handleChange = (e) => {
        console.log("Handling change:", e.target.name, e.target.value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        try {
            await updateJob(id, formData);
    
            console.log("Job updated");
            toast.success("Job updated", {
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar: true,
                autoClose: 3000,
            });

            setTimeout(() => {
                navigate("/joblist");
            }, 2000);
        } catch (error) {
            console.error("Error updating Job:", error.message);
            toast.error(`Error updating Job: ${error.message}`, {
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar: true,
                autoClose: 5000,
            });
        }
    };

    useEffect(() => {
        const fetchUpdateJob = async () => {
            try {
            const response = await getJobById(id)
            const jobData = response.data;
            setFormData({
                job_name: jobData.job_name,
                type: jobData.type,
                category: jobData.category,
                requirement: jobData.requirement,
                description: jobData.description,
                required_skill: jobData.required_skill,
                salary: jobData.salary,
            });
            } catch (error) {
            console.error("Error fetching job data:", error.message);
            }
        };
    
        fetchUpdateJob();
    }, []);
            

    return (
        <div class="">
            <div class="bg-blue-100 py-4 my-10">
                <h1 class="text-xl text-center font-bold">Edit Job</h1>
            </div>
            <div class="antialiased flex font-sans text-gray-900">
                <form onSubmit={handleFormSubmit} class="bg-gray-100 border border-gray-300 px-4 py-8 rounded mx-auto max-w-6xl w-full my-5 inputs space-y-6">
        
                    <div>
                        <label class="px-2 font-bold" for="jobname">Job Name</label>
                        <input 
                        placeholder="Type the job name" 
                        class="input input-bordered input-md border border-gray-300 px-4 py-2 my-2 rounded w-full focus:outline-none focus:border-blue-400" 
                        type="text" 
                        name="job_name" 
                        id="jobname"
                        value={formData.job_name}
                        onChange={handleChange} 
                        />
                    </div>
            
                    <div class="flex space-x-4">
                        <div class="w-1/2">
                        <label class="px-2 font-bold" for="jobcategory">Job Category</label>
                        <input 
                            placeholder="Type the job category"
                            class="border border-gray-300 px-4 py-2 my-2 rounded w-full focus:outline-none focus:border-blue-400" 
                            type="text" 
                            name="category" 
                            id="jobcategory"
                            value={formData.category}
                            onChange={handleChange}
                        />
                        </div>
                        <div class="w-1/2">
                        <label class="px-2 font-bold" for="jobtype">Job Type</label>
                        <select 
                            class="border border-gray-300 px-4 py-2 my-2 rounded w-full focus:outline-none focus:border-blue-400"
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                        >
                                <option value="fulltime">Full Time</option>
                                <option value="parttime">Part Time</option>
                                <option value="freelance">Freelance</option>
                        </select>
                        </div>
                    </div>
                    
                    <div class="flex space-x-4">
                        <div class="w-1/2">
                        <label class="px-2 font-bold" for="requiredskill">Required Skill</label>
                        <input 
                            placeholder="Type the job required salary"
                            class="border border-gray-300 px-4 py-2 my-2 rounded w-full focus:outline-none focus:border-blue-400" 
                            type="text" 
                            name="required_skill" 
                            id="requiredskill"
                            value={formData.required_skill}
                            onChange={handleChange}
                        />
                        </div>
                        <div class="w-1/2">
                        <label class="px-2 font-bold" for="salary">Salary</label>
                        <input 
                            placeholder="Type the job salary"
                            class="border border-gray-300 px-4 py-2 my-2 rounded w-full focus:outline-none focus:border-blue-400" 
                            type="text" 
                            name="salary" 
                            id="salary"
                            value={formData.salary}
                            onChange={handleChange}
                        />
                        </div>
                    </div>
                    
                    <div>
                        <label class="px-2 font-bold" for="jobdescription">Job Description</label>
                        <textarea 
                            class="textarea textarea-bordered border border-gray-300 px-4 pt-2 pb-10 my-2 rounded w-full focus:outline-none focus:border-blue-400" placeholder="Type the job description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    
                    <div>
                        <label class="px-2 font-bold" for="jobrequirement">Job Requirement</label>
                        <textarea 
                            class="textarea textarea-bordered border border-gray-300 px-4 pt-2 pb-10 my-2 rounded w-full focus:outline-none focus:border-blue-400" placeholder="Type the job requirement"
                            name="requirement"
                            value={formData.requirement}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div class="flex flex-row-reverse space-x-3 space-x-reverse">
                        <button 
                            type="submit" 
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >Save</button>
                        <button 
                            type="button" 
                            onClick={() => navigate("/joblist")}
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            >Cancel</button>
                    </div>        
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}

export default EditJob;