// src/components/UserReviews.jsx
import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import ReviewForm from './ReviewForm';

const UserReviews = ({ businessId }) => {
  const [reviews, setReviews] = useState([
    { id: 1, user: 'John Doe', rating: 4, comment: 'Great place!' },
    { id: 2, user: 'Jane Smith', rating: 5, comment: 'Loved it!' },
  ]);

  const addReview = (newReview) => {
    setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8">
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
        {reviews.map((review) => (
          <div key={review.id} className="mb-4 p-4 border rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{review.user}</h3>
            <StarRatings
              rating={review.rating}
              starRatedColor="gold"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="2px"
            />
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
      <div className="w-full lg:w-1/3">
        <ReviewForm onSubmit={addReview} />
      </div>
    </div>
  );
};

export default UserReviews;
