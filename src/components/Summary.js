// import { set } from 'firebase/database';
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { setDoc, doc, updateDoc, arrayUnion, getFirestore } from 'firebase/firestore';
import app from '../../lib/firebaseconfig';
import { getAuth } from 'firebase/auth';
// import Razorpay from 'razorpay';
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}
function generateRandom10DigitNumber() {
  const min = 1000000000; // Minimum 10-digit number
  const max = 9999999999; // Maximum 10-digit number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateSeatInfo(passengerCount, coachType) {
  const coachTypes = {
    '1A': { totalBerths: 24, berths: ['Seat'] },
    '2A': { totalBerths: 54, berths: ['Upper', 'Middle', 'Side Upper', 'Side Lower'] },
    '3A': { totalBerths: 72, berths: ['Side Lower', 'Upper', 'Middle', 'Lower', 'Side Upper', 'Side Lower'] },
    'CC': { totalBerths: 102, berths: ['Aisle', 'Middle', 'Window'] }
    // Add more coach types as needed
  };

  const coachTypeData = coachTypes[coachType];

  if (!coachTypeData) {
    throw new Error('Invalid coach type');
  }

  const totalBerths = coachTypeData.totalBerths;
  const berths = coachTypeData.berths;

  const coachNo = Math.ceil(passengerCount / totalBerths);
  const remainingPassengers = passengerCount % totalBerths;

  let seatNo;
  if (remainingPassengers === 0) {
    seatNo = totalBerths;
  } else {
    seatNo = remainingPassengers;
  }

  let berth;
  if (coachType === '1A') {
    berth = 'Seat';
  } else {
    berth = berths[seatNo - 1]; // Seat number corresponds to berth index
  }

  return {
    coachNo: `B${coachNo}`,
    seatNo: seatNo,
    berth: berth
  };
}


