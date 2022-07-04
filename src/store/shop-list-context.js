import React, { createContext } from "react";

export const ShoppingListContext = createContext({
  listItems: [],
  totalQuantity: 0,
  addItem: (item) => {},
  addInitialItems: (items)=>{},
  removeItem: (id) => {},
});
