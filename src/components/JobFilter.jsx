// components/JobFilter.jsx
import React, { useState, useEffect } from 'react';
import {Search, LogIn, LogOut} from 'react-feather';

const JobFilter = ({ jobs, onFilter,onSearch, searchTerm, setSearchTerm }) => {
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
        <div className="container mx-auto px-10 flex justify-between items-center">
            <div
                className="hidden md:flex gap-1 items-center"> {/* Tambahkan class space-x-2 untuk memberikan margin antara input dan ikon search */}
                <input
                    type="text"
                    placeholder="Search jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-2 py-1 rounded-md text-red-950"
                />
                <button onClick={onSearch} className="bg-white text-blue-500 px-2 py-1 rounded-md">
                    <Search size={18}/>
                </button>
            </div>
            <div className="mb-4 flex gap-3 flex-col md:flex-row md:items-center">
                <div className="mb-2 md:mb-0 flex"> {/* Tambahkan class flex di sini */}
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    </label>
                    <div className="mt-1">
                        <select
                            id="category"
                            name="category"
                            onChange={handleCategoryChange}
                            value={selectedCategory}
                            className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    className="mt-2 md:mt-0 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Filter
                </button>
            </div>
        </div>

    );
};

export default JobFilter;