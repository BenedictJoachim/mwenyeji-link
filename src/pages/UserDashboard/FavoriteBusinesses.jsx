import React from 'react';

const FavoriteBusinesses = () => {
  // Dummy data
  const businesses = [
    { id: 1, name: 'Business One', category: 'Restaurant' },
    { id: 2, name: 'Business Two', category: 'Cafe' },
    { id: 3, name: 'Business Three', category: 'Store' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
      <h2 className="text-2xl font-bold mb-4">Favorite Businesses</h2>
      <ul>
        {businesses.map(business => (
          <li key={business.id} className="mb-2">
            <strong>{business.name}</strong> - {business.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteBusinesses;
