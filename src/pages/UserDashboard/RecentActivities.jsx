import React from 'react';

const RecentActivities = () => {
  const activities = [
    { id: 1, activity: 'Reviewed Business One', date: '2024-07-01' },
    { id: 2, activity: 'Favorited Business Two', date: '2024-07-05' },
    { id: 3, activity: 'Joined Event One', date: '2024-07-10' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
      <ul>
        {activities.map(activity => (
          <li key={activity.id} className="mb-2">
            <div className="flex items-center">
              <div className="mr-4">
                <img
                  src="/images/activity-icon.png"
                  alt="Activity Icon"
                  className="w-8 h-8"
                />
              </div>
              <div>
                <p className="text-gray-700">{activity.activity}</p>
                <p className="text-gray-500 text-sm">{activity.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
