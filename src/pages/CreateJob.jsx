import React, {useState} from 'react';
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
    const [formData, setFormData] = useState({
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
      <div className={`p-5 sm:p-10 sm:ml-64`}>
        <div class="bg-blue-100 py-4 mt-10">
            <h1 class="text-2xl text-center font-bold">Create a Job</h1>
        </div>
          <form onSubmit={handleFormSubmit} className='border border-gray-300 px-4 py-8 rounded mx-auto max-w-6xl w-full my-5 inputs space-y-6' >
            <div className="grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2 gap-y-0 gap-x-8">
            <div className="col-span-2 mb-4">
              <label htmlFor="job_name" className="block text-sm font-semibold font-poppins">
                Job Name
              </label>
              <input
                placeholder='Title'
                type="text"
                id="job_name"
                name="job_name"
                onChange={handleInputChange}
                value={formData.job_name}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-semibold font-poppins">
                Category
              </label>
              <input
                placeholder='Job Category'
                type="text"
                id="category"
                name="category"
                onChange={handleInputChange}
                value={formData.category}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-sm font-semibold font-poppins">
                Type
              </label>
              <select
                id="type"
                name="type"
                onChange={handleInputChange}
                value={formData.type}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
                >
                <option value={JobType.FULL_TIME}>Full Time</option>
                <option value={JobType.PART_TIME}>Part Time</option>
                <option value={JobType.FREELANCE}>Freelance</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="required_skill" className="block text-sm font-semibold font-poppins">
                Required Skill
              </label>
              <input
                placeholder='Required Skill'
                type="text"
                id="required_skill"
                name="required_skill"
                onChange={handleInputChange}
                value={formData.required_skill}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="salary" className="block text-sm font-semibold font-poppins">
                Salary
              </label>
              <input
                placeholder='Salary'
                type="number"
                id="salary"
                name="salary"
                onChange={handleInputChange}
                value={formData.salary}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>


            <div className="col-span-2 mb-4">
              <label htmlFor="description" className="block text-sm font-semibold font-poppins">
                Description
              </label>
              <textarea
                placeholder='Job Description'
                id="description"
                name="description"
                onChange={handleInputChange}
                value={formData.description}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              ></textarea>
            </div>

            <div className="col-span-2 mb-4">
              <label htmlFor="requirement" className="block text-sm font-semibold font-poppins">
                Requirement
              </label>
              <textarea
                placeholder='Job Requirements'
                type="text"
                id="requirement"
                name="requirement"
                onChange={handleInputChange}
                value={formData.requirement}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              ></textarea>
            </div>

            
            </div>
    
            <div className="flex justify-end">
              <button type="submit" className="bg-blue-500 font-poppins text-white p-2 rounded-md">
                Create Job
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
        </>
      );
    };

export default CreateJob;