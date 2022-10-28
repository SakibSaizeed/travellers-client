import React from "react";

const Review = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <div className="avatar">
            <div className="w-24 mask mask-squircle">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="rating rating-lg">
            <input type="radio" name="rating-9" className="rating-hidden" />
            <input type="radio" name="rating-9" className="mask mask-star-2" />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2"
              checked
            />
            <input type="radio" name="rating-9" className="mask mask-star-2" />
            <input type="radio" name="rating-9" className="mask mask-star-2" />
            <input type="radio" name="rating-9" className="mask mask-star-2" />
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
