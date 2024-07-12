import React from 'react';

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joined: 'January 2023',
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
      <div className="mr-4">
        <img
          src="/images/user-avatar.jpg"
          alt="User Avatar"
          className="w-16 h-16 rounded-full"
        />
      </div>
      <div>
        <h2 className="text-xl font-bold mb-1">{user.name}</h2>
        <p className="text-gray-700 mb-1"><strong>Email:</strong> {user.email}</p>
        <p className="text-gray-700"><strong>Joined:</strong> {user.joined}</p>
      </div>
    </div>
  );
};

export default UserProfile;
