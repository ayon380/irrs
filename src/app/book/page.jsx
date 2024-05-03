"use client";
import React from "react";
import toast from "react-hot-toast";
import { ToastBar } from "react-hot-toast";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../../lib/firebaseconfig";
const Summary = dynamic(() => import("../../components/Summary"), {
  ssr: false,
});
const Page = () => {
  const tdata = {
    status: true,
    message: "Success",
    timestamp: 1680379328922,
    data: [
      {
        train_number: "22221",
        train_name: "MUMBAI CSMT - HAZRAT NIZAMUDDIN Rajdhani Express",
        run_days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        train_src: "CSMT",
        train_dstn: "NZM",
        from_std: "16:00",
        from_sta: "16:00",
        local_train_from_sta: 960,
        to_sta: "09:55",
        to_std: "09:55",
        from_day: 0,
        to_day: 1,
        d_day: 0,
        from: "CSMT",
        to: "NZM",
        from_station_name: "MUMBAI CSMT",
        to_station_name: "DELHI HAZRAT NIZAMUDDIN",
        duration: "17:55",
        special_train: false,
        train_type: "RAJ",
        train_date: "26-05-2023",
        class_type: ["3A", "2A", "1A"],
      },
      {
        train_number: "12951",
        train_name: "MUMBAI CENTRAL - NEW DELHI Rajdhani Express",
        run_days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        train_src: "MMCT",
        train_dstn: "NDLS",
        from_std: "17:24",
        from_sta: "17:22",
        local_train_from_sta: 1042,
        to_sta: "08:32",
        to_std: "08:32",
        from_day: 0,
        to_day: 1,
        d_day: 0,
        from: "BVI",
        to: "NDLS",
        from_station_name: "BORIVALI",
        to_station_name: "NEW DELHI",
        duration: "15:8",
        special_train: false,
        train_type: "RAJ",
        train_date: "26-05-2023",
        class_type: ["3A", "2A", "1A"],
      },
      {
        train_number: "12953",
        train_name:
          "MUMBAI CENTRAL - HAZRAT NIZAMUDDIN August Kranti Rajdhani Exp",
        run_days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        train_src: "MMCT",
        train_dstn: "NZM",
        from_std: "17:35",
        from_sta: "17:33",
        local_train_from_sta: 1053,
        to_sta: "09:43",
        to_std: "09:43",
        from_day: 0,
        to_day: 1,
        d_day: 0,
        from: "BVI",
        to: "NZM",
        from_station_name: "BORIVALI",
        to_station_name: "DELHI HAZRAT NIZAMUDDIN",
        duration: "16:8",
        special_train: false,
        train_type: "RAJ",
        train_date: "26-05-2023",
        class_type: ["3A", "2A", "1A"],
      },
      {
        train_number: "12925",
        train_name: "MUMBAI BANDRA T - AMRITSAR Paschim SF Express",
        run_days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        train_src: "MMCT",
        train_dstn: "ASR",
        from_std: "11:58",
        from_sta: "11:55",
        local_train_from_sta: 715,
        to_sta: "10:40",
        to_std: "11:05",
        from_day: 0,
        to_day: 1,
        d_day: 0,
        from: "BVI",
        to: "NDLS",
        from_station_name: "BORIVALI",
        to_station_name: "NEW DELHI",
        duration: "22:42",
        special_train: false,
        train_type: "SUF",
        train_date: "26-05-2023",
        class_type: ["SL", "3A", "2A", "1A"],
      },
      {
        train_number: "12903",
        train_name: "MUMBAI CENTRAL - AMRITSAR Golden Temple SF Mail",
        run_days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        train_src: "MMCT",
        train_dstn: "ASR",
        from_std: "19:18",
        from_sta: "19:15",
        local_train_from_sta: 1155,
        to_sta: "13:50",
        to_std: "14:05",
        from_day: 0,
        to_day: 1,
        d_day: 0,
        from: "BVI",
        to: "NZM",
        from_station_name: "BORIVALI",
        to_station_name: "DELHI HAZRAT NIZAMUDDIN",
        duration: "18:32",
        special_train: false,
        train_type: "SUF",
        train_date: "26-05-2023",
        class_type: ["SL", "3A", "2A", "1A"],
      },
      {
        train_number: "12137",
        train_name: "MUMBAI CSMT - FIROZPUR CANTT SF Punjab Mail",
        run_days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        train_src: "CSMT",
        train_dstn: "FZR",
        from_std: "19:50",
        from_sta: "19:47",
        local_train_from_sta: 1187,
        to_sta: "21:25",
        to_std: "21:40",
        from_day: 0,
        to_day: 1,
        d_day: 0,
        from: "DR",
        to: "NDLS",
        from_station_name: "MUMBAI DADAR CENTRAL",
        to_station_name: "NEW DELHI",
        duration: "25:35",
        special_train: false,
        train_type: "SUF",
        train_date: "26-05-2023",
        class_type: ["SL", "3A", "2A", "1A"],
      },
      {
        train_number: "22209",
        train_name: "MUMBAI CENTRAL - NEW DELHI AC Duronto Exp",
        run_days: ["Mon", "Fri"],
        train_src: "MMCT",
        train_dstn: "NDLS",
        from_std: "23:00",
        from_sta: "23:00",
        local_train_from_sta: 1380,
        to_sta: "15:55",
        to_std: "15:55",
        from_day: 0,
        to_day: 1,
        d_day: 0,
        from: "MMCT",
        to: "NDLS",
        from_station_name: "MUMBAI CENTRAL",
        to_station_name: "NEW DELHI",
        duration: "16:55",
        special_train: false,
        train_type: "DRNT",
        train_date: "26-05-2023",
        class_type: ["3A", "2A", "1A"],
      },
      {
        train_number: "12471",
        train_name: "MUMBAI BANDRA T - SMVD KATRA Swaraj SF Express",
        run_days: ["Sun", "Mon", "Thu", "Fri"],
        train_src: "BDTS",
        train_dstn: "SVDK",
        from_std: "11:26",
        from_sta: "11:23",
        local_train_from_sta: 683,
        to_sta: "05:25",
        to_std: "05:40",
        from_day: 0,
        to_day: 1,
        d_day: 0,
        from: "BVI",
        to: "NDLS",
        from_station_name: "BORIVALI",
        to_station_name: "NEW DELHI",
        duration: "17:59",
        special_train: false,
        train_type: "SUF",
        train_date: "26-05-2023",
        class_type: ["SL", "3A", "2A", "1A"],
      },
      {
        train_number: "12247",
        train_name: "MUMBAI BANDRA T - HAZRAT NIZAMUDDIN Yuva Exp",
        run_days: ["Fri"],
        train_src: "BDTS",
        train_dstn: "NZM",
        from_std: "17:30",
        from_sta: "17:30",
        local_train_from_sta: 1050,
        to_sta: "10:15",
        to_std: "10:15",
        from_day: 0,
        to_day: 1,
        d_day: 0,
        from: "BDTS",
        to: "NZM",
        from_station_name: "MUMBAI BANDRA TERMINUS",
        to_station_name: "DELHI HAZRAT NIZAMUDDIN",
        duration: "16:45",
        special_train: false,
        train_type: "SUF",
        train_date: "26-05-2023",
        class_type: ["CC", "3A"],
      },
      {
        train_number: "19019",
        train_name: "MUMBAI BANDRA T - HARIDWAR Express",
        run_days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        train_src: "BDTS",
        train_dstn: "HW",
        from_std: "00:35",
        from_sta: "00:30",
        local_train_from_sta: 30,
        to_sta: "02:30",
        to_std: "02:45",
        from_day: 0,
        to_day: 1,
        d_day: 0,
        from: "BVI",
        to: "NZM",
        from_station_name: "BORIVALI",
        to_station_name: "DELHI HAZRAT NIZAMUDDIN",
        duration: "25:55",
        special_train: false,
        train_type: "MEX",
        train_date: "26-05-2023",
        class_type: ["SL", "3A", "2A", "1A"],
      },
      {
        train_number: "11057",
        train_name: "MUMBAI CSMT - AMRITSAR Express",
        run_days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        train_src: "CSMT",
        train_dstn: "ASR",
        from_std: "00:05",
        from_sta: "00:02",
        local_train_from_sta: 1442,
        to_sta: "03:40",
        to_std: "03:55",
        from_day: 1,
        to_day: 2,
        d_day: 1,
        from: "TNA",
        to: "NDLS",
        from_station_name: "THANE",
        to_station_name: "NEW DELHI",
        duration: "27:35",
        special_train: false,
        train_type: "MEX",
        train_date: "26-05-2023",
        class_type: ["SL", "3A", "2A"],
      },
      {
        train_number: "12216",
        train_name: "MUMBAI BANDRA T - DELHI SARAI ROHILLA Garib Rath Exp",
        run_days: ["Tue", "Wed", "Fri", "Sun"],
        train_src: "BDTS",
        train_dstn: "DEE",
        from_std: "12:24",
        from_sta: "12:21",
        local_train_from_sta: 741,
        to_sta: "11:00",
        to_std: "11:00",
        from_day: 0,
        to_day: 1,
        d_day: 0,
        from: "BVI",
        to: "DEE",
        from_station_name: "BORIVALI",
        to_station_name: "DELHI SARAI ROHILLA",
        duration: "22:36",
        special_train: false,
        train_type: "GBR",
        train_date: "26-05-2023",
        class_type: ["3A"],
      },
      {
        train_number: "12617",
        train_name: "ERNAKULAM - HAZRAT NIZAMUDDIN Mangala Lakshadweep SF Exp",
        run_days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        train_src: "ERS",
        train_dstn: "NZM",
        from_std: "13:30",
        from_sta: "13:27",
        local_train_from_sta: 2247,
        to_sta: "13:20",
        to_std: "13:20",
        from_day: 1,
        to_day: 2,
        d_day: 1,
        from: "KYN",
        to: "NZM",
        from_station_name: "KALYAN JN",
        to_station_name: "DELHI HAZRAT NIZAMUDDIN",
        duration: "23:50",
        special_train: false,
        train_type: "SUF",
        train_date: "26-05-2023",
        class_type: ["SL", "3A", "2A"],
      },
      {
        train_number: "12263",
        train_name: "PUNE - HAZRAT NIZAMUDDIN AC Duronto Express",
        run_days: ["Tue", "Fri"],
        train_src: "PUNE",
        train_dstn: "NZM",
        from_std: "14:25",
        from_sta: "14:20",
        local_train_from_sta: 860,
        to_sta: "06:45",
        to_std: "06:45",
        from_day: 0,
        to_day: 1,
        d_day: 0,
        from: "BSR",
        to: "NZM",
        from_station_name: "VASAI ROAD",
        to_station_name: "DELHI HAZRAT NIZAMUDDIN",
        duration: "16:20",
        special_train: false,
        train_type: "DRNT",
        train_date: "26-05-2023",
        class_type: ["3A", "2A", "1A"],
      },
      {
        train_number: "12431",
        train_name: "TRIVANDRUM CENTRAL - HAZRAT NIZAMUDDIN Rajdhani Exp",
        run_days: ["Wed", "Fri", "Sat"],
        train_src: "TVC",
        train_dstn: "NZM",
        from_std: "18:05",
        from_sta: "18:00",
        local_train_from_sta: 2520,
        to_sta: "12:30",
        to_std: "12:30",
        from_day: 1,
        to_day: 2,
        d_day: 1,
        from: "PNVL",
        to: "NZM",
        from_station_name: "PANVEL",
        to_station_name: "DELHI HAZRAT NIZAMUDDIN",
        duration: "18:25",
        special_train: false,
        train_type: "RAJ",
        train_date: "26-05-2023",
        class_type: ["3A", "2A", "1A"],
      },
    ],
  };
  const auth = getAuth(app);
  const user = auth.currentUser;
  const router = useRouter();
  const [fromst, setfromst] = React.useState("NZM");
  const [tost, settost] = React.useState("CSMT");
  const [doj, setdoj] = React.useState(
    new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]
  );
  const [trainData, settraindata] = React.useState(tdata);
  const [train, settrain] = React.useState({});
  const [classtype, setclasstype] = React.useState("");
  const [opensummary, setopensummary] = React.useState(false);
  const apikey = process.env.NEXT_PUBLIC_API;
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in");
      } else {
        router.push("/login");
      }
    });

    return unsubscribe; // Clean up subscription on unmount
  }, [auth, router]);

  const handleSearch = async () => {
    try {
      console.log("searchingg");
      if (fromst == "" || tost == "" || doj == "") {
        alert("Fill all the fields");
        return;
      }
      console.log(doj);
      const response = await fetch(
        `https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?fromStationCode=${fromst}&toStationCode=${tost}&dateOfJourney=${doj}`,
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
      const data = await response.json();
      console.log(data);
      toast(data.message);
      settraindata(data);
      if (data.data.length == 0) {
        toast.error("No Trains Found");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const checkavailability = async (trainno, classtype) => {
    try {
      console.log(trainno + classtype);
      // const response = await fetch(
      //   `https://irctc1.p.rapidapi.com/api/v1/checkSeatAvailability?classType=${classtype}&fromStationCode=${fromst}&quota=GN&toStationCode=${tost}&trainNo=${trainno}&date=${doj}`,
      //   {
      //     method: "GET",
      //     headers: {
      //       "X-RapidAPI-Key": apikey,
      //       "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
      //     },
      //   }
      // );

      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }
      // const data = await response.json();
      // console.log(data);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleBooking = (train) => {
    if (classtype == "") {
      alert("Select a class type");
      return;
    }
    settrain(train);
    setopensummary(true);
  };
  return (
    <div className=" mt-10 mx-1">
      {opensummary && (
        <Summary
          fromst={fromst}
          tost={tost}
          doj={doj}
          train={train}
          classtype={classtype}
          setopensummary={setopensummary}
        />
      )}
      <div className=" min-h-screen py-16">
        {/* <ToastBar /> */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl w-full">
            <h1 className="text-3xl font-bold text-indigo-700 mb-4">
              Search Trains
            </h1>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="from-station"
                  className="block font-semibold text-gray-700 mb-2"
                >
                  From Station
                </label>
                <input
                  type="text"
                  id="from-station"
                  value={fromst}
                  onChange={(e) => setfromst(e.target.value.toUpperCase())}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="to-station"
                  className="block font-semibold text-gray-700 mb-2"
                >
                  To Station
                </label>
                <input
                  type="text"
                  id="to-station"
                  value={tost}
                  onChange={(e) => settost(e.target.value.toUpperCase())}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="doj"
                  className="block font-semibold text-gray-700 mb-2"
                >
                  Date of Journey
                </label>
                <input
                  type="date"
                  id="doj"
                  value={doj}
                  onChange={(e) => setdoj(e.target.value)}
                  min={
                    new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
                      .toISOString()
                      .split("T")[0]
                  }
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <button
              className="bg-indigo-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={handleSearch}
            >
              Search Trains
            </button>
          </div>
        </div>

        {trainData && (
          <div className="max-w-4xl mx-auto ">
            <h2 className="text-2xl font-bold text-white mb-4">Train Data</h2>
            <ul className="space-y-4">
              {trainData.data.map((train) => (
                <li
                  key={train.train_number}
                  className="backdrop-filter backdrop-blur-3xl bg-white bg-opacity-75 rounded-lg p-4 shadow-md"
                >
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                    {train.train_name}
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <span className="font-bold text-gray-700 mr-2">
                        Train Number:
                      </span>
                      {train.train_number}
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold text-gray-700 mr-2">
                        Run Days:
                      </span>
                      {train.run_days.join(", ")}
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold text-gray-700 mr-2">
                        Source:
                      </span>
                      {train.from_station_name}
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold text-gray-700 mr-2">
                        Destination:
                      </span>
                      {train.to_station_name}
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold text-gray-700 mr-2">
                        Departure:
                      </span>
                      {train.from_std}
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold text-gray-700 mr-2">
                        Arrival:
                      </span>
                      {train.to_std}
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold text-gray-700 mr-2">
                        Duration:
                      </span>
                      {train.duration}
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold text-gray-700 mr-2">
                        Classes:
                      </span>
                      {train.class_type.join(", ")}
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {train.class_type.map((classType) => (
                        <button
                          key={classType}
                          className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                          onClick={() => {
                            checkavailability(train.train_number, classType);
                            setclasstype(classType);
                          }}
                        >
                          Select {classType} Class
                        </button>
                      ))}
                    </div>
                    <button
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      onClick={() => handleBooking(train)}
                    >
                      Book {classtype}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
