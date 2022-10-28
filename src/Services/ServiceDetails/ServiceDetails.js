import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useServices from "../../hooks/useServices";
import Form from "../../Shared/Form/Form";

const ServiceDetails = () => {
  const { _id } = useParams();
  const [services] = useServices([]);
  let matchData = {};
  matchData = services.find((d) => d._id === _id);

  console.log(matchData);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 m-16">
      <div className="card  glass ">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{_id}</h2>
          <p>{matchData?.packageName}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              {matchData?.description}
            </button>
          </div>
        </div>
      </div>
      <div>
        <Form matchData={matchData}></Form>
      </div>
    </div>
  );
};

export default ServiceDetails;
