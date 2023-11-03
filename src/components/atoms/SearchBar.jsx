import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="search-bar-container mb-4">
            <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="py-2 px-4 border text-black border-gray-300 rounded-md focus:outline-none focus:border-indigo-600 w-48 sm:w-64 md:w-96"
            />
        </div>
    );
};

export default SearchBar;
