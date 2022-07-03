import React, { useReducer } from "react";
import { ShoppingListContext } from "./shop-list-context";

const initialShopList = {
  items: [],
  totalAmount: 0,
};

const reducer = (state, { type, payload }) => {
  if (type === "ADD") {
    // update amount
    const updatedTotalAmount =
      state.totalAmount + payload.price * payload.quantity;

    const existingShopItemIndex = state.items.findIndex(
      (item) => item.id === payload.id
    );

    const existingShopItem = state.items[existingShopItemIndex];

    let updatedItems;

    if (existingShopItem) {
      const updatedExistingShopItem = {
        ...existingShopItem,
        quantity: existingShopItem.quantity + payload.quantity,
      };

      updatedItems = [...state.items];

      updatedItems[existingShopItemIndex] = updatedExistingShopItem;
    } else {
      updatedItems = state.items.concat(payload);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};

const ShoppingListProvider = (props) => {
  const [shopList, setShopList] = useReducer(reducer, initialShopList);
  const addItemHandler = (item) => {};
  const removeItemHandler = (id) => {};
  const shopListValue = {
    listItems: shopList.items,
    totalAmount: shopList.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <ShoppingListContext.Provider value={shopListValue}>
      {props.children}
    </ShoppingListContext.Provider>
  );
};

export default ShoppingListProvider;