const Summary = ({ fromst, tost, doj, train, classtype }) => {
  const [passengers, setPassengers] = useState([]);
  const [showFinalSummary, setShowFinalSummary] = useState(false);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const user = auth.currentUser;
  // const user = app.auth().currentUser;
  const router = useRouter();
  const handleAddPassenger = () => {
    if (passengers.length < 6) {
      setPassengers([...passengers, { name: '', age: '' }]);
    }
  };

  const handlePassengerChange = (index, field, value) => {
    const updatedPassengers = [...passengers];
    updatedPassengers[index][field] = value;
    setPassengers(updatedPassengers);
  };

  const handleRemovePassenger = (index) => {
    const updatedPassengers = [...passengers];
    updatedPassengers.splice(index, 1);
    setPassengers(updatedPassengers);
  };

  const handleNext = () => {
    setShowFinalSummary(true);
  };
  const generateticket = async () => {
    console.log('generating ticket');
    const Pnr = generateRandom10DigitNumber();
    console.log(Pnr);
    const data = {
      "Pnr": Pnr,
      "TrainNo": train.train_number,
      "TrainName": train.train_name,
      "Doj": doj,
      "BookingDate": Date.now(),
      "Quota": "GN",
      "DestinationDoj": "",
      "SourceDoj": doj,
      "From": fromst,
      "To": tost,
      "ReservationUpto": tost,
      "BoardingPoint": fromst,
      "Class": classtype,
      "can": false,
      "ChartPrepared": false,
      "PassengerCount": 1,
      "PassengerStatus": passengers.map((passenger) => ({
        ...passenger,
        ...generateSeatInfo(passengers.length, classtype)
      })),
      "DepartureTime": train.from_std,
      "ArrivalTime": train.to_std,
      "BookingFare": 500,
      "Duration": train.duration,
    };
    const qwrw = doc(db, "tickets", Pnr.toString());
    await setDoc(qwrw, data);
    const us = doc(db, "users", user.email);
    await updateDoc(us, {
      tickets: arrayUnion(Pnr)
    });
    console.log(data);
  }
  const handlepayment = async (amount) => {
    try {
      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

      if (!res) {
        alert('Razropay failed to load!!')
        return
      }
      const q = await fetch('/api/ordercreate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amount }),
      })
      const response = await (q).json()
      console.log(response.success)
      console.log(response.order)
      if (!response.success) {
        alert('Razorpay failed to load!!')
        return
      }
      const options = {
        "key": process.env.NEXT_PUBLIC_RAZOR_PAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "IRRS",
        "description": "Railway Reservation System",
        "image": "favicon.ico",
        "order_id": response.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async function (response) {
          console.log(response.razorpay_order_id);
          console.log(response.razorpay_payment_id);
          console.log(response.razorpay_signature);
          toast.success('Payment Successful');
          generateticket();
          setTimeout(() => {
            router.push('/profile')
          }, 1000);
        },
        // prefill: {
        //   name: user.firstName + " " + user.lastName,
        //   email: user.email,
        //   contact: user.phone,
        // },
        // "notes": {
        //   "address": user.city + " " + user.state + " " + user.zipCode
        // },
        "theme": {
          "color": "#3399cc"
        }
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });
      paymentObject.open();
    }
    catch (error) {
      console.log(error);
    }
  }

  // const razorpay = async () => {
  //   try {
  //     const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

  //     if (!res) {
  //       alert('Razropay failed to load!!')
  //       return
  //     }


  //       const options = {
  //         "key": process.env.NEXT_PUBLIC_RAZOR_PAY_KEY_ID, // Enter the Key ID generated from the Dashboard
  //         "amount":10000, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //         "currency": "INR",
  //         "name": "IRRS",
  //         "description": "Railway Reservation System",
  //         "image": "favicon.ico",
  //         "order_id":  //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  //         handler: async function (response) {

  //           const response1 = await data.json()
  //           console.log(response1.success)
  //           // alert(response.razorpay_payment_id);
  //           // alert(response.razorpay_order_id);
  //           // alert(response.razorpay_signature);
  //           console.log(order_id);
  //           console.log(response.razorpay_order_id);
  //           console.log(response.razorpay_payment_id);
  //           console.log(response.razorpay_signature);
  //           router.push('/orderhistory')
  //         },
  //         prefill: {
  //           name: user.firstName + " " + user.lastName,
  //           email: user.email,
  //           contact: user.phone,
  //         },
  //         "notes": {
  //           "address": user.city + " " + user.state + " " + user.zipCode
  //         },
  //         "theme": {
  //           "color": "#3399cc"
  //         }
  //       };
  //       const paymentObject = new window.Razorpay(options);
  //       paymentObject.on("payment.failed", function (response) {
  //         alert(response.error.code);
  //         alert(response.error.description);
  //         alert(response.error.source);
  //         alert(response.error.step);
  //         alert(response.error.reason);
  //         alert(response.error.metadata.order_id);
  //         alert(response.error.metadata.payment_id);
  //       });
  //       paymentObject.open();
  //     }

  //   catch (error) {
  //     console.log(error);
  //   }
  //   finally {
  //     setLoading(false);
  //   }
  // }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
      <Toaster />
      <div className="bg-white rounded-lg shadow-lg p-6">
        {!showFinalSummary ? (
          <>
            <h2 className="text-lg font-bold mb-4">Passenger Details</h2>
            <div className="mb-4">
              <p>From Station: {fromst}</p>
              <p>To Station: {tost}</p>
              <p>Date of Journey: {doj}</p>
              <p>Train: {train.train_number}</p>
              <p>Class Type: {classtype}</p>
            </div>
            {passengers.map((passenger, index) => (
              <div key={index} className="mb-4 flex items-center">
                <h3 className="text-sm font-semibold mr-2">Passenger {index + 1}</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Name"
                    value={passenger.name}
                    onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
                    className="border border-gray-300 rounded-md p-2"
                  />
                  <input
                    type="number"
                    placeholder="Age"
                    value={passenger.age}
                    onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
                    className="border border-gray-300 rounded-md p-2"
                  />
                </div>
                <button
                  onClick={() => handleRemovePassenger(index)}
                  className="ml-2 bg-red-500 text-white rounded-md px-2 py-1"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex justify-between">
              <button
                onClick={handleAddPassenger}
                disabled={passengers.length === 6}
                className="bg-blue-500 text-white rounded-md px-4 py-2 disabled:bg-gray-400"
              >
                Add Passenger
              </button>
              <button
                onClick={handleNext}
                disabled={passengers.length === 0}
                className="bg-green-500 text-white rounded-md px-4 py-2 disabled:bg-gray-400"
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-lg font-bold mb-4">Final Summary</h2>
            <div className="mb-4">
              <p>From Station: {fromst}</p>
              <p>To Station: {tost}</p>
              <p>Date of Journey: {doj}</p>
              <p>Train: {train.train_number}</p>
              <p>Class Type: {classtype}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2">Passengers:</h3>
              {passengers.map((passenger, index) => (
                <div key={index} className="mb-2">
                  <p>
                    Passenger {index + 1}: {passenger.name} ({passenger.age} years old)
                  </p>
                </div>
              ))}
            </div>
            <button className="bg-green-500 text-white rounded-md px-4 py-2 mt-4" onClick={() => handlepayment(100000)}>
              Pay Now
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Summary;