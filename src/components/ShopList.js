import React, { useContext, useState, useEffect } from "react";
import ShopItem from "./ShopItem";
import { ShoppingListContext } from "../store/shop-list-context";
import { motion } from "framer-motion";

const hightLightTotal = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0.1,
    transition: {
      ease: "easeInOut",
      type: "spring",
      stiffness: 140,
    },
  },
};

const ShopList = () => {
  const [highLight, setHighLight] = useState(false);
  const shopCtx = useContext(ShoppingListContext);

  const itemsList = shopCtx.listItems;
  const totalAmount = shopCtx.totalAmount.toFixed(2);

  useEffect(() => {
    if (totalAmount === 0) return;
    setHighLight(true);

    const timer = setTimeout(() => {
      setHighLight(false);
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [totalAmount]);

  return (
    <div className="w-full md:w-1/2 md:border relative h-screen py-28 px-10 text-white overflow-y-scroll mt-36 md:mt-0">
      {!itemsList.length && (
        <p className="text-3xl mb-10">Let's add something to the List 🤩</p>
      )}

      {itemsList.length > 0 && (
        <ul className="p-0">
          {itemsList.map((list) => (
            <ShopItem key={list.id} list={list} />
          ))}
        </ul>
      )}

      <div className="mt-3 flex justify-between items-center">
        <h2 className="text-3xl">Total</h2>
        <motion.p
          variants={hightLightTotal}
          animate={highLight ? "animate" : "initial"}
          className="text-2xl underline underline-offset-8"
        >
          $ {totalAmount}
        </motion.p>
      </div>
    </div>
  );
};

export default ShopList;
