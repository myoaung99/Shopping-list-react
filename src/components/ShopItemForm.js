import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ShoppingListContext } from "../store/shop-list-context";

const ShopItemForm = () => {
  const shopCtx = useContext(ShoppingListContext);
  const addItemHandler = (item) => {
    const { itemName: name, itemQuantity: quantity, itemPrice: price } = item;
    shopCtx.addItem({ id: Math.random(), name, quantity, price });
  };

  const formik = useFormik({
    initialValues: {
      itemName: "",
      itemQuantity: "",
      itemPrice: "",
    },
    validationSchema: Yup.object({
      itemName: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
      itemQuantity: Yup.number()
        .max(25, "Amount must be 25 or less")
        .min(1, "Amount must not be less than 1")
        .required("Required"),
      itemPrice: Yup.number()
        .min(1, "Price must not be less than 1 kyat")
        .required("Required"),
    }),
    onSubmit: (value) => {
      console.log(value);
      addItemHandler(value);
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full md:w-1/2 pt-40 mt-10 md:mt-0 relative border-b md:border-b-0"
      >
        <div className="text-center lg:text-right lg:pr-10 py-16 text-white">
          <div className="mb-3 flex justify-between items-center">
            <label
              htmlFor="itemName"
              className="pl-5 lg:pl-10 xl:pl-28 text-xl "
            >
              Item name
            </label>
            <input
              id="itemName"
              name="itemName"
              className="mr-5 mt-2 p-1 bg-transparent border w-2/4 focus:outline-none"
              placeholder="Item name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.itemName}
            />
          </div>
          {formik.touched.itemName && formik.errors.itemName ? (
            <div className="text-yellow-500 xl:mr-5 -mt-3">
              {formik.errors.itemName}
            </div>
          ) : null}
          <div className="mb-3 flex justify-between items-center">
            <label
              htmlFor="itemQuantity"
              className="lg:pl-10 pl-5 xl:pl-28 text-xl"
            >
              Quantity
            </label>
            <input
              id="itemQuantity"
              name="itemQuantity"
              type="number"
              className="mr-5 mt-2 p-1 bg-transparent border w-2/4 focus:outline-none"
              placeholder="Quantity"
              min={1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.itemQuantity}
            />
          </div>
          {formik.touched.itemQuantity && formik.errors.itemQuantity ? (
            <div className="text-yellow-500 xl:mr-5 -mt-3">
              {formik.errors.itemQuantity}
            </div>
          ) : null}
          <div className="mb-3 flex justify-between items-center ">
            <label
              htmlFor="itemPrice"
              className="lg:pl-10 pl-5 xl:pl-28 text-xl"
            >
              Price
            </label>
            <input
              id="itemPrice"
              name="itemPrice"
              type="number"
              className="mr-5 mt-2 p-1 bg-transparent border w-2/4 focus:outline-none"
              placeholder="Price"
              min={1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.itemPrice}
            />
          </div>
          {formik.touched.itemPrice && formik.errors.itemPrice ? (
            <div className="text-yellow-500 xl:mr-5 -mt-3">
              {formik.errors.itemPrice}
            </div>
          ) : null}

          <div className="mt-8 mr-5 md:mr-5  xl:mr-5 text-right">
            <button
              type="submit"
              className="border py-2 px-4 rounded hover:cursor-pointer hover:bg-gray-200 hover:text-black"
            >
              Add to List
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ShopItemForm;
