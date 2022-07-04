import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-teal-900 z-10 border-y md:border shadow-md ">
      <div className="h-20 container mx-auto flex items-center justify-between text-white px-5">
        <h1 className="text-white text-5xl">Make a List</h1>
        <h3>
          <button className="border py-1 px-2 rounded-full inline">3</button>{" "}
          <span className="hidden md:inline">items in list</span>
        </h3>
      </div>
    </header>
  );
};

export default Header;
