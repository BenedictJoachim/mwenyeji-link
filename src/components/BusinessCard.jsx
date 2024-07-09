import { Link } from "react-router-dom";

const BusinessCard = ({ business }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg mt-3">
      <img src={business.image} alt={business.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{business.name}</h2>
        <p className="text-gray-700 mb-2">{business.description}</p>
        <div className="space-x-2 mb-2">
          <span className="inline-block bg-blue-200 text-blue-700 px-3 py-1 text-sm font-semibold rounded-full">{business.category}</span>
          <span className="inline-block bg-green-200 text-green-700 px-3 py-1 text-sm font-semibold rounded-full">{business.location}</span>
        </div>
        {/* {business.video && (
          <div className="mb-2">
            <video controls className="w-full h-48 object-cover">
              <source src={business.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )} */}
        <Link to={`/business/${business.id}`} className="text-blue-500 hover:underline">View More</Link>
      </div>
    </div>
  );
};

export default BusinessCard;
