import React, { useState } from "react";
import Nav from "./nav";

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    console.log("File uploaded:", selectedFile);
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-[#141E30] via-[#243B55] to-[#34495E]">
      <Nav />
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white space-y-4 p-8 shadow-md rounded-md max-w-md w-full">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
            Upload Image
          </h2>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-4 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500 transition duration-300"
          />
          <button
            onClick={handleUpload}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
