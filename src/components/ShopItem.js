import React, { useContext } from "react";
import { ShoppingListContext } from "../store/shop-list-context";
import { motion, LayoutGroup } from "framer-motion";

const ShopItem = (props) => {
  const shopCtx = useContext(ShoppingListContext);
  const { list } = props;
  const { id, name, price, quantity } = list;

  const addShopItemHandler = () => {
    shopCtx.addItem({ ...list, quantity: 1 });
  };

  const removeShopItemHandler = () => {
    shopCtx.removeItem(id);
  };
  return (
    <li className="flex items-end justify-between border-b py-3">
      <div>
        <h1 className="text-3xl">{name}</h1>
        <div className="mt-4  w-36 md:w-40 lg:w-48 flex justify-between items-end">
          <span>$ {price}</span>
          <span className="ml-12 md:ml-14 lg:ml-24 border px-3">
            x{quantity}
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <button
          onClick={removeShopItemHandler}
          className="border-2 py-1 px-4 font-bold  hover:bg-white hover:text-black"
        >
          -
        </button>
        <button
          onClick={addShopItemHandler}
          className="mt-2 md:mt-2  border-2 py-1 px-4 font-bold hover:bg-white hover:text-black"
        >
          +
        </button>
      </div>
    </li>
  );
};

export default ShopItem;
