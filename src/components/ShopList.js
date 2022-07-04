import React, { useContext } from "react";
import ShopItem from "./ShopItem";
import { ShoppingListContext } from "../store/shop-list-context";

const ShopList = () => {
  const shopCtx = useContext(ShoppingListContext);

  const itemsList = shopCtx.listItems;
  return (
    <div className="w-full md:w-1/2 md:border relative h-screen py-28 px-10 text-white overflow-y-scroll mt-32 md:mt-0">
      <ul className="p-0">
        {itemsList.map((list) => (
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
