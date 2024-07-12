import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='relative'>
    <div className="bg-topography min-h-screen flex flex-col items-center justify-center z-10">
      <h1 className="text-5xl text-blue-600 font-montserrat font-bold mb-8 ml-8">You won't believe! <br /> what this location has to offer, <br /> just talk to Mwenyeji.</h1>
      <p className="text-lg font-bold text-gray-700 mb-8 mx-8">Discover local businesses and events in your community.</p>
      <div className="space-x-4">
        <Link to="/directory" className="bg-blue-500 text-white px-6 py-3 rounded-3xl hover:bg-blue-700 transition">
          Explore Directory
        </Link>
        <Link to="/events" className=" border-2 border-green-400 font-bold text-green-500 hover:text-white px-6 py-3 rounded-3xl hover:bg-green-700 transition">
          View Events
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Home;
