// src/pages/Directory.jsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import businesses from '../data/businesses'; // Ensure this is the correct path to your businesses data

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Directory = () => {
  const query = useQuery();
  const town = query.get('town');
  const [searchTerm, setSearchTerm] = useState('');
  const filteredBusinesses = businesses
    .filter(business => business.location === town)
    .filter(business => business.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{town} Businesses</h1>
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Businesses..."
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBusinesses.map(business => (
          <div key={business.id} className="p-4 border rounded-lg shadow-lg">
            <img src={business.image} alt={business.name} className="w-full h-32 object-cover rounded-lg mb-2" />
            <h2 className="text-xl font-semibold">{business.name}</h2>
            <p className="text-gray-700">{business.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directory;
