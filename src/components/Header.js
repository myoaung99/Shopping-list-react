import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-teal-900 z-10 border ">
      <div className="h-20 container flex items-center justify-between text-white">
        <h1 className="text-white">Make a List</h1>
        <h3>
          <span className="border py-1 px-2 rounded-full">3</span> items in list
        </h3>
      </div>
    </header>
  );
};

export default Header;
