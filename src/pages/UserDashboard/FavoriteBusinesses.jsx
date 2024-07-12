import React from 'react';

const FavoriteBusinesses = () => {
  const businesses = [
    { id: 1, name: 'Business One', category: 'Restaurant', image: '/images/restaurant.jpg' },
    { id: 2, name: 'Business Two', category: 'Cafe', image: '/images/cafe.jpg' },
    { id: 3, name: 'Business Three', category: 'Store', image: '/images/store.jpg' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Favorite Businesses</h2>
      <div className="space-y-4">
        {businesses.map(business => (
          <div key={business.id} className="flex items-center">
            <img
              src={business.image}
              alt={business.name}
              className="w-16 h-16 rounded-lg mr-4"
            />
            <div>
              <h3 className="text-xl font-bold">{business.name}</h3>
              <p className="text-gray-700">{business.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteBusinesses;
