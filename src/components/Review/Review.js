import React from 'react';
import useReview from '../../hooks/useReview/useReview';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const Review = () => {

    const [reviews, setReviews] = useReview([]);
  

    return (
        <div>
            
            <div className='grid grid-cols-3 gap-4'>
            {
                reviews.map(review=> <ReviewDetail key={review.id} review={review}></ReviewDetail>)
            }
            </div>
        </div>
    );
};

export default Review;