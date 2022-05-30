import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview/useReview';
import Review from '../Review/Review';
import './HomeReview.css';

const HomeReview = (props) => {
    const [reviews, setReviews] = useReview();
       
    // const newReview = reviews.slice(0,3)
  
    return (
        <div>
            <h3 className='text-3xl font-bold p-10  '>Review from our beloved customer</h3>
         <Review reviews={reviews}></Review>
         <button  className='btn p-3 px-10 rounded m-10'><Link to="/review">See All Review</Link></button>

            </div>
        
    );
};

export default HomeReview;