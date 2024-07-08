import { useParams } from 'react-router-dom';

const businesses = [
  { id: 1, name: 'Local Bakery', description: 'Fresh bread and pastries daily.', category: 'Food', details: 'Open daily from 6am to 8pm.' },
  { id: 2, name: 'Gym Center', description: 'Stay fit with our state-of-the-art equipment.', category: 'Fitness', details: 'Open 24/7 with membership.' },
  // Add more businesses here...
];

const BusinessProfile = () => {
  const { id } = useParams();
  const business = businesses.find((b) => b.id === parseInt(id));

  if (!business) {
    return <div>Business not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{business.name}</h1>
      <p className="text-lg mb-2">{business.description}</p>
      <p className="text-gray-600 mb-4">{business.category}</p>
      <p>{business.details}</p>
    </div>
  );
};

export default BusinessProfile;
