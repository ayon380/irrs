"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { Firestore, getFirestore, getDoc, doc } from "firebase/firestore";
import app from "../../../lib/firebaseconfig";
import { getAuth } from "firebase/auth";
import { get } from "http";
const Page = () => {
  const d = {
    status: true,
    message: "Success",
    timestamp: 1711690057934,
    data: {
      Pnr: "6733666271",
      TrainNo: "20889",
      TrainName: "TPTY HUMSAFR EX",
      Doj: "30-03-2024",
      BookingDate: "25-03-2024",
      Quota: "GN",
      DestinationDoj: "31-03-2024",
      SourceDoj: "30-03-2024",
      From: "HWH",
      To: "BZA",
      ReservationUpto: "BZA",
      BoardingPoint: "HWH",
      Class: "3A",
      ChartPrepared: false,
      BoardingStationName: "Kolkata Howrah Junction",
      TrainStatus: "",
      TrainCancelledFlag: false,
      ReservationUptoName: "Vijayawada Junction",
      PassengerCount: 1,
      PassengerStatus: [
        {
          ReferenceId: null,
          Pnr: null,
          Number: 1,
          Prediction: null,
          PredictionPercentage: "100",
          ConfirmTktStatus: "Confirm",
          Coach: "B5",
          Berth: 53,
          BookingStatus: "CNF B5 53",
          CurrentStatus: "CNF",
          CoachPosition: null,
          BookingBerthNo: "53",
          BookingCoachId: "B5",
          BookingStatusNew: "CNF",
          BookingStatusIndex: "0",
          CurrentBerthNo: "",
          CurrentCoachId: "",
          BookingBerthCode: "MB",
          CurrentBerthCode: null,
          CurrentStatusNew: "CNF",
          CurrentStatusIndex: "0",
        },
      ],
      DepartureTime: "12:40",
      ArrivalTime: "07:30",
      ExpectedPlatformNo: "21",
      BookingFare: "1740",
      TicketFare: "1740",
      CoachPosition:
        "L SLR B1 B2 B3 B4 B5 B6 PC B7 B8 B9 B10 B11 B12 B13 B14 B15 B16 B17 B18 VSKP",
      Rating: 4.3,
      FoodRating: 4,
      PunctualityRating: 4.2,
      CleanlinessRating: 4.2,
      SourceName: "KOLKATA",
      DestinationName: "Vijayawada",
      Duration: "18:50",
      RatingCount: 258,
      HasPantry: true,
      GroupingId: null,
      OptVikalp: false,
      VikalpData: "",
      VikalpTransferred: false,
      VikalpTransferredMessage: "",
      FlightBannerUrl:
        "https://cdn.confirmtkt.com/img/banner/home_screen_flight_banner.png",
      FromDetails: {
        category: "A1",
        division: "HWH",
        latitude: "22.5834126",
        longitude: "88.3429024",
        state: "WEST BENGAL",
        stationCode: "HWH",
        stationName: "HOWRAH",
      },
      ToDetails: {
        category: "A1",
        division: "BZA",
        latitude: "16.5186249",
        longitude: "80.6198977",
        state: "ANDHRA PRADESH",
        stationCode: "BZA",
        stationName: "VIJAYAWADA",
      },
      BoardingPointDetails: {
        category: "A1",
        division: "HWH",
        latitude: "22.5834126",
        longitude: "88.3429024",
        state: "WEST BENGAL",
        stationCode: "HWH",
        stationName: "HOWRAH",
      },
      ReservationUptoDetails: {
        category: "A1",
        division: "BZA",
        latitude: "16.5186249",
        longitude: "80.6198977",
        state: "ANDHRA PRADESH",
        stationCode: "BZA",
        stationName: "VIJAYAWADA",
      },
    },
  };
  const [pnr, setPnr] = useState("");
  const [data, setData] = useState(d);
  const [checking, setChecking] = useState(false);
  const apikey = process.env.NEXT_PUBLIC_API;
  const user = getAuth(app).currentUser;
  const db = getFirestore(app);
  const handleCheck = async () => {
    try {
      const ttdoc = await getDoc(doc(db, "tickets", pnr));
      if (ttdoc.exists()) {
        const tdata = {
          status: true,
          message: "Success",
          timestamp: 1711690057934,
          data: ttdoc.data(),
        };
        setData(tdata);
        setChecking(false);
        return;
      }
      const response = await fetch(
        `https://irctc1.p.rapidapi.com/api/v3/getPNRStatus?pnrNumber=${pnr}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": apikey,
            "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const dat = await response.json();
      console.log(dat);
      setData(dat);
      setChecking(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    console.log("Data", data);
  }, [data]);

  return (
    <div className="flex flex-col items-center pt-28 h-screen max-h-max w-screen gradient-bg overflow-y-auto">
      <div className="headinfg"></div>
      <div className="mb-4">
        <input
          className="border-2 border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="search"
          value={pnr}
          onChange={(e) => setPnr(e.target.value)}
          placeholder="Enter PNR"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleCheck();
              setChecking(true);
            }
          }}
        />
        <button
          disabled={checking}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md ml-2 transition-colors duration-300"
          onClick={() => {
            handleCheck();
            setChecking(true);
          }}
        >
          {checking ? "Checking..." : "Check"}
        </button>
      </div>
      {checking && <p className="text-white">Checking...</p>}
      {data.data && (
        <div className="bg-white m-1 p-8 rounded-lg bg-opacity-65 backdrop-filter backdrop-blur-3xl shadow-md max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">PNR Status</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 font-semibold">PNR:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.Pnr}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Train No:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.TrainNo}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Train Name:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.TrainName}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Date of Journey:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.Doj}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Booking Date:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.BookingDate}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Quota:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.Quota}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">
                Destination Date of Journey:
              </p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.DestinationDoj}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">
                Source Date of Journey:
              </p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.SourceDoj}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">From:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.From}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">To:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.To}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Reservation Upto:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.ReservationUpto}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Boarding Point:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.BoardingPoint}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Class:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.Class}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Chart Prepared:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.ChartPrepared ? "Yes" : "No"}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">
                Boarding Station Name:
              </p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.BoardingStationName}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Train Status:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.TrainStatus}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Train Cancelled:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.TrainCancelledFlag ? "Yes" : "No"}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">
                Reservation Upto Name:
              </p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.ReservationUptoName}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Passenger Count:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.PassengerCount}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Departure Time:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.DepartureTime}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Arrival Time:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.ArrivalTime}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">
                Expected Platform No:
              </p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.ExpectedPlatformNo}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Booking Fare:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.BookingFare}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Ticket Fare:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.TicketFare}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Coach Position:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.CoachPosition}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Rating:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.Rating}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Food Rating:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.FoodRating}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Punctuality Rating:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.PunctualityRating}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Cleanliness Rating:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.CleanlinessRating}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Source Name:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.SourceName}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Destination Name:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.DestinationName}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Duration:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.Duration}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Rating Count:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.RatingCount}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Has Pantry:</p>
              <p className="text-lg font-bold text-gray-800 mb-4">
                {data.data.HasPantry ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
