import React from 'react';
import useReview from '../../hooks/useReview/useReview';
import Review from '../Review/Review';

const HomeReview = (props) => {
    const [reviews, setReviews] = useReview();
    console.log(reviews)
    return (
        <div>
            <h3 className='text-3xl font-bold p-10  '>Review from our beloved customer</h3>
         <Review reviews={reviews}></Review>
         <button  className='bg-red-400 p-3  rounded m-10'>See All Reviews</button>

            </div>
        
    );
};

export default HomeReview;