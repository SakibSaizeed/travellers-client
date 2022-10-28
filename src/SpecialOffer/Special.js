import React from "react";
import useServices from "../hooks/useServices";
import InfoCard from "./InfoCard";

const Special = () => {
  const [services] = useServices([]);
  const special = services.slice(3);
  return (
    <div className="text-center ">
      <div className="stat-value text-secondary">
        Our Most Popular And Special Offers
      </div>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat flex">
          {special.map((special) => (
            <InfoCard special={special} key={special._id}>
              {" "}
            </InfoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Special;
