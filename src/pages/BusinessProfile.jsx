// src/pages/BusinessProfile.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import businesses from '../data/businesses'; // Assume we have a data file for businesses
import { UserReviews, MapLocation, Promotions } from "../components";

const BusinessProfile = () => {
  const { id } = useParams();
  const business = businesses.find(b => b.id === parseInt(id));

  if (!business) {
    return <div>Business not found</div>;
  }

  return (
    <div className="container mx-auto p-4 mt-16">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img src={business.image} alt={business.name} className="w-full md:w-1/3 object-cover rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4" />
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{business.name}</h1>
          <p className="text-gray-700 mb-4">{business.description}</p>
          <div className="flex space-x-2 mb-4">
            <span className="inline-block bg-blue-200 text-blue-700 px-3 py-1 text-sm font-semibold rounded-full">{business.category}</span>
            <span className="inline-block bg-green-200 text-green-700 px-3 py-1 text-sm font-semibold rounded-full">{business.location}</span>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <UserReviews businessId={business.id} />
      </div>
      <div className="mt-8">
        <MapLocation location={business.location} />
      </div>
      <div className="mt-8">
        <Promotions promotions={business.promotions} />
      </div>
    </div>
  );
};

export default BusinessProfile;
