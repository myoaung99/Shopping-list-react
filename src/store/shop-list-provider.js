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

  if (type === "REMOVE") {
    const removingShopItemIndex = state.items.findIndex(
      (item) => item.id === payload
    );

    const removingShopItem = state.items[removingShopItemIndex];

    const updatedTotalAmount = state.totalAmount - removingShopItem.price;

    let updatedItems;

    if (removingShopItem.quantity === 1) {
      updatedItems = state.items.filter((item) => item.id !== payload);
    } else {
      const updatedRemovingShopItem = {
        ...removingShopItem,
        quantity: removingShopItem.quantity - 1,
      };

      updatedItems = [...state.items];
      updatedItems[removingShopItemIndex] = updatedRemovingShopItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};

const ShoppingListProvider = (props) => {
  const [shopList, dispatchShopList] = useReducer(reducer, initialShopList);

  const addItemHandler = (item) => {
    dispatchShopList({ type: "ADD", payload: item });
  };

  const removeItemHandler = (id) => {
    dispatchShopList({ type: "REMOVE", payload: id });
  };

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
