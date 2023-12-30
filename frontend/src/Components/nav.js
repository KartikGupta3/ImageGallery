import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-gray-800 w-full p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-bold">Image Gallery</div>
        <div className="flex space-x-4">
          <Link to="/ImageUpload">
            <button className="text-white hover:text-gray-300">Upload Image</button>
          </Link>
          <Link to="/Gallery">
            <button className="text-white hover:text-gray-300">Gallery</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
