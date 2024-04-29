"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { addDoc, doc, getFirestore, setDoc } from "firebase/firestore";
import app from "../../../lib/firebaseconfig";
import { getAuth } from "firebase/auth";
import { useSidebarStore } from "../store/zustand";
import { useRouter } from "next/navigation";
const Page = () => {
  const [phone, setPhone] = useState("");
  const setUserData = useSidebarStore((state) => state.setUserData);
  const [dob, setDob] = useState("");
  const db = getFirestore(app);
  const auth = getAuth(app);
  const router = useRouter();
  const user = auth.currentUser;
  const [name, setName] = useState();
  useEffect(() => {
    if (user) {
      setName(user.displayName);
    }
  }, [user]);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name === "" || phone === "" || dob === "") {
        toast.error("Please fill all the fields");
        return;
      }
      console.log(user);
      const docRef = doc(db, "users", user.email);
      const d = await setDoc(docRef, {
        name: name,
        // email: email,
        phone: phone,
        dob: dob,
        pfp: user.photoURL,
        tickets: [],
      });
      // Here you can perform signup logic with the form data
      toast.success("Signup successful");
      console.log("Name:", name);
      // console.log("Email:", email);
      console.log("Phone:", phone);
      console.log("Date of Birth:", dob);
      setUserData({
        name: name,
        email: user.email,
        phone: phone,
        dob: dob,
        pfp: user.photoURL,
        tickets: [],
      });
      router.push("/profile");
    } catch (e) {
      console.log(e);
      toast.error("Signup failed");
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <Toaster />
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Signup</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
          <div>
            <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={dob}
              onChange={handleDobChange}
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
