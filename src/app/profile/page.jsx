"use client";
import React, { use, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import app from "../../../lib/firebaseconfig";
import { useSidebarStore } from "../store/zustand";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { motion } from "framer-motion";

const Page = () => {
  const router = useRouter();
  const auth = getAuth(app);
  const user = auth.currentUser;
  const db = getFirestore(app);
  const setUserData = useSidebarStore((state) => state.setUserData);
  const userData = useSidebarStore((state) => state.userdata);
  const [tickets, setTickets] = useState([]);
  const [expandedTicket, setExpandedTicket] = useState(null);

  onAuthStateChanged(auth, async () => {
    if (!user) {
      console.log("user not logged in");
      router.push("/login");
    }
  });

  const getTickets = async () => {
    try {
      if (user) {
        const docRef = doc(db, "users", user.email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUserData(data);
        }
        console.log(userData);
        userData.tickets.map(async (ticket) => {
          const re = doc(db, "tickets", ticket.toString());
          const res = await getDoc(re);
          console.log(res.data());
          setTickets((prev) => [...prev, res.data()]);
        });
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
  return (
    <div
      className="min-h-screen py-20 px-4 bg-gradient-to-br from-indigo-500 to-purple-700 text-white"
      style={{
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          {userData && (
            <div className="text-2xl font-bold">{userData.name}</div>
          )}
          <button
            onClick={handlelogout}
            className="bg-white text-purple-700 hover:text-white hover:bg-purple-500 font-bold py-2 px-4 rounded transition duration-300"
          >
            Logout
          </button>
        </div>
        <div className="text-3xl font-bold mb-8">Tickets</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tickets.map((ticket) => (
            <motion.div
              key={ticket.Pnr}
              className="bg-white bg-opacity-10 rounded-lg shadow-lg p-6 cursor-pointer"
              onClick={() => toggleTicketExpand(ticket.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="font-bold text-lg">PNR: {ticket.Pnr}</div>
                  <div className="text-sm">Train: {ticket.TrainName}</div>
                </div>
                <div className="text-2xl">
                  {expandedTicket === ticket.id ? "-" : "+"}
                </div>
              </div>
              {expandedTicket === ticket.id && (
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
                      <div>
                        <span className="font-bold">Gender:</span>{" "}
                        {passenger.gender}
                      </div>
                      <div>
                        <span className="font-bold">Coach Number:</span>{" "}
                        {passenger.coachNumber}
                      </div>
                      <div>
                        <span className="font-bold">Seat Number:</span>{" "}
                        {passenger.seatNumber}
                      </div>
                      <div>
                        <span className="font-bold">Berth:</span>{" "}
                        {passenger.berth}
                      </div>
                    </div>
                  ))}
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
