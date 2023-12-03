// components/JobCard.jsx
import React from 'react';
import {Link} from "react-router-dom";

const JobCard = ({job, showDetails}) => {
    const MAX_DESCRIPTION_LENGTH = 50;
    const truncatedDescription = job.description.length > MAX_DESCRIPTION_LENGTH
        ? `${job.description.substring(0, MAX_DESCRIPTION_LENGTH)}...`
        : job.description;
    return (
        <div className="bg-white overflow-hidden shadow-md rounded-md p-4">
            <h3 className="text-xl font-semibold mb-2">{job.job_name}</h3>
            <p className="text-gray-500 mb-2">{job.type}</p>
            <p className="text-gray-500 mb-2">{job.category}</p>
            <p className="text-gray-700 mb-4">{truncatedDescription}</p>
            <Link to={`/detailjob/${job.id}`}
                  onClick={() => showDetails(job)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300"
            >
                View Details
            </Link>
        </div>
    );
};

export default JobCard;