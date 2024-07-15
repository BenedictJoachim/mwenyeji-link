import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import ForumContext from '../context/ForumContext';

const CommunityForums = () => {
  const { state } = useContext(ForumContext);
  const { categories, threads } = state;

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-16">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold text-blue-600">Forums</h1>
        <Link to="/new-thread" className="bg-blue-600 text-white p-2 rounded-md shadow-lg flex items-center">
          <FiPlus className="mr-2" /> New Thread
        </Link>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Forum Categories */}
        <div className="bg-white p-6 rounded-md shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <ul>
            {categories.map(category => (
              <li key={category.id} className="mb-2">
                <Link to={`/forums/${category.name.toLowerCase().replace(' ', '-')}`} className="text-blue-600 hover:underline">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Threads List */}
        <div className="col-span-2">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Recent Threads</h2>
            {threads.map(thread => (
              <div key={thread.id} className="border-b pb-4 mb-4">
                <Link to={`/threads/${thread.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
                  {thread.title}
                </Link>
                <p className="text-gray-600">{thread.category} - {thread.replies} replies - Last updated {thread.lastUpdated}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityForums;
