import { Link } from 'react-router-dom';
import { compass, map_compass, town_map } from "../assets/images";

const Home = () => {
  return (
    <div className='relative'>
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center z-10">
      <h1 className="text-5xl text-blue-600 font-montserrat font-bold mb-8 ml-8">You won't believe! <br /> what this location has to offer, <br /> just talk to Mwenyeji.</h1>
      <p className="text-lg text-gray-700 mb-8 mx-8">Discover local businesses and events in your community.</p>
      <div className="space-x-4">
        <Link to="/directory" className="bg-blue-500 text-white px-6 py-3 rounded-3xl hover:bg-blue-700 transition">
          Explore Directory
        </Link>
        <Link to="/events" className=" border border-green-500 text-green-500 hover:text-white px-6 py-3 rounded-3xl hover:bg-green-700 transition">
          View Events
        </Link>
      </div>
    </div>
      <img 
        src={compass} 
        alt="compass"
        className='hidden md:block absolute top-16 left-0 z-6 w-1/5' 
      />
      <img 
        src={town_map} 
        alt="town map"
        className='absolute bottom-[50%] md:bottom-16 right-0 z-6 w-2/5'  
      />
    </div>
  );
};

export default Home;
