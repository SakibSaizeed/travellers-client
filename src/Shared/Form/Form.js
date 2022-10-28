import React from "react";

const Form = ({ matchData }) => {
  const handleAddTask = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const contact = e.target.contact.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const packname = matchData.packageName; //Selected package by user

    const totalInputData = { username, email, contact, packname, address };

    const url = "https://travellers.onrender.com/bookingdata";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(totalInputData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("done", data);
        alert("Thank you for Booking.");
        e.target.reset();
      });
  };
  return (
    <div>
      <div>
        <div className="text-xl font-bold text-center ">
          {" "}
          Selected Package: {matchData?.packageName}
        </div>

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
                name="username"
                placeholder="Enter your Full Name"
              />
            </div>
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
                name="email"
                placeholder="Your email"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="number"
                name="contact"
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
                placeholder="Mobile Number"
              />
            </div>

            <div className="form-group mb-6">
              <input
                type="text"
                name="address"
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
                placeholder="Address"
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

export default Form;
