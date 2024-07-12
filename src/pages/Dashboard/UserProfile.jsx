import React from 'react';

const UserProfile = () => {
  // Dummy user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joined: 'January 2023',
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <p className="mb-2"><strong>Name:</strong> {user.name}</p>
      <p className="mb-2"><strong>Email:</strong> {user.email}</p>
      <p className="mb-2"><strong>Joined:</strong> {user.joined}</p>
    </div>
  );
};

export default UserProfile;
