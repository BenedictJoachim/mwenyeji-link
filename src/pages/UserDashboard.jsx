import {useState} from 'react';
import { UserProfile, FavoriteBusinesses, UpcomingEvents, RecentActivities } from './UserDashboard'
import { FiMenu, FiX } from 'react-icons/fi';

const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex bg-gray-100 mt-14">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 mt-16 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-white p-6 shadow-lg w-64 z-50 flex flex-col justify-between h-full`}>
        <div>
          <button
            onClick={toggleSidebar}
            className="text-gray-700 p-2 rounded-full shadow-lg fixed top-4 right-4"
          >
            <FiX size={24} />
          </button>
          <nav className="mt-6">
            <ul>
              <li className="mb-4">
                <a href="#" className="text-blue-600 font-bold">Dashboard</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray-700">Profile</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray-700">Businesses</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray-700">Events</a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray-700">Activities</a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-8">
        {/* Menu button */}
        <button
          onClick={toggleSidebar}
          className={`fixed top-18 left-4 z-50 bg-blue-500 text-white p-2 rounded-full  ${isSidebarOpen ? 'hidden' : ''}`}
        >
          <FiMenu size={24} />
        </button>

        <h1 className="text-3xl font-bold mb-4 ml-8">User Dashboard</h1>
        <UserProfile />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-3">
          <FavoriteBusinesses />
          <UpcomingEvents />
          <RecentActivities />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
