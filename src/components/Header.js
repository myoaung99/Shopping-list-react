import React, { useContext, useEffect } from "react";
import { ShoppingListContext } from "./../store/shop-list-context";

const Header = () => {
  const shopCtx = useContext(ShoppingListContext);
  const items = shopCtx.listItems;
  let itemAmount;

  if (items && items.length > 0) {
    itemAmount = items.reduce((total, item) => total + item.quantity, 0);
  }

  return (
    <header className="fixed top-0 w-full bg-teal-900 z-10 border-y md:border shadow-md ">
      <div className="h-20 container mx-auto flex items-center justify-between text-white px-5">
        <h1 className="text-white text-5xl">Make a List</h1>
        <h3>
          <button className="border py-1 px-2 rounded-full inline">
            {itemAmount}
          </button>{" "}
          <span className="hidden md:inline">items in list</span>
        </h3>
      </div>
    </header>
  );
};

export default Header;
