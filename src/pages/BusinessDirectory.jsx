import { BusinessCard } from "../components";

const businesses = [
  { 
    id: 1, 
    name: 'Local Bakery', 
    description: 'Fresh bread and pastries daily.', 
    category: 'Food', 
    location: 'Uhuru Street', 
    image: '/images/barkery-local.jpg', 
    video: '/videos/bakery.mp4' 
  },
  { 
    id: 2, 
    name: 'Gym Center', 
    description: 'Stay fit with our state-of-the-art equipment.', 
    category: 'Fitness', 
    location: 'Buzuruga', 
    image: '/images/gym-center.jpg', 
    video: '/videos/gym-center.mp4' 
  },
  // Add more businesses here...
];

const BusinessDirectory = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Business Directory</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {businesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
    </div>
  );
};

export default BusinessDirectory;
