import React from 'react';
import UserProfile from './UserProfile';
import FavoriteBusinesses from './FavoriteBusinesses';
import UpcomingEvents from './UpcomingEvents';
import RecentActivities from './RecentActivities';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1">
          <UserProfile />
        </div>
        <div className="lg:col-span-2">
          <FavoriteBusinesses />
          <UpcomingEvents />
          <RecentActivities />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
