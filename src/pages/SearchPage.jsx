// src/pages/SearchPage.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import businesses from '../data/businesses'; // Ensure this is the correct path to your businesses data
import { BusinessCard } from '../components';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchPage = () => {
  const query = useQuery();
  const searchTerm = query.get('query');
  const filteredBusinesses = businesses.filter(business =>
    business.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{searchTerm}"</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBusinesses.map(business => (
            <BusinessCard key={business.id} business={business} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
