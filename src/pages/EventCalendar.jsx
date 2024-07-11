// src/pages/EventsCalendar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EventCard } from '../components'
import events from '../data/events'; // Ensure this is the correct path to your events data

const EventsCalendar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const categories = ['All', 'Music', 'Art', 'Tech', 'Food']; // Example categories
  const locations = ['All', 'Buzuruga', 'Kisesa', 'Pasiansi', 'Kiseke', 'Nyegezi']; // Example locations

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchIconClick = () => {
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <div className="container mx-auto p-4 mt-3">
      <h1 className="text-2xl font-bold mb-4">Events Calendar</h1>
      <nav className="mb-4 flex flex-wrap justify-between items-center">
        <div className="flex w-full">
          <div className="font-semibold">Categories: </div>
          <div className="md:w-auto mb-2 md:mb-0 overflow-x-auto whitespace-nowrap">
              {categories.map(category => (
                <Link key={category} to={`#`} className="mx-2 text-blue-600 hover:underline">
                  {category}
                </Link>
              ))}
          </div>
        </div>
        <div className="flex w-full">
          <div className="font-semibold">Locations: </div>
          <div className="md:w-auto mb-2 md:mb-0 overflow-x-auto whitespace-nowrap">
              {locations.map(location => (
                <Link key={location} to={`#`} className="mx-2 text-blue-600 hover:underline">
                  {location}
                </Link>
              ))}
          </div>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Events..."
            className="p-2 border rounded-lg outline-blue-100"
          />
          <button onClick={handleSearchIconClick} className="ml-2 p-2 bg-blue-600 text-white rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1110.5 3.5a7.5 7.5 0 016.15 13.15z" />
            </svg>
          </button>
        </div>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsCalendar;
