import React from 'react';

const UpcomingEvents = () => {
  const events = [
    { id: 1, name: 'Event One', date: '2024-08-01', image: '/images/barkery-local.jpg' },
    { id: 2, name: 'Event Two', date: '2024-08-15', image: '/images/cafe.jpg' },
    { id: 3, name: 'Event Three', date: '2024-09-01', image: '/images/farmers-market.jpg' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <div className="space-y-4">
        {events.map(event => (
          <div key={event.id} className="flex items-center">
            <img
              src={event.image}
              alt={event.name}
              className="w-16 h-16 rounded-lg mr-4"
            />
            <div>
              <h3 className="text-xl font-bold">{event.name}</h3>
              <p className="text-gray-700">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
