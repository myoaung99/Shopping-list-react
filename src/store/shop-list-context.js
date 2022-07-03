import React, { createContext } from "react";

export const ShoppingListContext = createContext({
  items: [],
  totalQuantity: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
