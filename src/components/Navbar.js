import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-8 md:px-12 lg:px-12 xl:px-12 grid grid-cols-2 w-full justify-between navbar fixed top-0 z-10 h-16 bg-blue-800">
      <div className="part-1 flex text-white text-2xl items-center ">
        <h1 className="font-semibold">Student Portal</h1>
      </div>
      <div className="flex items-center justify-end gap-4">
        <Link
          to="/uploadDetails"
          className="text-white p-2 bg-blue-950 rounded-lg px-2 "
        >
          Add Student
        </Link>
        <Link to="/" className="text-white p-2 bg-blue-950 rounded-lg px-4">
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
