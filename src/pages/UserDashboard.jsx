import React from 'react';
import UserProfile from './UserDashboard/UserProfile';
import FavoriteBusinesses from './UserDashboard/FavoriteBusinesses';
import UpcomingEvents from './UserDashboard/UpcomingEvents';
import RecentActivities from './UserDashboard/RecentActivities';

const UserDashboard = () => {
  return (
    <div className="min-h-screen mt-14 bg-gray-100 flex">
      <aside className="w-64 bg-white p-6 shadow-lg">
        <nav>
          <ul>
            <li className="mb-4">
              <a href="#" className="text-blue-600 font-bold">Dashboard</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-700">Profile</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-700">Businesses</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-700">Events</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-gray-700">Activities</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <UserProfile />
          <FavoriteBusinesses />
          <UpcomingEvents />
          <RecentActivities />
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
