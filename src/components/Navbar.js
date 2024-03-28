"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSidebarStore } from "@/app/store/zustand";
const Navbar = () => {
  const router = useRouter();
  const userdata = useSidebarStore((state) => state.userdata);
  return (
    <div className="fixed w-screen top-0 z-20 ">
      <div className="flex lg:mx-96 justify-evenly shadow-2xl border-2 border-gray-400 backdrop-filter backdrop-blur-3xl bg-white bg-opacity-50 py-2 my-2 rounded-full px-5">
        <button
          className="w text-xl font-bold"
          onClick={() => router.push("/")}
        >
          IRRS
        </button>
        <button className="book " onClick={() => router.push("/book")}>
          Book Ticket
        </button>
        <button className="pnt" onClick={() => router.push("/pnr")}>
          PNR Status
        </button>

        {userdata ? <><button className="profile" onClick={() => router.push("/profile")}><Image className="w-7 h-7 rounded-full" src={userdata.pfp} height={50} width={50} alt="Profile Pic" /> </button></> : <button className="login " onClick={() => router.push("/login")}>
          Login
        </button>}
      </div>
    </div>
  );
};

export default Navbar;
