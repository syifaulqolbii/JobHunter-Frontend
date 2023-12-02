// components/JobFilter.jsx
import React, { useState, useEffect } from 'react';

const JobFilter = ({ jobs, onFilter }) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchCategories = () => {
            const uniqueCategories = Array.from(new Set(jobs.map((job) => job.category)));
            setCategories(uniqueCategories);
        };

        fetchCategories();
    }, [jobs]);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleFilterClick = () => {
        onFilter(selectedCategory);
    };

    return (
        <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-end">
            <div className="mb-2 md:mb-0 md:mr-4 flex"> {/* Tambahkan class flex di sini */}
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                </label>
                <div className="mt-1">
                    <select
                        id="category"
                        name="category"
                        onChange={handleCategoryChange}
                        value={selectedCategory}
                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <button
                onClick={handleFilterClick}
                className="mt-2 md:mt-0 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-36"
            >
                Filter
            </button>
        </div>
    );
};

export default JobFilter;