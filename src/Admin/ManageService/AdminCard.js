import React from "react";
import useServices from "../../hooks/useServices";

const AdminCard = ({ manageservice, handleDelete }) => {
  return (
    <div>
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{manageservice?.packageName}</h2>
          <p>We are using cookies for no reason.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Update</button>
            <button
              className="btn btn-error"
              onClick={() => handleDelete(manageservice._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
