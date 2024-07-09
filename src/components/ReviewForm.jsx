import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const ReviewForm = ({ onSubmit }) => {
  const [newReview, setNewReview] = useState({ user: '', rating: 0, comment: '' });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    onSubmit(newReview);
    setNewReview({ user: '', rating: 0, comment: '' });
  };

  return (
    <form onSubmit={handleReviewSubmit} className="mt-8">
      <h3 className="text-xl font-semibold mb-2">Add a Review</h3>
      <input
        type="text"
        value={newReview.user}
        onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
        placeholder="Your Name"
        className="block w-full mb-2 p-2 border rounded-lg"
        required
      />
      <StarRatings
        rating={newReview.rating}
        changeRating={(rating) => setNewReview({ ...newReview, rating })}
        starRatedColor="gold"
        numberOfStars={5}
        starDimension="20px"
        starSpacing="2px"
      />
      <textarea
        value={newReview.comment}
        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
        placeholder="Your Review"
        className="block w-full mt-2 p-2 border rounded-lg"
        rows="4"
        required
      ></textarea>
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mt-2">
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
