import React, { useEffect, useState } from 'react';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const Review = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('reviewData.json')
        .then(res=>res.json())
        .then(data=>setReviews(data));
    },[]);


    return (
        <div>
            <h2>this is review: {reviews.length}</h2>
            <div className='grid grid-cols-3 gap-4'>
            {
                reviews.map(review=> <ReviewDetail key={review.id} review={review}></ReviewDetail>)
            }
            </div>
        </div>
    );
};

export default Review;