import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10" id="">
      <nav className="bg-gray-800 py-4 ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-bold text-white">Student Portal</div>
          <div className="flex justify-end gap-x-10">
            <Link
              to="/uploadDetails"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Upload Student Details
            </Link>
            <Link
              to="/"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Home
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
