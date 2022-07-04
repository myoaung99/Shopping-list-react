import "./App.css";
import ShopItemForm from "./components/ShopItemForm";
import Header from "./components/Header";
import ShopList from "./components/ShopList";
import ShoppingListProvider from "./store/shop-list-provider";

function App() {
  return (
    <ShoppingListProvider>
      <section className="bg-teal-900 w-full min-h-screen">
        <Header />

        <div className="flex flex-col md:flex-row">
          <ShopItemForm />
          <ShopList />
        </div>
      </section>
    </ShoppingListProvider>
  );
}

export default App;
