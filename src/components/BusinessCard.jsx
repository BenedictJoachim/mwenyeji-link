import { Link } from 'react-router-dom';

const BusinessCard = ({ business }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <Link to={`/business/${business.id}`}>
        <h2 className="text-xl font-bold">{business.name}</h2>
        <p>{business.description}</p>
        <p className="text-sm text-gray-600">{business.category}</p>
      </Link>
    </div>
  );
};

export default BusinessCard;
