import React from "react";
import "./ReviewDetail.css";

const ReviewDetail = (props) => {
  const { name, review, rating, image } = props.review;
  return (
    <div className="review">
        <img  src={image} alt="" />
      <h3 className="text-2xl font-bold">{name}</h3>
      <p> <span className="font-bold"> Review detail:</span> {review}</p>
      <p> <span className="font-bold">Rating:</span> {rating}</p>
    </div>
  );
};

export default ReviewDetail;
