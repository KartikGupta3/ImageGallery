import React from "react";
import Nav from "./nav";

function Gallery() {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-[#141E30] via-[#243B55] to-[#34495E]">
      <Nav />
      <div className="flex-grow p-8">
        <h2 className="text-3xl text-center font-semibold text-white mb-4">
          Uploaded Images
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"></div>
      </div>
    </div>
  );
}

export default Gallery;
