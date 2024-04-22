"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSidebarStore } from "@/app/store/zustand";
import { motion } from "framer-motion";
import app from "../../lib/firebaseconfig";
import { getDoc, getFirestore, doc } from "firebase/firestore";
const Navbar = () => {
  const auth = getAuth(app);
  const db = getFirestore(app);
  useEffect(() => {
    async function getUserData() {
      if (auth.currentUser) {
        const user = auth.currentUser;
        const docRef = doc(db, "users", user.email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          useSidebarStore.setState({ userdata: data });
        }
      }
    }
    getUserData();
  }, [auth.currentUser, db]);
  const router = useRouter();
  const userdata = useSidebarStore((state) => state.userdata);

  const navbarVariants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="fixed w-screen top-0  z-20"
      variants={navbarVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="flex mx-5 lg:mx-96 justify-evenly shadow-2xl border-2 border-gray-400 backdrop-filter backdrop-blur-3xl bg-white bg-opacity-50 py-2 my-2 rounded-full px-5"
        variants={navbarVariants}
        initial="initial"
        animate="animate"
      >
        <motion.button
          className="w text-xl font-bold"
          onClick={() => router.push("/")}
          variants={buttonVariants}
          whileHover={{ scale: 1.1 }}
        >
          IRRS
        </motion.button>
        <motion.button
          className="book"
          onClick={() => router.push("/book")}
          variants={buttonVariants}
          whileHover={{ scale: 1.1 }}
        >
          Book Ticket
        </motion.button>
        <motion.button
          className="pnt"
          onClick={() => router.push("/pnr")}
          variants={buttonVariants}
          whileHover={{ scale: 1.1 }}
        >
          PNR Status
        </motion.button>
        {userdata && userdata.pfp ? (
          <>
            <motion.button
              className="profile"
              onClick={() => router.push("/profile")}
              variants={buttonVariants}
              whileHover={{ scale: 1.1 }}
            >
              <Image
                className="w-7 h-7 rounded-full"
                src={userdata.pfp}
                height={50}
                width={50}
                alt="Profile Pic"
              />
            </motion.button>
          </>
        ) : (
          <motion.button
            className="login"
            onClick={() => router.push("/login")}
            variants={buttonVariants}
            whileHover={{ scale: 1.1 }}
          >
            Login
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
