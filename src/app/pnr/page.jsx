"use client";
import React, { useEffect } from "react";
import { useState } from "react";

const Page = () => {
  const [pnr, setPnr] = useState("");
  const [data, setData] = useState({});

  const handleCheck = async () => {
    try {
      const response = await fetch(
        `https://irctc1.p.rapidapi.com/api/v3/getPNRStatus?pnrNumber=${pnr}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "38f9d13901msh76278628e6cc247p19414djsn2de9ad0d415c",
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
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    console.log("Data", data);
  }, [data]);

  return (
   
    <div className="flex flex-col items-center mt-28">
  <div className="mb-4">
    <input
      className="border-2 border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="search"
      value={pnr}
      onChange={(e) => setPnr(e.target.value)}
      placeholder="Enter PNR"
    />
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md ml-2 transition-colors duration-300"
      onClick={handleCheck}
    >
      Check
    </button>
  </div>
  {data.data && (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">PNR Status</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-gray-600 font-semibold">PNR:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.Pnr}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Train No:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.TrainNo}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Train Name:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.TrainName}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Date of Journey:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.Doj}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Booking Date:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.BookingDate}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Quota:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.Quota}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Destination Date of Journey:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.DestinationDoj}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Source Date of Journey:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.SourceDoj}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">From:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.From}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">To:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.To}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Reservation Upto:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.ReservationUpto}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Boarding Point:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.BoardingPoint}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Class:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.Class}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Chart Prepared:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">
            {data.data.ChartPrepared ? "Yes" : "No"}
          </p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Boarding Station Name:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.BoardingStationName}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Train Status:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.TrainStatus}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Train Cancelled:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">
            {data.data.TrainCancelledFlag ? "Yes" : "No"}
          </p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Reservation Upto Name:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.ReservationUptoName}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Passenger Count:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.PassengerCount}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Departure Time:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.DepartureTime}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Arrival Time:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.ArrivalTime}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Expected Platform No:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.ExpectedPlatformNo}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Booking Fare:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.BookingFare}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Ticket Fare:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.TicketFare}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Coach Position:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.CoachPosition}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Rating:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.Rating}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Food Rating:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.FoodRating}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Punctuality Rating:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.PunctualityRating}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Cleanliness Rating:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.CleanlinessRating}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Source Name:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.SourceName}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Destination Name:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.DestinationName}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Duration:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.Duration}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Rating Count:</p>
          <p className="text-lg font-bold text-gray-800 mb-4">{data.data.RatingCount}</p>
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