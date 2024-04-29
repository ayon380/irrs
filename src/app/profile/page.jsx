"use client";
import React, { use, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import app from "../../../lib/firebaseconfig";
import { useSidebarStore } from "../store/zustand";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  arrayRemove,
} from "firebase/firestore";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { set } from "firebase/database";
const Page = () => {
  const router = useRouter();
  const auth = getAuth(app);
  const user = auth.currentUser;
  const db = getFirestore(app);
  const setUserData = useSidebarStore((state) => state.setUserData);
  const userData = useSidebarStore((state) => state.userdata);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedTicket, setExpandedTicket] = useState(-1);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async () => {
      if (!user) {
        console.log("user not logged in");
        router.push("/login");
      }
    });
    return unSubscribe;
  }, [auth, router, user]);

  const getTickets = async () => {
    try {
      if (user) {
        setLoading(true);
        const docRef = doc(db, "users", user.email);
        let data = {};
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          data = docSnap.data();
          setUserData(data);
        }
        // console.log(userData);
        const ticketPromises = data.tickets.map(async (ticket) => {
          const re = doc(db, "tickets", ticket.toString());
          const res = await getDoc(re);
          return res.data();
        });
        const ticketData = await Promise.all(ticketPromises);
        ticketData.reverse();
        setTickets(ticketData);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handlelogout = async () => {
    try {
      await auth.signOut();
      setUserData(null);
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTickets();
  }, []);

  const toggleTicketExpand = (ticketId) => {
    setExpandedTicket(expandedTicket === ticketId ? null : ticketId);
  };
  useEffect(() => {
    console.log(tickets);
  }, [tickets]);
  const handleCancel = async (pnr) => {
    try {
      // const docRef = doc(db, "tickets", pnr);
      // await docRef.delet
      const userDocRef = doc(db, "users", userData.email);
      await updateDoc(userDocRef, {
        tickets: arrayRemove(pnr),
      });
      toast.success("Ticket Cancelled Successfully");
      getTickets();
    } catch (e) {
      toast.error("Error Cancelling Ticket");
      console.log(e);
    }
  };

  return (
    <div
      className="min-h-screen py-20 px-4 text-white"
      style={{
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          {userData && (
            <>
              <div className="text-2xl font-bold">{userData.name}</div>

              <button
                onClick={handlelogout}
                className="bg-white text-purple-700 hover:text-white hover:bg-purple-500 font-bold py-2 px-4 rounded transition duration-300"
              >
                Logout
              </button>
            </>
          )}
        </div>
        <div className="text-3xl font-bold mb-8">Tickets</div>
        {loading && <div>Loading Tickets...</div>}
        {tickets.length === 0 && !loading && (
          <div>No Tickets Found. Book Tickets to see them here.</div>
        )}
        <div className="">
          {tickets.map((ticket) => (
            <motion.div
              key={ticket.Pnr}
              className="bg-white mb-5 bg-opacity-10 rounded-lg shadow-lg p-6 cursor-pointer"
              onClick={() => toggleTicketExpand(ticket.Pnr)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="font-bold text-lg">PNR: {ticket.Pnr}</div>
                  <div className="text-sm">Train: {ticket.TrainName}</div>
                  <div className="booktime">
                    Booking Time:{" "}
                    {ticket.BookingDate
                      ? new Date(ticket.BookingDate).toLocaleString()
                      : ""}
                  </div>
                </div>
                <div className="text-2xl">
                  {expandedTicket === ticket.Pnr ? "-" : "+"}
                </div>
              </div>
              {expandedTicket === ticket.Pnr && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  <div className="mb-2">
                    <span className="font-bold">From:</span> {ticket.From}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">To:</span> {ticket.To}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Date of Journey:</span>{" "}
                    {ticket.Doj}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Departure Time:</span>{" "}
                    {ticket.DepartureTime}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Arrival Time:</span>{" "}
                    {ticket.ArrivalTime}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Duration:</span>{" "}
                    {ticket.Duration}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Booking Fare:</span>{" "}
                    {ticket.BookingFare}
                  </div>
                  <div className="font-bold mb-2">Passenger Status:</div>
                  {ticket.PassengerStatus.map((passenger, index) => (
                    <div key={index} className="ml-4 mb-2">
                      <div>
                        <span className="font-bold">Name:</span>{" "}
                        {passenger.name}
                      </div>
                      <div>
                        <span className="font-bold">Age:</span> {passenger.age}
                      </div>
                      {/* <div>
                        <span className="font-bold">Gender:</span>{" "}
                        {passenger.gender}
                      </div> */}
                      <div>
                        <span className="font-bold">Coach Number:</span>{" "}
                        {passenger.Coach}
                      </div>
                      <div>
                        <span className="font-bold">Seat Number:</span>{" "}
                        {passenger.Berth}
                      </div>
                      <div>
                        <span className="font-bold">Berth:</span>{" "}
                        {passenger.BookingBerthCode}
                      </div>
                    </div>
                  ))}
                  {ticket.Doj > new Date().toISOString() && (
                    <button
                      className="bg-purple-500 text-white py-2 px-4 rounded mt-4"
                      onClick={() => handleCancel(ticket.Pnr)}
                    >
                      Cancel Ticket
                    </button>
                  )}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
