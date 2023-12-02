// JobDetails.jsx
import React from 'react';

const JobDetails = ({ job, hideDetails, isLoggedIn }) => {
    const handleApplyJob = () => {
        if (isLoggedIn) {
            // Logika ketika pengguna sudah login dan mengklik "Apply Job"
            console.log('Applying for job:', job.job_name);
        } else {
            // Tampilkan alert jika pengguna belum login
            alert('Anda harus login untuk melamar pekerjaan.');
        }
    };

    return (
        <div className="bg-white p-8 rounded-md shadow-md max-w-2xl mx-auto mt-8">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold">{job.job_name}</h2>
                <button
                    onClick={hideDetails}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Close Details
                </button>
            </div>
            <div className="flex">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Job Image"
                    className="mr-6 rounded-md"
                />
                <div>
                    <p className="text-gray-600">Type: {job.type}</p>
                    <p className="text-gray-600">Category: {job.category}</p>
                    <p className="text-gray-600">Requirement: {job.requirement}</p>
                    <p className="text-gray-600">Description: {job.description}</p>
                    <p className="text-gray-600">Required Skill: {job.required_skill}</p>
                    <p className="text-gray-600">Salary: {job.salary}</p>
                    {isLoggedIn && (
                        <button
                            onClick={handleApplyJob}
                            className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
                        >
                            Apply Job
                        </button>
                    )}
                </div>
            </div>
            {!isLoggedIn && (
                <p className="text-red-600 mt-4">
                    Silakan login untuk melamar pekerjaan.
                </p>
            )}
        </div>
    );
};

export default JobDetails;