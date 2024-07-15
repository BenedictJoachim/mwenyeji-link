import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ForumContext from '../context/ForumContext';

const NewThread = () => {
  const { dispatch } = useContext(ForumContext);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('General Discussion');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newThread = {
      id: Date.now(),
      title,
      category,
      replies: 0,
      lastUpdated: 'Just now',
    };
    dispatch({ type: 'ADD_THREAD', payload: newThread });
    navigate('/forums');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-16">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Create New Thread</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option>General Discussion</option>
            <option>Local Businesses</option>
            <option>Events</option>
            <option>Recommendations</option>
            <option>Off-topic</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded-md shadow-lg">Create Thread</button>
      </form>
    </div>
  );
};

export default NewThread;
