// Homepage.jsx
import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Slogan from '../components/Slogan';
import JobCard from '../components/JobCard.jsx';
import JobDetails from '../components/JobDetails';
import JobFilter from '../components/JobFilter';

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
});

const Homepage = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const viewMoreRef = useRef(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Ganti dengan status login yang sesuai

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

    const showJobDetails = (job) => {
        setSelectedJob(job);
    };

    const hideJobDetails = () => {
        setSelectedJob(null);
    };

    const handleFilter = (category) => {
        setSelectedCategory(category);
        const filtered = jobs.filter((job) => job.category === category);
        setFilteredJobs(filtered);
        setCurrentPage(1);
    };

    const handleSearch = () => {
        if (!searchTerm) {
            setFilteredJobs([]);
            setCurrentPage(1);
            return;
        }

        const filtered = jobs.filter((job) =>
            job.job_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredJobs(filtered);
        setSelectedCategory('');
        setCurrentPage(1);
    };

    const handleViewMore = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const jobsToDisplay = searchTerm ? filteredJobs : selectedCategory ? filteredJobs : jobs;

    return (
        <div>
            <Header
                isLoggedIn={isLoggedIn}
                toggleLoginStatus={() => setIsLoggedIn((prev) => !prev)}
            />
            <Slogan/>
            <JobFilter onSearch={handleSearch}
                       searchTerm={searchTerm}
                       setSearchTerm={setSearchTerm}
                       jobs={jobs}
                       onFilter={handleFilter}/>
            <div className="container mx-auto p-8 flex flex-col items-center">
                <h1 className="text-3xl font-semibold mb-4">Available Jobs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {jobsToDisplay
                        .slice(0, currentPage * itemsPerPage)
                        .map((job) => (
                            <JobCard key={job.id} job={job} showDetails={showJobDetails}/>
                        ))}
                </div>
                {jobsToDisplay.length > currentPage * itemsPerPage && (
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={handleViewMore}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                        >
                            View More
                        </button>
                    </div>
                )}
            </div>
            {selectedJob && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <JobDetails job={selectedJob} hideDetails={hideJobDetails} isLoggedIn={isLoggedIn}/>
                </div>
            )}
        </div>
    );
};

export default Homepage;