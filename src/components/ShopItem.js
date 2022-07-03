import React from "react";

const ShopItem = (props) => {
  const { id, name, price, quantity } = props;
  return (
    <li className="flex items-center justify-between  border-b py-3">
      <div>
        <h1>{name}</h1>
        <div>
          <span>$ {price}</span>
          <span className="ml-24 border px-3">x{quantity}</span>
        </div>
      </div>

      <div className="">
        <button className="border-2 py-1 px-4 font-bold  hover:bg-white hover:text-black">
          -
        </button>
        <button className="ml-4 border-2 py-1 px-4 font-bold hover:bg-white hover:text-black">
          +
        </button>
      </div>
    </li>
  );
};

export default ShopItem;
