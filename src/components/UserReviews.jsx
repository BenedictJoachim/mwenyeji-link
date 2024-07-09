import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const UserReviews = ({ businessId }) => {
  const [reviews, setReviews] = useState([
    { id: 1, rating: 4, text: 'Great place!', user: 'John Doe' },
    { id: 2, rating: 5, text: 'Excellent service!', user: 'Jane Smith' },
  ]);

  const [newReview, setNewReview] = useState({ rating: 0, text: '', user: '' });

  const handleInputChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
    setNewReview({ rating: 0, text: '', user: '' });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="mb-4 p-4 border rounded-lg shadow-lg">
          <StarRatings
            rating={review.rating}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
            name="rating"
          />
          <p className="text-gray-700 mt-2">{review.text}</p>
          <p className="text-sm text-gray-500">- {review.user}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit} className="mt-8">
        <h3 className="text-xl font-bold mb-4">Add a Review</h3>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Rating</label>
          <StarRatings
            rating={newReview.rating}
            starRatedColor="gold"
            changeRating={handleRatingChange}
            numberOfStars={5}
            starDimension="30px"
            starSpacing="4px"
            name="rating"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Review</label>
          <textarea
            name="text"
            value={newReview.text}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Your Name</label>
          <input
            type="text"
            name="user"
            value={newReview.user}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default UserReviews;
