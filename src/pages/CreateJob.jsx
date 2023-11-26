import React, {useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';

import {createJob} from '../modules/fetch/job/index.js';

const JobType = {
    FULL_TIME: 'fulltime',
    PART_TIME: 'parttime',
    FREELANCE: 'freelance',
};

const CreateJob = () => {
    const isWideScreen = useMediaQuery({minWidth: 640});

    const [formData, setFormData] = useState({
        users_id: '',
        job_name: '',
        type: JobType.FULL_TIME,
        category: '',
        requirement: '',
        description: '',
        required_skill: '',
        salary: '',

    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            await createJob(formData);

            setFormData({
                users_id: '',
                job_name: '',
                type: JobType.FULL_TIME,
                category: '',
                requirement: '',
                description: '',
                required_skill: '',
                salary: '',
            });

            console.log('Job created successfully');
            toast.success('Job created successfully', {
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar: true,
                autoClose: 3000
            });

        } catch (error) {
            console.error('Error creating job:', error.message);
            toast.error('Error creating job', {
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar: true,
                autoClose: 5000
            });

        }
    };

    return (
        <>
            <Navbar/>
            <Sidebar/>

            <div className={`lg:flex-1 p-8 pl-64 ml-4 relative${isWideScreen ? '' : 'w-full pl-0 pr-4 ml-0'}`}>
                <h1 className="text-3xl font-bold font-poppins mb-4 pt-10">Create Job</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="mb-4">
                            <label htmlFor="users_id" className="block text-sm font-bold font-poppins text-gray-600">
                                users_id
                            </label>
                            <input
                                type="number"
                                id="users_id"
                                name="users_id"
                                onChange={handleInputChange}
                                value={formData.users_id}
                                className="mt-1 p-2 border rounded-md w-full"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="job_name" className="block text-sm font-bold font-poppins text-gray-600">
                                Job Name
                            </label>
                            <input
                                type="text"
                                id="job_name"
                                name="job_name"
                                onChange={handleInputChange}
                                value={formData.job_name}
                                className="mt-1 p-2 border rounded-md w-full"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="type" className="block text-sm font-bold font-poppins text-gray-600">
                                Type
                            </label>
                            <select
                                id="type"
                                name="type"
                                onChange={handleInputChange}
                                value={formData.type}
                                className="mt-1 p-2 border rounded-md w-full"
                                required
                            >
                                <option value={JobType.FULL_TIME}>Full Time</option>
                                <option value={JobType.PART_TIME}>Part Time</option>
                                <option value={JobType.FREELANCE}>Freelance</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="category" className="block text-sm font-bold font-poppins text-gray-600">
                                Category
                            </label>
                            <input
                                type="text"
                                id="category"
                                name="category"
                                onChange={handleInputChange}
                                value={formData.category}
                                className="mt-1 p-2 border rounded-md w-full"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="requirement" className="block text-sm font-bold font-poppins text-gray-600">
                                Requirement
                            </label>
                            <input
                                type="text"
                                id="requirement"
                                name="requirement"
                                onChange={handleInputChange}
                                value={formData.requirement}
                                className="mt-1 p-2 border rounded-md w-full"
                                required
                            />
                        </div>

                        <div className="col-span-2 mb-4">
                            <label htmlFor="description" className="block text-sm font-bold font-poppins text-gray-600">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                onChange={handleInputChange}
                                value={formData.description}
                                className="mt-1 p-2 border rounded-md w-full"
                                required
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="required_skill"
                                   className="block text-sm font-bold font-poppins text-gray-600">
                                Required Skill
                            </label>
                            <input
                                type="text"
                                id="required_skill"
                                name="required_skill"
                                onChange={handleInputChange}
                                value={formData.required_skill}
                                className="mt-1 p-2 border rounded-md w-full"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="salary" className="block text-sm font-bold font-poppins text-gray-600">
                                Salary
                            </label>
                            <input
                                type="number"
                                id="salary"
                                name="salary"
                                onChange={handleInputChange}
                                value={formData.salary}
                                className="mt-1 p-2 border rounded-md w-full"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-500 font-poppins text-white p-2 rounded-md">
                            Create Job
                        </button>
                    </div>
                </form>
                <ToastContainer/>
            </div>
        </>
    );
};

export default CreateJob;