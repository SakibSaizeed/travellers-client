import useServices from "../../hooks/useServices";
import Service from "../Service/Service";

const AllServices = () => {
  const [services] = useServices([]);

  return (
    <div>
      <h2 className="text-3xl text-center m-5 text-warning">
        Choose Your Package
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 m-5 p-6">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
