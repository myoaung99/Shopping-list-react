import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ShoppingListProvider from "./store/shop-list-provider";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShoppingListProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ShoppingListProvider>
    </BrowserRouter>
  </React.StrictMode>
);
