import React, { useEffect, useState } from "react";
import Nav from "./nav";
import axios from "axios";
function Gallery() {
  const [image, setImage] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getImage")
      .then((res) => setImage(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-[#141E30] via-[#243B55] to-[#34495E]">
      <Nav />
      <div className="flex-grow p-8">
        <h2 className="text-3xl text-center font-semibold text-white mb-4">
          Uploaded Images
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {image.map((imageUrl, index) => (
            <img
              key={index}
              src={`http://localhost:3001/Images/${imageUrl.image}`}
              alt=""
              className="rounded-md h-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
