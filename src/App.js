import "./App.css";
import React, { useContext, useEffect } from "react";
import ShopItemForm from "./components/ShopItemForm";
import Header from "./components/Header";
import ShopList from "./components/ShopList";
import { ShoppingListContext } from "./store/shop-list-context";
import { useQuery } from "react-query";

const fetchShoppingList = async () => {
  const res = await fetch(
    "https://shop-list-eaeb7-default-rtdb.firebaseio.com/shop-list.json"
  );

  return res.json();
};

function App() {
  const shopCtx = useContext(ShoppingListContext);
  const items = shopCtx.listItems;

  const { data, status } = useQuery("shoppingList", fetchShoppingList);

  if (status === "loading") {
    console.log("Loading...");
  }
  if (status === "error") {
    console.log("Something went wrong");
  }
  if (status === "success") {
    console.log("Success");
    console.log(data);
  }

  useEffect(() => {
    if (status === "success") {
      shopCtx.addInitialItems(data);
    }
  }, [status]);

  // update to database
  useEffect(() => {
    const putItems = async () => {
      const sendHttp = async () => {
        const res = await fetch(
          "https://shop-list-eaeb7-default-rtdb.firebaseio.com/shop-list.json",
          {
            method: "PUT",
            body: JSON.stringify(items),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!res.ok) {
          throw new Error(res.errorText || "Something went wrong");
        }

        return res.json();
      };
      try {
        await sendHttp();
      } catch (error) {
        console.log(error.message);
      }
    };

    putItems();
  }, [items]);

  return (
    <section className="bg-teal-900 w-full min-h-screen">
      <Header />
      <div className="flex flex-col md:flex-row">
        <ShopItemForm />
        <ShopList />
      </div>
    </section>
  );
}

export default App;
