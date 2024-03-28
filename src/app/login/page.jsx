"use client";
import React from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSidebarStore } from "../store/zustand";
import app from "../../../lib/firebaseconfig";
const Page = () => {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const user = auth.currentUser;
  const setUserData = useSidebarStore((state) => state.setUserData);
  const userData = useSidebarStore((state) => state.userdata);
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  onAuthStateChanged(auth, async () => {
    if (user) {
      const q = await checkIfUserExists(user.email);
      console.log(q);
      if (user && q) {
        if (!userData) {
          const userdata = doc(db, "users", user.email);
          const q1 = await getDoc(userdata);
          setUserData(q1.data());
          // setUserData();
        }
        router.push("/profile");
      }
    }
  });
  const checkIfUserExists = async (email) => {
    try {
      const d = doc(db, "users", email);
      const q = await getDoc(d);
      return q.exists();
    } catch (e) {
      console.log(e);
    }
  };
  const handlelogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // User is already registered, proceed with login
      const email = result.user.email;
      const q = await checkIfUserExists(email);
      console.log(result.user);
      if (!q) {
        // Redirect to the signup screen
        router.push("/signup");
        return;
      }
      setPersistence(auth, browserLocalPersistence);
      toast.success("Logged In");
      const userdata = doc(db, "users", email);
      const q1 = await getDoc(userdata);
      setUserData(q1.data());
      // Redirect to the feed screen after a delay
      setTimeout(() => {
        router.push("/profile");
      }, 1000);
    } catch (error) {
      // Handle login errors
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(`Error Logging In ${errorCode} : ${errorMessage}`);
    }
  };
  return (
    <div>
      <Toaster />
      <div className="ok mt-20">
        <button onClick={handlelogin}>Sign in With Google</button>
      </div>
    </div>
  );
};

export default Page;
