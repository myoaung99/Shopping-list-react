import React from "react";

const Form = () => {
  return (
    <form className="w-1/2 pt-40 relative ">
      <div className="text-right pr-16 py-16 text-white">
        <div>
          <label htmlFor="itemName" className="w-1/4 text-left text-xl">
            Item name
          </label>
          <input
            id="itemName"
            className="mt-2 p-1 bg-transparent border w-2/4 focus:outline-none"
            placeholder="Item name"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="quantity" className="w-1/4 text-left text-xl">
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            className="mt-2 p-1 bg-transparent border w-2/4 focus:outline-none"
            placeholder="Quantity"
          />
        </div>
        <div>
          <label htmlFor="price" className="w-1/4 text-left text-xl">
            Price
          </label>
          <input
            id="price"
            type="number"
            className="mt-2 p-1 bg-transparent border w-2/4 focus:outline-none"
            placeholder="Price"
          />
        </div>

        <div className="mt-8 text-right">
          <button className="border py-2 px-4 rounded hover:cursor-pointer hover:bg-gray-200 hover:text-black">
            Add to List
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
