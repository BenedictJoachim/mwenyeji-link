// src/pages/EventCalendar.jsx
import React from 'react';
import EventCard from '../components/EventCard';

const events = [
  { 
    id: 1, 
    title: 'Farmers Market', 
    date: '2024-08-15', 
    location: 'Kirumba', 
    description: 'Fresh produce from local farms.', 
    image: '/images/farmers-market.jpg', 
    video: '/videos/farmers-market.mp4' 
  },
  { 
    id: 2, 
    title: 'Soma Kitabu', 
    date: '2024-08-16', 
    location: 'Rock City Mall', 
    description: '2023 Best sellers on sale.', 
    image: '/images/book-store.jpg', 
    video: '/videos/bookstore.mp4' 
  },
  // Add more events here...
];

const EventCalendar = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Event Calendar</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
