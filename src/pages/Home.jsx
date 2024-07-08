import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl text-blue-600 font-bold mb-8">Welcome to MwenyejiLink</h1>
      <p className="text-lg text-gray-700 mb-8">Discover local businesses and events in your community.</p>
      <div className="space-x-4">
        <Link to="/directory" className="bg-blue-500 text-white px-6 py-3 rounded-3xl hover:bg-blue-700 transition">
          Explore Directory
        </Link>
        <Link to="/events" className="bg-green-500 text-white px-6 py-3 rounded-3xl hover:bg-green-700 transition">
          View Events
        </Link>
      </div>
    </div>
  );
};

export default Home;
