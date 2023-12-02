// homepage/index.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1', 
});

function Homepage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get('/jobs'); 
        setJobs(response.data.data);
      } catch (error) {
        setError(error.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Jobs List</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>{job.job_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Homepage;
