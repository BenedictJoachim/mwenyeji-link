import React from 'react';

const UpcomingEvents = () => {
  const events = [
    { id: 1, name: 'Event One', date: '2024-08-01' },
    { id: 2, name: 'Event Two', date: '2024-08-15' },
    { id: 3, name: 'Event Three', date: '2024-09-01' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id} className="mb-2">
            <strong>{event.name}</strong> - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingEvents;
