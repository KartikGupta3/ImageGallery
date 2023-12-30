import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const SingUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password === confirmpass) {
      try {
        const response = await axios.post(
          "http://localhost:4170/register",
          {
            username,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        if (response.data.status === "Success") {
          window.location.href = "/LogIn";
        }
      } catch (error) {
        console.error("Error: Unexpected response status");
      }
    }
  };
  return (
    <>
      <div className="relative">
        <div className="flex items-center justify-center bg-gradient-to-r from-[#0F0C29] via-[#302B63] to-[#24243E] h-screen w-screen z-99">
          <div className="bg-[rgba(88,130,193,0.28)] rounded-[40px] w-[500px] h-[550px] border border-solid backdrop-blur-sm">
            <div className="flex flex-col p-12 gap-8 text-white">
              <div className="font-semibold text-xl font-gilroy">Sign Up</div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 text-white text-sm text-black">
                  <div>Username</div>
                  <div>
                    <input
                      placeholder="username"
                      className="bg-white w-full h-12 rounded-xl pl-4 text-black"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-white text-sm">
                  <div>Password</div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="bg-white w-full h-12 rounded-xl pl-4 text-black"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-white text-sm">
                  <div>Confirm Password</div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="bg-white w-full h-12 rounded-xl pl-4 text-black"
                      value={confirmpass}
                      onChange={(e) => setConfirmpass(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button
                class="flex items-center justify-center bg-[#BD0C47] rounded-[10px] w-full h-[50px]"
                onClick={handleRegister}
              >
                Register
              </button>
              <div className="flex items-center justify-center">
                <Link to="/LogIn">
                  <button className="text-gray-300 text-sm">
                    Already have an account ?{" "}
                    <span className="text-white">Go to Login</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
