// src/pages/BusinessDirectory.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import businesses from '../data/businesses'; // Ensure this is the correct path to your businesses data
import { BusinessCard } from '../components';

const BusinessDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}`);
  };

  const categories = ['All', 'Restaurants', 'Shops', 'Services', 'Entertainment']; // Example categories
  const locations = ['All', 'Buzuruga', 'Kisesa', 'Pasiansi', 'Kiseke', 'Nyegezi']; // Example locations

  const filteredBusinesses = businesses.filter(business =>
    business.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 mt-3">
      <h1 className="text-2xl font-bold mb-4">Business Directory</h1>
      <nav className="mb-4 flex flex-wrap justify-between items-center">
          <div className='flex w-full'>
            <div className="font-semibold">Categories: </div>
            <div className='md:w-auto mb-2 md:mb-0 overflow-x-auto whitespace-nowrap'>
                {categories.map(category => (
                  <Link key={category} to={`#`} className="mx-2 text-blue-600 hover:underline">
                    {category}
                  </Link>
                ))}
            </div>
          </div>
        <div className='flex w-full'>
          <div className="font-semibold">Locations: </div>
          <div className='md:w-auto mb-2 md:mb-0 overflow-x-auto whitespace-nowrap'>
              {locations.map(location => (
                <Link key={location} to={`#`} className="mx-2 text-blue-600 hover:underline">
                  {location}
                </Link>
              ))}
          </div>
        </div>
      </nav>
      <div className="flex justify-center mb-4">
          <div className='flex items-center px-2 py-2 w-full md:w-1/2 lg:w-1/3 shadow-lg shadow-inner rounded-full'>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search Events..."
            className="grow p-2 outline-0"
          />
          <button onClick={handleSearchSubmit} className="ml-2 p-2 text-blue-300 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1110.5 3.5a7.5 7.5 0 016.15 13.15z" />
            </svg>
          </button>
          </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBusinesses.map(business => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
    </div>
  );
};

export default BusinessDirectory;
