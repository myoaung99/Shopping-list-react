import React from "react";

const Form = () => {
  return (
    <form className="w-full md:w-1/2 pt-40 mt-10 md:mt-0 relative border-b md:border-b-0">
      <div className="lg:text-right lg:pr-16 py-16 text-white">
        <div className="mb-3">
          <label
            htmlFor="itemName"
            className="w-36  px-4 xl:w-1/4 text-left text-xl "
          >
            Item name
          </label>
          <input
            id="itemName"
            className="mt-2 p-1 bg-transparent border w-2/4 focus:outline-none"
            placeholder="Item name"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="quantity"
            className="w-36 px-4 xl:w-1/4 text-left text-xl"
          >
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            className="mt-2 p-1 bg-transparent border w-2/4 focus:outline-none"
            placeholder="Quantity"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="price"
            className="w-36 px-4 xl:w-1/4 text-left text-xl"
          >
            Price
          </label>
          <input
            id="price"
            type="number"
            className="mt-2 p-1 bg-transparent border w-2/4 focus:outline-none"
            placeholder="Price"
          />
        </div>

        <div className="mt-8 mr-12 md:mr-12 lg:mr-1 xl:mr-0 text-right">
          <button className="border py-2 px-4 rounded hover:cursor-pointer hover:bg-gray-200 hover:text-black">
            Add to List
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
