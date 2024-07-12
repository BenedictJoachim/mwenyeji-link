const RecentActivities = () => {
  const activities = [
    { id: 1, activity: 'Reviewed Business One', date: '2024-07-01' },
    { id: 2, activity: 'Favorited Business Two', date: '2024-07-05' },
    { id: 3, activity: 'Joined Event One', date: '2024-07-10' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
      <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
      <ul>
        {activities.map(activity => (
          <li key={activity.id} className="mb-2">
            <strong>{activity.activity}</strong> - {activity.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
