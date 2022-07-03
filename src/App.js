import "./App.css";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Header from "./components/Header";
import ShopList from "./components/ShopList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <section className="bg-teal-900 w-full min-h-screen">
      <Header />

      <div className="flex flex-col md:flex-row">
        <Form />
        <ShopList />
      </div>
    </section>
  );
}

export default App;
