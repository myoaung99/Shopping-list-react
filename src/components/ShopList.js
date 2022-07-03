import React from "react";
import ShopItem from "./ShopItem";

const DUMMY_LIST = [
  { id: "i1", name: "Sushi", price: 22.99, quantity: 2 },
  { id: "i2", name: "Cake", price: 12.99, quantity: 1 },
];

const ShopList = () => {
  return (
    <div className="w-full md:w-1/2 md:border relative h-screen py-40 px-10 text-white overflow-y-scroll mt-32 md:mt-0">
      <ul className="p-0">
        {DUMMY_LIST.map((list) => (
          <ShopItem
            key={list.id}
            id={list.id}
            name={list.name}
            price={list.price}
            quantity={list.quantity}
          />
        ))}
      </ul>

      <div className="mt-3 flex justify-between items-center">
        <h2>Total</h2>
        <p className="text-2xl underline underline-offset-8 ">$ 434.23</p>
      </div>
    </div>
  );
};

export default ShopList;
