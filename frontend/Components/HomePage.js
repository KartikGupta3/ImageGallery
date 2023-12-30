import { useEffect } from "react";
import React from "react";
const HomePage = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.location.href = "/LogIn";
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <div className="relative">
        <div className="flex items-center justify-center bg-gradient-to-r from-[#0F0C29] via-[#302B63] to-[#24243E] h-screen w-screen z-[9999] text-3xl text-white font-serif">
          Welcome to Login/SignUp Portal
        </div>
      </div>
    </>
  );
};

export default HomePage;
