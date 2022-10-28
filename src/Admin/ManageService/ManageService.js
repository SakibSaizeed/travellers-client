import React from "react";
import useServices from "../../hooks/useServices";
import AdminCard from "./AdminCard";

const ManageService = () => {
  const [services, setServices] = useServices([]);

  const handleDelete = (id) => {
    const confirmAlert = window.confirm("R YOU SURE?");
    if (confirmAlert) {
      const url = `https://travellers.onrender.com/services/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.deletedCount > 0) {
            const remain = services.filter((service) => service._id !== id);
            setServices(remain);
          }
        });
    }
  };
  return (
    <div>
      {services.map((manageservice) => (
        <AdminCard
          manageservice={manageservice}
          handleDelete={() => handleDelete(manageservice._id)}
          key={manageservice._id}
        ></AdminCard>
      ))}
    </div>
  );
};

export default ManageService;
