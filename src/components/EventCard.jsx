const EventCard = ({ event }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
        <p className="text-gray-700 mb-2">{event.description}</p>
        <div className="space-x-2 mb-2">
          <span className="inline-block bg-blue-200 text-blue-700 px-3 py-1 text-sm font-semibold rounded-full">{event.date}</span>
          <span className="inline-block bg-green-200 text-green-700 px-3 py-1 text-sm font-semibold rounded-full">{event.location}</span>
        </div>
        {event.video && (
          <div className="mb-2">
            <video controls className="w-full h-48 object-cover">
              <source src={event.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
