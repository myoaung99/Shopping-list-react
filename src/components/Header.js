import React, { useState, useContext, useEffect } from "react";
import { ShoppingListContext } from "./../store/shop-list-context";
import { motion } from "framer-motion";

const hightLightBadge = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 1.3,
    transition: {
      ease: "easeInOut",
      type: "spring",
      stiffness: 140,
    },
  },
};

const Header = () => {
  const [highLight, setHighLight] = useState(false);

  const shopCtx = useContext(ShoppingListContext);
  const items = shopCtx.listItems;
  let itemAmount = 0;

  if (items && items.length > 0) {
    itemAmount = items.reduce((total, item) => total + item.quantity, 0);
  }

  useEffect(() => {
    if (itemAmount === 0) return;
    setHighLight(true);

    const timer = setTimeout(() => {
      setHighLight(false);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [itemAmount]);

  return (
    <header className="fixed top-0 w-full bg-teal-900 z-10 border-y md:border shadow-md ">
      <div className="h-20 container mx-auto flex items-center justify-between text-white px-5">
        <h1 className="text-white text-5xl">Make a List</h1>
        <h3>
          <motion.button
            variants={hightLightBadge}
            animate={highLight ? "animate" : "initial"}
            className="border py-1 px-2 rounded-full text-yellow-500 text-xl mr-2 font-bold"
          >
            {itemAmount}
          </motion.button>{" "}
          <span className="hidden md:inline">items in list</span>
        </h3>
      </div>
    </header>
  );
};

export default Header;
