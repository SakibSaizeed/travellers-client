import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useServices from "../../hooks/useServices";

const Service = ({ service }) => {
  const { packageName, destination, price, description, _id } = service;
  const navigate = useNavigate();
  const handleBooking = (_id) => {
    navigate(`/service/${_id}`);
  };

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{packageName}</h2>

          <p>{price} /-BDT</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => handleBooking(_id)}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
