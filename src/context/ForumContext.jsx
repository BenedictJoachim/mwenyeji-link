import React, { createContext, useReducer } from 'react';

const initialState = {
  categories: [
    { id: 1, name: 'General Discussion' },
    { id: 2, name: 'Local Businesses' },
    { id: 3, name: 'Events' },
    { id: 4, name: 'Recommendations' },
    { id: 5, name: 'Off-topic' },
  ],
  threads: [
    { id: 1, title: 'Best coffee shops in town?', category: 'Local Businesses', replies: 10, lastUpdated: '2 hours ago' },
    { id: 2, title: 'Upcoming events in July', category: 'Events', replies: 5, lastUpdated: '1 day ago' },
  ],
};

const ForumContext = createContext(initialState);

const forumReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_THREAD':
      return {
        ...state,
        threads: [...state.threads, action.payload],
      };
    case 'UPDATE_THREAD':
      return {
        ...state,
        threads: state.threads.map(thread =>
          thread.id === action.payload.id ? { ...thread, ...action.payload } : thread
        ),
      };
    case 'DELETE_THREAD':
      return {
        ...state,
        threads: state.threads.filter(thread => thread.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const ForumProvider = ({ children }) => {
  const [state, dispatch] = useReducer(forumReducer, initialState);

  return (
    <ForumContext.Provider value={{ state, dispatch }}>
      {children}
    </ForumContext.Provider>
  );
};

export default ForumContext;
