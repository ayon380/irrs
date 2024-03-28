"use client";
import React from "react";
import { getAuth, onAuthStateChanged ,signOut} from "firebase/auth";
import { useRouter } from "next/navigation";
import app from "../../../lib/firebaseconfig";
import { useSidebarStore } from "../store/zustand";
const Page = () => {
  const router = useRouter();
  const auth = getAuth(app);
  const user = auth.currentUser;
  const setUserData = useSidebarStore((state) => state.setUserData);
  const userData = useSidebarStore((state) => state.userdata);
  onAuthStateChanged(auth, async () => {
    if (!user) {
      router.push("/login");
    }
  });
  const handlelogout = async () => {
    try {
      await auth.signOut();
      setUserData(null);
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="mt-20">
      Page
      {userData && <div>{userData.name}</div>}
      <button onClick={handlelogout}>Logout</button>
    </div>
  );
};

export default Page;
