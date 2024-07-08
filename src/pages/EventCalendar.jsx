
const events = [
  { id: 1, title: 'Farmers Market', date: '2024-08-15', location: 'City Park', description: 'Fresh produce from local farms.' },
  { id: 2, title: 'Yoga Class', date: '2024-08-16', location: 'Community Center', description: 'Free yoga class for all levels.' },
  // Add more events here...
];

const EventCalendar = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Event Calendar</h1>
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold">{event.title}</h2>
            <p className="text-gray-600">{event.date} at {event.location}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
