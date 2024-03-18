"use client"
import React from "react";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
  return (
    <div className="fixed w-screen top-0 z-20 ">
      <div className="flex lg:mx-96 justify-evenly shadow-2xl border-2 border-gray-400 backdrop-filter backdrop-blur-3xl bg-white bg-opacity-50 py-2 my-2 rounded-full px-5">
        <div className="w text-xl font-bold">IRRS</div>
        <div className="book ">Book Ticket</div>
        <div className="live">Train Live Status</div>
        <button className="pnt" onClick={() => router.push("/pnr")}>
          PNR Status
        </button>
        <div className="login ">Login</div>
        <div className="signup">Signup</div>
      </div>
    </div>
  );
};

export default Navbar;
