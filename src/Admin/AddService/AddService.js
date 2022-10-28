import React from "react";

const AddService = () => {
  const handleAddTask = (e) => {
    e.preventDefault();
    const packageName = e.target.packageName.value;
    const price = e.target.price.value;
    const destination = e.target.destination.value;
    const description = e.target.description.value;

    const inputdata = { packageName, destination, price, description };

    const url = "https://travellers.onrender.com/servicedata";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputdata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("done", data);
        alert("Service Added");
        e.target.reset();
      });
  };
  return (
    <div>
      <div>
        <div className="text-3xl font-bold text-center m-5">Add A Package</div>

        <div className="flex p-6 mx-auto rounded-lg shadow-lg bg-white max-w-sm justify-center">
          <form onSubmit={handleAddTask}>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput90"
                name="packageName"
                placeholder="Package Name"
              />
            </div>

            <div className="form-group mb-6">
              <input
                type="text"
                name="description"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput91"
                placeholder="Tour Description"
              />
            </div>

            <div className="form-group mb-6">
              <input
                type="text"
                name="destination"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput91"
                placeholder="Destination"
              />
            </div>

            <div className="form-group mb-6">
              <input
                type="number"
                name="price"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput91"
                placeholder="Package Price (/BDT)"
              />
            </div>

            <button
              type="submit"
              className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
