// JobTable.jsx
import React from 'react';

const JobTable = ({ job, showDetails }) => {
  return (
    <tr className="border-b hover:bg-gray-100">
      <td className="py-3 px-6 text-center font-semibold">{job.job_name}</td>
      <td className="py-3 px-6 text-center">{job.type}</td>
      <td className="py-3 px-6 text-center">{job.category}</td>
      <td className="py-3 px-6 text-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition duration-300"
          onClick={() => showDetails(job)}
        >
          View Details
        </button>
      </td>
    </tr>
  );
};

export default JobTable;
